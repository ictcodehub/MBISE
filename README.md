# 🏛️ PROJECT MBISE — Mutiara Bangsa Integrated School Ecosystem
> **Codename:** **MBISE** *(Dibaca: **"EMBAIS"**)*  
> **Status:** Draft / Living Document  
> **Target Sistem:** MBISE Core Platform (LMS, CBT, SAMS, TU/Finance, E-Rapor)  
> **Terakhir Diperbarui:** 09 September 2026  
> **Catatan:** Dokumen ini adalah panduan strategis & teknis hidup. Setiap kali ada diskusi atau keputusan baru, file ini akan terus diperbarui dan dijadikan Single Source of Truth (SSOT) implementasi server mandiri.

---

## 📌 1. Latar Belakang & Motivasi

1. **Efisiensi Biaya (Bebas Biaya Cloud Abadi):** Menghindari risiko tagihan Google Cloud/Firebase yang membengkak seiring bertambahnya jumlah siswa dan aktivitas ujian/tugas harian.
2. **Ketahanan Ujian Lokal (Offline LAN Ready):** Ujian CBT di lab komputer tetap berjalan 100% stabil walau koneksi internet ISP luar sekolah drop/mati mendadak.
3. **Sentralisasi & Ekspansi Sekolah:** Tidak hanya untuk mata pelajaran ICT, server ini disiapkan menampung seluruh guru, modul nilai/rapor, absensi siswa, dan administrasi keuangan sekolah Mutiara Bangsa 2.
4. **Kedaulatan Data & Kontrol Penuh:** Data siswa, ujian, dan keuangan tersimpan aman di server fisik milik sekolah sendiri.

---

## 🗺️ 2. Peta Ekosistem Sistem Manajemen Sekolah Terpadu

```
[ INTEGRATED SCHOOL SYSTEM ]
  │
  ├── 1. AKADEMIK & EVALUASI
  │     ├── ICTCodehub (LMS, Materi, Kuis, Bank Soal, AI Auto-Grading)
  │     ├── CBT Engine (Ujian massal serentak, Ironclad anti-cheat, teacher monitor)
  │     └── E-Rapor & Leger Nilai (Kurikulum Merdeka / Nasional)
  │
  ├── 2. KESISWAAN & DISIPLIN
  │     ├── SAMS (Student Attendance Management System: Presensi Guru Piket Digital & Notif WA)
  │     ├── Bot WhatsApp Notifikasi Ortu (Kehadiran & Keterlambatan)
  │     └── Buku Rekap Poin Pelanggaran & BK
  │
  ├── 3. KEUANGAN & TATA USAHA (TU)
  │     ├── Pembayaran SPP & Uang Gedung (Cetak Kwitansi & Rekapitulasi)
  │     ├── Inventaris Sarpras & Peminjaman Perangkat Lab
  │     └── Manajemen Surat & Arsip Digital
  │
  ├── 4. KEPEGAWAIAN
  │     ├── Absensi Guru & Karyawan
  │     └── Jurnal Harian Mengajar Guru & Rekap Jam Efektif
  │
  └── 5. PORTAL PUBLIK & WEBSITE SEKOLAH
        ├── Website Resmi Mutiara Bangsa School (mutiarabangsa.sch.id - WordPress Profil 6 Kampus)
        ├── PPDB Online (Penerimaan Peserta Didik Baru)
        └── Portal Pantau Orang Tua (Cek nilai & SPP via smartphone)
```

---

## ⚙️ 3. Arsitektur Infrastruktur Proxmox VE

