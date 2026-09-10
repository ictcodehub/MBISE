    // ==================== INLINE EDITOR ====================
    const ADMIN_PASSWORD_HASH = '3c572a17e9270209da12a06a7a532651cb3b757b67beebbf6abca5357ce70aa0';
    const GITHUB_REPO = 'ictcodehub/MBISE';
    const GITHUB_BRANCH = 'main';
    let adminToken = localStorage.getItem('mbise_admin_token') || '';
    let editMode = false;
    let hasUnsavedChanges = false;

    async function sha256(message) {
      const buf = new TextEncoder().encode(message);
      const hash = await crypto.subtle.digest('SHA-256', buf);
      return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    function toggleEditMode() {
      if (editMode) { exitEditMode(); return; }
      document.getElementById('pwModal').classList.remove('hidden');
      document.getElementById('pwInput').value = '';
      document.getElementById('pwError').classList.add('hidden');
      document.getElementById('pwInput').focus();
    }

    async function submitPassword() {
      const pw = document.getElementById('pwInput').value;
      const hash = await sha256(pw);
      if (hash !== ADMIN_PASSWORD_HASH) {
        document.getElementById('pwError').classList.remove('hidden');
        document.getElementById('pwInput').value = '';
        document.getElementById('pwInput').focus();
        return;
      }
      document.getElementById('pwModal').classList.add('hidden');
      if (!adminToken) {
        document.getElementById('tokenModal').classList.remove('hidden');
        document.getElementById('tokenInput').value = '';
        document.getElementById('tokenError').classList.add('hidden');
        document.getElementById('tokenInput').focus();
      } else {
        enterEditMode();
      }
    }

    function submitToken() {
      const t = document.getElementById('tokenInput').value.trim();
      if (!t) { document.getElementById('tokenError').textContent = 'Token tidak boleh kosong.'; document.getElementById('tokenError').classList.remove('hidden'); return; }
      adminToken = t;
      localStorage.setItem('mbise_admin_token', t);
      document.getElementById('tokenModal').classList.add('hidden');
      enterEditMode();
    }

    function skipToken() {
      document.getElementById('tokenModal').classList.add('hidden');
      enterEditMode();
    }

    function enterEditMode() {
      editMode = true;
      document.body.classList.add('edit-mode');
      document.querySelectorAll('main h1, main h2, main h3, main h4, main p, main li, main td, main th, main a, main strong, main em, main code').forEach(el => {
        if (el.closest('button') || el.closest('nav') || el.closest('header') || el.closest('.no-print') || el.closest('#adminFloatingBar')) return;
        if (el.tagName === 'A' && el.querySelector('svg')) return;
        if (!el.textContent.trim()) return;
        el.classList.add('editable');
        el.setAttribute('contenteditable', 'true');
        el.dataset.orig = el.innerHTML;
        el.addEventListener('blur', onEditBlur);
      });
      document.getElementById('adminFloatingBar').classList.add('show');
      document.getElementById('adminEditBtn').classList.add('!text-blue-600', '!border-blue-300', '!bg-blue-50');
      lucide.createIcons();
    }

    function onEditBlur(e) {
      if (e.target.innerHTML !== e.target.dataset.orig) {
        hasUnsavedChanges = true;
        document.getElementById('adminSaveStatus').textContent = 'Unsaved changes';
        document.getElementById('adminSaveStatus').className = 'text-xs text-amber-600 font-medium';
      }
    }

    function exitEditMode() {
      if (hasUnsavedChanges && !confirm('Ada perubahan belum disimpan. Yakin keluar?')) return;
      editMode = false;
      document.body.classList.remove('edit-mode');
      document.querySelectorAll('.editable').forEach(el => {
        el.removeAttribute('contenteditable');
        el.classList.remove('editable');
        el.removeEventListener('blur', onEditBlur);
        delete el.dataset.orig;
      });
      document.getElementById('adminFloatingBar').classList.remove('show');
      document.getElementById('adminEditBtn').classList.remove('!text-blue-600', '!border-blue-300', '!bg-blue-50');
      hasUnsavedChanges = false;
      document.getElementById('adminSaveStatus').textContent = '';
    }

    function serializeBody() {
      const clone = document.querySelector('main').cloneNode(true);
      clone.querySelectorAll('.editable').forEach(el => {
        el.removeAttribute('contenteditable');
        el.classList.remove('editable');
        delete el.dataset.orig;
      });
      return clone.innerHTML;
    }

    async function adminSaveToGitHub() {
      if (!adminToken) { alert('Token tidak ada. Keluar dan masuk lagi untuk input token.'); return; }
      const saveBtn = document.getElementById('adminSaveBtn');
      saveBtn.disabled = true; saveBtn.innerHTML = '<span class="animate-pulse">Saving...</span>';
      document.getElementById('adminSaveStatus').textContent = 'Menyimpan ke GitHub...';
      try {
        const [indexResp, readmeResp] = await Promise.all([
          fetch('https://api.github.com/repos/' + GITHUB_REPO + '/contents/index.html?ref=' + GITHUB_BRANCH, { headers: { 'Authorization': 'Bearer ' + adminToken } }),
          fetch('https://api.github.com/repos/' + GITHUB_REPO + '/contents/README.md?ref=' + GITHUB_BRANCH, { headers: { 'Authorization': 'Bearer ' + adminToken } })
        ]);
        if (!indexResp.ok) throw new Error('Fetch index.html: ' + indexResp.status);
        const indexData = await indexResp.json();
        let readmeSha = null;
        if (readmeResp.ok) readmeSha = (await readmeResp.json()).sha;

        const origHTML = decodeURIComponent(escape(atob(indexData.content.replace(/\n/g, ''))));
        const newBodyContent = serializeBody();
        const mainRe = /<main[\s\S]*?<\/main>/;
        const mainOpen = '<main class="max-w-6xl w-full mx-auto px-4 sm:px-6 py-4 sm:py-6 flex-1 space-y-5 sm:space-y-6 pb-24 md:pb-8">\n';
        const mainClose = '\n  </main>';
        const newHTML = origHTML.replace(mainRe, mainOpen + newBodyContent + mainClose);
        const readmeContent = htmlToMarkdown(newHTML);

        const now = new Date();
        const ts = now.toISOString().replace('T', ' ').slice(0, 19);
        const msg = 'edit: update proposal via live editor (' + ts + ')';
        const bodyIndex = JSON.stringify({ message: msg, content: btoa(unescape(encodeURIComponent(newHTML))), sha: indexData.sha, branch: GITHUB_BRANCH });
        const bodyReadme = JSON.stringify({ message: msg, content: btoa(unescape(encodeURIComponent(readmeContent))), sha: readmeSha, branch: GITHUB_BRANCH });
        const [idxRes, rmRes] = await Promise.all([
          fetch('https://api.github.com/repos/' + GITHUB_REPO + '/contents/index.html', { method: 'PUT', headers: { 'Authorization': 'Bearer ' + adminToken, 'Content-Type': 'application/json' }, body: bodyIndex }),
          fetch('https://api.github.com/repos/' + GITHUB_REPO + '/contents/README.md', { method: 'PUT', headers: { 'Authorization': 'Bearer ' + adminToken, 'Content-Type': 'application/json' }, body: bodyReadme })
        ]);
        if (!idxRes.ok) throw new Error('index.html: ' + ((await idxRes.json()).message || idxRes.status));
        if (!rmRes.ok) throw new Error('README.md: ' + ((await rmRes.json()).message || rmRes.status));
        hasUnsavedChanges = false;
        document.getElementById('adminSaveStatus').textContent = 'Tersimpan! GitHub Pages update ~1 menit.';
        document.getElementById('adminSaveStatus').className = 'text-xs text-emerald-600 font-medium';
      } catch (err) {
        document.getElementById('adminSaveStatus').textContent = 'Error: ' + err.message;
        document.getElementById('adminSaveStatus').className = 'text-xs text-red-600';
      } finally {
        saveBtn.disabled = false; saveBtn.innerHTML = '<i data-lucide="upload" class="w-3.5 h-3.5"></i> Save';
        lucide.createIcons();
      }
    }

    function htmlToMarkdown(html) {
      var md = html;
      md = md.replace(/<head[\s\S]*?<\/head>/gi, '');
      md = md.replace(/<script[\s\S]*?<\/script>/gi, '');
      md = md.replace(/<style[\s\S]*?<\/style>/gi, '');
      md = md.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
      md = md.replace(/<svg[\s\S]*?<\/svg>/gi, '');
      md = md.replace(/<!--[\s\S]*?-->/g, '');
      md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
      md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
      md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');
      md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n');
      md = md.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, '**$2**');
      md = md.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, '*$2*');
      md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');
      md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');
      md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n');
      md = md.replace(/<br\s*\/?>/gi, '\n');
      md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
      md = md.replace(/<[^>]+>/g, '');
      md = md.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
      md = md.replace(/\n{3,}/g, '\n\n');
      var dateStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
      md = '# PROJECT MBISE\n\n> **Codename:** MBISE *(Dibaca: "EMBAIS")*\n> **Status:** Draft / Living Document\n> **Terakhir Diperbarui:** ' + dateStr + '\n\n---\n\n' + md.trim() + '\n';
      return md;
    }

    document.addEventListener('DOMContentLoaded', function() { lucide.createIcons(); updateCalculation(); });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        if (!document.getElementById('pwModal').classList.contains('hidden')) { document.getElementById('pwModal').classList.add('hidden'); return; }
        if (!document.getElementById('tokenModal').classList.contains('hidden')) { document.getElementById('tokenModal').classList.add('hidden'); return; }
        if (editMode) exitEditMode();
      }
      if (e.key === 'Enter' && !document.getElementById('pwModal').classList.contains('hidden')) submitPassword();
    });