Aplikasi tidak dipasang campur aduk di satu sistem, melainkan diisolasi ke dalam **LXC Container (Linux Containers)** yang ringan, efisien, dan cepat di-backup:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PROXMOX VE HYPERVISOR                           │
├─────────────────┬─────────────────┬──────────────────┬─────────────────┤
│    LXC 100      │    LXC 101      │     LXC 102      │    LXC 103      │
│  Reverse Proxy  │ Main Database   │  ICTCodehub Core │ SAMS & WA Bot   │
│ (Caddy/Nginx)   │ (PostgreSQL/    │  (Node.js App +  │ (Piket Service+ │
│ + Cloudflare T. │  PocketBase)    │   Static Web)    │ Baileys/Node)   │
├─────────────────┼─────────────────┼──────────────────┼─────────────────┤
│    LXC 104      │    LXC 105      │     LXC 106      │    LXC 107      │
│ School Admin &  │ File Storage    │  Deploy Manager  │ School Website  │
│ Finance (TU/SPP)│ (MinIO S3-compat│  (Dokploy /      │ (mutiarabangsa  │
│                 │  Object Storage)│   Webhook CI/CD) │  .sch.id WP)    │
└─────────────────┴─────────────────┴──────────────────┴─────────────────┘
```
*Catatan Efisiensi:* Memindahkan WordPress `mutiarabangsa.sch.id` ke LXC 107 menghentikan sewa shared hosting Domainesia (Rp 2,3 juta / 2 tahun + biaya plugin), menghemat anggaran yayasan secara langsung.

---

## 💻 4. Rencana Hardware & Strategi Migrasi Antar-Perangkat

### Fase Hardware 1: Proof of Concept (PC Praktek Eksisting)
* **Kondisi:** Sudah tersedia di lab ICT (tanpa modal awal).
* **Spesifikasi:**
  - CPU: Intel Core i3 Gen 4 (3.2 GHz, 2 Core / 4 Thread).
  - RAM: 8 GB DDR3.
  - Storage: SSD SATA 128 GB (OS Proxmox + Database) + HDD 1 TB SATA (Storage tugas & backup).
  - Jaringan: Terhubung langsung ke MikroTik Lab ICT (Biznet Dedicated 100 Mbps).
* **Target Uji Coba:** Menjalankan ICTCodehub untuk 1–2 kelas (~30–60 siswa serentak).
* **Trik Optimasi:** Menggunakan backend ultra-ringan (**PocketBase** / **Node.js + SQLite**) yang hanya memakan RAM ~150 MB.

### Fase Hardware 2: Dedicated Production Server (Target Pengadaan)
* **Tipe:** Modern Tower Workstation (Senyap, hemat listrik 65–90 Watt, cocok di ruang lab/kantor).
* **Spesifikasi Rekomendasi:**
  - **CPU:** AMD Ryzen 7 5700X (8 Core / 16 Thread) atau Intel Core i5-13400/14400 (10 Core / 16 Thread).
  - **RAM:** 32 GB – 64 GB DDR4/DDR5.
  - **Storage Utama:** NVMe SSD 1 TB PCIe 4.0 (Kecepatan 5.000 MB/s, jutaan IOPS, garansi 0 lag saat 500+ siswa ujian serentak).
  - **Storage Sekunder:** HDD 4 TB SATA (Cold storage berkas/tugas + backup berkala).
  - **UPS:** 1.000 – 1.200 VA (Wajib mencegah data corrupt jika mati lampu).

### 🚀 Mekanisme Migrasi dari PC Kentang ke Server Baru (Instan & Bebas Repot)
Karena Proxmox berbasis Container/Virtualisasi, **perubahan hardware fisik 100% tidak berpengaruh**:
1. Di PC lama: Klik kanan Container -> **Backup Now** -> Jadi 1 file arsip `.tar.zst`.
2. Salin file backup ke flashdisk.
3. Di server baru: Install Proxmox VE -> Colok flashdisk -> Klik **Restore**.
4. **Selesai dalam 3 menit.** Sistem, data akun siswa, dan database langsung berjalan tanpa perlu install ulang OS/software.

---

## 🔄 5. Workflow Developer (Antigravity IDE Tetap Jadi Markas)

Cara kerja lo sebagai developer **SAMA SEKALI TIDAK BERUBAH**:
1. **Coding:** Lo tetap buka Antigravity IDE di laptop/PC lo di folder `d:\Project\ictcodehub`.
2. **Pairing:** Lo tetap minta Antigravity bantu buat fitur, debug, dan testing lokal.
3. **Deploy:** Begitu lo jalanin `/ship-it` dan push ke GitHub:
   - GitHub mengirim sinyal webhook ke Proxmox.
   - Proxmox otomatis menjalankan `git pull` & update aplikasi secara hening (CI/CD Auto-Deploy).
   - Web langsung live ter-update tanpa lo harus buka terminal server.

---

## 🌐 6. Akses Jaringan: LAN Lokal vs Akses Luar (Rumah)

* **Di Dalam Sekolah (Lab Komputer & Wi-Fi Guru):**  
  Akses langsung via DNS lokal / IP LAN (misal: `http://192.168.1.100` atau `http://cbt.ictcodehub.local`). Kecepatan maksimal, latensi 0 ms, dan tetap jalan walau internet Biznet putus.
* **Di Luar Sekolah (Rumah Siswa & Guru):**  
  Menggunakan **Cloudflare Tunnel** atau IP Publik Statis Biznet yang di-routing ke domain `ictcodehub.web.id`. Gratis, terenkripsi SSL HTTPS otomatis, dan terlindung dari serangan DDoS.

---

## 📅 7. Interactive Roadmap & Actionable Timeline

Gunakan checklist ini untuk melacak progres implementasi:

### FASE 1: Penyiapan Mesin Proxmox (PC Praktek)
- [ ] Siapkan flashdisk installer Proxmox VE 8.x (via Rufus/BalenaEtcher).
- [ ] Backup data lama di PC praktek i3.
- [ ] Install Proxmox VE pada SSD 128 GB.
- [ ] Atur IP Statis Proxmox di jaringan MikroTik Lab (misal: `192.168.88.100`).
- [ ] Pasang HDD 1 TB sebagai direktori storage sekunder di Proxmox (`Storage Pool`).
- [ ] Verifikasi Web GUI Proxmox bisa dibuka lancar dari browser laptop.

### FASE 2: Pembuatan Container & Konfigurasi Stack Mandiri
- [ ] Buat Container LXC Debian 12 minimalis (RAM 2 GB, 2 Core CPU).
- [ ] Install Docker & Docker Compose / Standalone Node.js di dalam LXC.
- [ ] Tentukan & deploy database mandiri pengganti Firebase (Rekomendasi: PocketBase atau PostgreSQL).
- [ ] Pasang Caddy / Nginx sebagai local web server.
- [ ] Setup Cloudflare Tunnel agar container bisa diakses aman dari luar lewat subdomain test.

### FASE 3: Adaptasi Kode ICTCodehub (Firebase Abstraction)
- [ ] Buat adapter/layer database agar frontend bisa beralih fleksibel antara Firebase dan Local Backend.
- [ ] Migrasikan autentikasi login (Student, Teacher, Admin).
- [ ] Uji coba modul CBT (load soal, timer, lockdown, autosave jawaban).
- [ ] Uji coba simulasi 30 siswa serentak di lab komputer secara offline/LAN.

### FASE 4: Otomasi CI/CD & Auto-Deploy
- [ ] Buat deploy hook (GitHub Webhook / Dokploy) di container.
- [ ] Uji alur: Edit di Antigravity -> `git push` -> Server Proxmox auto-update live.
- [ ] Setup backup otomatis harian (Proxmox Scheduled Backup) ke HDD 1 TB.

### FASE 5: Validasi, Pengadaan Server Baru & Ekspansi Modul
- [ ] Buat laporan performa & penghematan biaya untuk presentasi ke pihak yayasan/sekolah.
- [ ] Lakukan pengadaan server baru (Modern Workstation Tower Ryzen/Core i5 + NVMe + UPS).
- [ ] Pindahkan sistem dari PC praktek ke server baru via **Proxmox Backup-Restore** (3 menit migrasi).
- [ ] Integrasi modul SAMS (Presensi Guru Piket Digital & Notifikasi WhatsApp) serta SPP/Keuangan.

---

## 💬 8. Log Diskusi & Catatan Revisi

| Tanggal | Topik | Catatan & Keputusan |
|---|---|---|
| **09/09/2026** | Inisiasi Rencana Proxmox & Penamaan Project | Pemetaan hardware i3 Gen 4, evaluasi 200 siswa serentak, konsep migrasi instan 3 menit antar-hardware, arsitektur sekolah terpadu, dan penetapan nama resmi: **MBISE** *(Mutiara Bangsa Integrated School Ecosystem - dibaca **"EMBAIS"**)*. |
