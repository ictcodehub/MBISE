    const modalVisualData = {
      'management-system': {
        badge: 'Sinergi & Integrasi Sistem',
        title: 'Sinergi & Integrasi Sistem: Menyatukan Ekosistem Digital Sekolah',
        subtitle: 'Mengintegrasikan dan menyempurnakan inisiatif digital yang telah dirintis di jenjang SMP-SMA ke server mandiri, serta memperluas digitalisasi administrasi untuk jenjang SD.',
        metrics: [
          { label: 'Platform Digunakan', before: 'Aplikasi Terpisah & Parsial', after: '1 Ekosistem Terpadu MBISE', highlight: 'Satu Pintu Resmi' },
          { label: 'Ketahanan Layanan', before: 'Tergantung Kuota Eksternal', after: 'Infrastruktur Mandiri Sekolah', highlight: '100% Berdaulat' },
          { label: 'Standardisasi Format', before: 'Berbeda Antarjenjang', after: 'Terstandarisasi SD - SMP - SMA', highlight: 'Terpadu Penuh' }
        ],
        flowBefore: [
          { step: '1. Inovasi Mandiri SMP-SMA', desc: 'Portal guru piket & weekly agenda' },
          { step: '2. Administrasi Terpisah', desc: 'Jurnal PJJ & catatan di spreadsheet' },
          { step: '3. Agenda Konvensional SD', desc: 'Pencatatan agenda di buku fisik' },
          { step: '4. Format Parsial', desc: 'Belum terhubung ke satu sistem' }
        ],
        flowAfter: [
          { step: '1. Portal Terpadu MBISE', desc: 'Satu pintu resmi SD, SMP, & SMA' },
          { step: '2. Server Mandiri Sekolah', desc: 'Proxmox lokal stabil tanpa batas kuota' },
          { step: '3. Presensi Piket Digital', desc: 'Pencatatan mudah & notifikasi WA' },
          { step: '4. Laporan Terpadu Real-Time', desc: 'Akses data akurat bagi pimpinan unit' }
        ],
        pointsBefore: [
          '<strong>Inisiatif Digital yang Telah Dirintis SMP-SMA:</strong> Kepala Sekolah SMA telah berinisiatif membangun portal guru mandiri di <code class="bg-rose-100 px-1 rounded">s.id/portalgurumb2jshs</code> yang memuat web app presensi piket (<code class="bg-rose-100 px-1 rounded">student-attendance-mb2.vercel.app</code>) dan agenda mingguan (<code class="bg-rose-100 px-1 rounded">weekly-agenda-mb2.vercel.app</code>). Inisiatif baik ini saat ini masih berada di hosting cloud publik terpisah, sehingga perlu diwadahi di server internal sekolah agar lebih stabil, aman, dan terbebas dari limitasi kuota.',
          '<strong>Administrasi Dokumen Terpisah:</strong> Berbagai operasional rutin seperti Jurnal PJJ, Catatan Khusus Wali Kelas, Formulir Request Barang Guru, dan Administrasi Pembelajaran saat ini masih tersebar di tautan Google Sheets dan Google Drive yang berdiri sendiri.',
          '<strong>Peluang Digitalisasi Agenda di Jenjang SD:</strong> Berbeda dengan jenjang SMP-SMA yang sudah mulai memakai agenda web, pada jenjang SD pencatatan Weekly Agenda saat ini masih berjalan secara konvensional di buku tulis fisik, sehingga menjadi peluang besar untuk ditingkatkan ke format digital yang rapi dan mudah dipantau orang tua.',
          '<strong>Kebutuhan Database Terpusat Sekolah:</strong> Belum tersedianya basis data terpadu antarpengelola dan jenjang membuat proses rekapitulasi data sekolah membutuhkan waktu koordinasi manual antarunit.'
        ],
        pointsAfter: [
          '<strong>Mengadopsi & Memperkuat Inovasi Pimpinan/Guru:</strong> Inisiatif web presensi piket dan weekly agenda yang telah dirintis Kepsek SMA kita integrasikan secara resmi ke dalam MBISE, disempurnakan fiturnya, dan dijalankan di server lokal sekolah dengan keandalan penuh.',
          '<strong>Digitalisasi Ramah untuk Jenjang SD:</strong> Menghadirkan modul Weekly Agenda digital yang praktis bagi guru, siswa, dan orang tua SD, menggantikan buku tulis fisik menjadi arsip digital yang rapi dan mudah diakses.',
          '<strong>Penyatuan Data ke Basis Data Terpusat (PostgreSQL):</strong> Menyatukan alur presensi piket, agenda kelas, jurnal PJJ, catatan pembinaan siswa, dan administrasi sekolah ke dalam satu sistem database terpadu.',
          '<strong>Kedaulatan & Keamanan Data Sekolah:</strong> Seluruh data rekam jejak siswa dan operasional sekolah tersimpan aman di server Proxmox di lingkungan sekolah sendiri dengan pencadangan (backup) otomatis berkala.'
        ],
        impact: 'Inisiatif aplikasi dan data yang masih terpisah di berbagai platform eksternal serta catatan kertas memerlukan wadah terpadu agar tidak terkendala batasan kuota layanan luar dan mempermudah rekapitulasi.',
        solution: 'MBISE hadir menyinergikan seluruh inisiatif guru dan pimpinan unit menjadi satu ekosistem resmi yang profesional, aman, berdaulat, serta memberikan kemudahan administrasi bagi seluruh jenjang.'
      },
      'software-cost': {
        badge: 'Efisiensi Anggaran',
        title: 'Biaya Lisensi Software & Kuota Cloud Provider',
        subtitle: 'ICTCodehub saat ini menggunakan cloud publik yang rentan memicu biaya berlangganan dan limit kuota.',
        metrics: [
          { label: 'Biaya Sewa Software', before: 'Rp 108 Jt / tahun', after: 'Rp 0 / tahun', highlight: 'Hemat 100%' },
          { label: 'Biaya Cloud / Request', before: 'Bayar per Klik Data', after: 'Lokal Bebas Kuota', highlight: 'Bebas Limit' },
          { label: 'Kepemilikan Aset', before: 'Sewa Hangus', after: 'Aset Tetap Yayasan', highlight: 'Milik Sendiri' }
        ],
        flowBefore: [
          { step: '1. Cloud Firebase', desc: 'Layanan cloud Google' },
          { step: '2. Kuota Terbatas', desc: 'Vercel 75% & GCloud 50%' },
          { step: '3. Tagihan Kartu', desc: 'Bayar per request data' },
          { step: '4. Biaya Hangus', desc: 'Tanpa menghasilkan aset' }
        ],
        flowAfter: [
          { step: '1. Server Lab Mandiri', desc: 'Proxmox di lingkungan sekolah' },
          { step: '2. Zero Subscription', desc: 'Rp 0 biaya langganan bulanan' },
          { step: '3. Bebas Kuota', desc: 'Lalu lintas data lokal LAN' },
          { step: '4. Jadi Aset Sekolah', desc: 'Investasi fisik jangka panjang' }
        ],
        pointsBefore: [
          '<strong>Peringatan Kuota Nyata:</strong> Pada 9 September 2026, sistem sudah terkena limit 50% budget Google Cloud dan 75% kuota transfer data Vercel (7,54 GB dari 10 GB).',
          '<strong>Risiko Biaya Berulang:</strong> Jika 600+ siswa rutin login setiap hari untuk kuis dan materi, batas kuota gratis akan terlampaui dan memicu penagihan otomatis ke kartu kredit.',
          '<strong>Biaya Vendor SaaS Pihak Ketiga:</strong> Sistem aplikasi sekolah komersial di pasaran mengenakan biaya sewa rata-rata Rp 15.000 / siswa / bulan (mencapai Rp 108 juta per tahun).'
        ],
        pointsAfter: [
          '<strong>Rp 0 Biaya Langganan:</strong> Backend, basis data, dan aplikasi berjalan di server Proxmox mandiri tanpa perantara vendor cloud luar.',
          '<strong>Kapasitas Tanpa Batas:</strong> Seluruh siswa dari jenjang SMP dan SMA dapat mengakses kuis harian tanpa khawatir batasan kuota transfer data atau limit request.',
          '<strong>Efisiensi Dana Kas:</strong> Dana yayasan yang tadinya terancam tersedot untuk sewa software pihak ketiga dapat disimpan utuh atau dialihkan untuk fasilitas lab.'
        ],
        impact: 'Ketergantungan pada vendor pihak ketiga membuat yayasan terus mengeluarkan biaya operasional tahunan tanpa pernah memiliki sistemnya sendiri.',
        solution: 'Yayasan 100% berdaulat atas teknologinya sendiri, bebas tagihan bulanan selamanya, dan sistem menjadi aset intelektual resmi sekolah Mutiara Bangsa 2.'
      },
      'website-hosting': {
        badge: 'Penghematan Nyata (Quick Win)',
        title: 'Hosting Website Resmi Mutiara Bangsa School (mutiarabangsa.sch.id)',
        subtitle: 'Penyatuan website resmi 6 kampus Mutiara Bangsa School dari hosting luar Domainesia ke server lokal.',
        metrics: [
          { label: 'Sewa Hosting', before: 'Rp 2,3 Juta / 2 Tahun', after: 'Rp 0 (Hemat 100%)', highlight: 'Quick Win Nyata' },
          { label: 'Resource Server', before: 'Shared (Bagi-bagi)', after: 'Dedicated CPU & RAM', highlight: 'Jauh Lebih Cepat' },
          { label: 'Biaya yang Wajib', before: 'Hosting + Plugin + Domain', after: 'Hanya Domain Rp 55rb/thn', highlight: 'Paling Ekonomis' }
        ],
        flowBefore: [
          { step: '1. Shared Hosting', desc: 'Sewa di Domainesia' },
          { step: '2. Beban Bersama', desc: 'Server lambat jam sibuk' },
          { step: '3. Bayar Rutin', desc: 'Rp 2,3 jt per 2 tahun' },
          { step: '4. Terpisah', desc: 'Tak terhubung data siswa' }
        ],
        flowAfter: [
          { step: '1. LXC 107 Proxmox', desc: 'Kontainer mandiri lokal' },
          { step: '2. Dedicated RAM', desc: 'Caching Redis super gesit' },
          { step: '3. Hapus Sewa', desc: 'Stop tagihan Domainesia' },
          { step: '4. Satu Portal', desc: 'Etalase terpadu 6 kampus' }
        ],
        pointsBefore: [
          '<strong>Biaya Sewa Berulang:</strong> Website resmi <code>mutiarabangsa.sch.id</code> yang menjadi pintu utama 6 kampus saat ini menyewa shared hosting di Domainesia seharga Rp 2.300.000 per 2 tahun.',
          '<strong>Performa Terbatas:</strong> Pada shared hosting, kecepatan akses sering melambat saat musim PPDB karena server dipakai bersama oleh ribuan penyewa website lain.',
          '<strong>Sistem Terisolasi:</strong> Website WordPress di hosting luar berdiri sendiri dan tidak bisa diintegrasikan dengan database siswa, jadwal ujian, maupun portal pembayaran sekolah.'
        ],
        pointsAfter: [
          '<strong>Pangkas 100% Biaya Hosting:</strong> Website WordPress dipindahkan ke Container LXC 107 di Proxmox sekolah. Pengeluaran rutin sewa hosting Domainesia langsung dihentikan.',
          '<strong>Performa Cepat dengan Redis:</strong> Resource CPU dan RAM didedikasikan 100% untuk website Mutiara Bangsa School tanpa gangguan penyewa lain, menghasilkan loading website yang sangat responsif.',
          '<strong>Hanya Bayar Domain PANDI:</strong> Pengeluaran sekolah ke depan hanya berupa perpanjangan domain resmi <code>.sch.id</code> sebesar Rp 55.000 per tahun.'
        ],
        impact: 'Pengeluaran kas sekolah rutin keluar untuk membayar sewa pihak ketiga, padahal sekolah memiliki kapasitas komputer dan jalur internet Biznet sendiri yang mampu melayani web tersebut.',
        solution: 'Menghentikan pengeluaran sewa hosting Domainesia mulai periode berikutnya, menghemat kas yayasan secara nyata sejak tahun pertama implementasi.'
      },
      'offline-exam': {
        badge: 'Keandalan CBT',
        title: 'Ketahanan Ujian CBT di Lab Komputer Bebas Mati Internet',
        subtitle: 'Ujian di lab memakai jalur kabel LAN internal, bukan koneksi internet publik.',
        metrics: [
          { label: 'Kecepatan Jalur Data', before: '100 Mbps (Dibagi 200 PC)', after: '1.000 Mbps (Full LAN)', highlight: '10x Lebih Cepat' },
          { label: 'Latensi Respon (Ping)', before: '30 - 80 ms (Internet)', after: '0 - 1 ms (Jaringan Lokal)', highlight: 'Nol Latensi (Instant)' },
          { label: 'Resiko Ujian Batal', before: 'Tinggi (Tergantung ISP)', after: '0% (Kebal Putus Internet)', highlight: '100% Aman' }
        ],
        flowBefore: [
          { step: '1. Siswa Ujian', desc: '200 anak login serentak' },
          { step: '2. Rebutan ISP', desc: 'Bandwidth internet drop' },
          { step: '3. Internet Putus', desc: 'Kabel optik luar trouble' },
          { step: '4. Ujian Buyar', desc: 'Jawaban hilang & komplain' }
        ],
        flowAfter: [
          { step: '1. Siswa Ujian', desc: 'Login via jaringan lab' },
          { step: '2. Kabel LAN 1 Gbps', desc: 'Transfer lokal tanpa beban' },
          { step: '3. Internet Padam', desc: 'Ujian tetap lancar 100%' },
          { step: '4. Auto-Save Sukses', desc: 'Nilai langsung terbit' }
        ],
        pointsBefore: [
          '<strong>Ketergantungan Penuh pada ISP:</strong> Saat ini ujian di lab komputer mengirim setiap butir jawaban siswa ke server cloud melalui sambungan internet luar.',
          '<strong>Bencana Saat Internet Drop:</strong> Jika kabel fiber optik Biznet/Indihome terputus saat ujian 90 menit sedang berjalan, seluruh komputer siswa langsung error.',
          '<strong>Komplain Orang Tua Murid:</strong> Jawaban yang gagal tersimpan dan penundaan ujian merusak reputasi kredibilitas sekolah di mata orang tua.'
        ],
        pointsAfter: [
          '<strong>Jalur Mandiri Gigabit LAN:</strong> Seluruh paket soal dan autosave jawaban dilayani langsung oleh server Proxmox di dalam ruang lab melalui switch jaringan 1.000 Mbps.',
          '<strong>100% Kebal Internet Padam:</strong> Walaupun koneksi internet ke dunia luar mati total, 200 siswa di lab tetap dapat mengerjakan dan menyelesaikan ujian tanpa hambatan.',
          '<strong>Sinkronisasi Bertahap:</strong> Data nilai ujian aman di server lokal, dan otomatis tersinkron ke cloud begitu koneksi internet luar kembali menyala.'
        ],
        impact: 'Kepanikan siswa dan orang tua saat ujian terganggu internet merupakan risiko operasional terbesar yang dapat mencoreng nama baik sekolah.',
        solution: 'Memberikan jaminan kepastian kelancaran ujian 100% bagi siswa, guru pengawas, dan orang tua murid tanpa rasa cemas terhadap gangguan penyedia internet.'
      },
      'grades-rapor': {
        badge: 'Efisiensi Guru',
        title: 'Pengolahan Nilai & E-Rapor Kurikulum Merdeka Otomatis',
        subtitle: 'Menghentikan lembur berhari-hari guru untuk menyalin nilai secara manual.',
        metrics: [
          { label: 'Waktu Input Nilai', before: '4 - 7 Hari Lembur', after: '30 Detik Sekali Klik', highlight: 'Sangat Hemat Waktu' },
          { label: 'Potensi Human Error', before: 'Tinggi (Salah Ketik Excel)', after: '0% (Tarik Data CBT)', highlight: '100% Akurat' },
          { label: 'Penyusunan Deskripsi CP', before: 'Ketik Manual Guru', after: 'Dihasilkan Otomatis', highlight: 'Sesuai Standar Kemdikbud' }
        ],
        flowBefore: [
          { step: '1. Kuis & Tugas', desc: 'Nilai di kertas / laptop' },
          { step: '2. Excel Masing2', desc: 'Format file tidak seragam' },
          { step: '3. Salin Manual', desc: 'Ketik ulang angka satu2' },
          { step: '4. Lembur Berhari2', desc: 'Guru lelah jelang rapor' }
        ],
        flowAfter: [
          { step: '1. CBT & Tugas MBISE', desc: 'Nilai masuk otomatis' },
          { step: '2. Sinkron CP/TP', desc: 'Deskripsi terbit instan' },
          { step: '3. Review Cepat', desc: 'Guru cukup periksa final' },
          { step: '4. Cetak Rapor', desc: 'Selesai tepat waktu' }
        ],
        pointsBefore: [
          '<strong>Pekerjaan Administratif Melelahkan:</strong> Para guru menghabiskan waktu berjam-jam di luar jam mengajar hanya untuk menyalin nilai dari kertas ulangan ke Excel.',
          '<strong>Format E-Rapor Rumit:</strong> Kurikulum Merdeka mewajibkan deskripsi Capaian Pembelajaran (CP) dan Tujuan Pembelajaran (TP) per siswa, yang sangat berat jika diketik manual.',
          '<strong>Keterlambatan Pembagian Rapor:</strong> Keterlambatan satu guru merekap nilai dapat menunda pencetakan rapor seluruh angkatan.'
        ],
        pointsAfter: [
          '<strong>Otomatisasi Dari Soal ke Rapor:</strong> Hasil kuis harian, tugas, dan ujian semester di MBISE otomatis diolah menjadi nilai akhir mata pelajaran.',
          '<strong>Generasi Deskripsi Otomatis:</strong> Sistem secara cerdas menyusun kalimat capaian kompetensi siswa sesuai pedoman E-Rapor Kemendikbud.',
          '<strong>Guru Fokus Mengajar:</strong> Mengurangi beban stres administratif guru sehingga para guru dapat fokus mendidik dan meningkatkan prestasi siswa.'
        ],
        impact: 'Kelelahan guru akibat pekerjaan administratif yang serba manual menurunkan kualitas pengajaran di kelas.',
        solution: 'Meningkatkan kepuasan kerja guru, menjamin rapor dibagikan tepat waktu, dan memastikan transparansi nilai siswa bagi orang tua murid.'
      },
      'poc-pc': {
        badge: 'Keamanan Investasi',
        title: 'Uji Coba Tahap 1 Memakai PC Lab Eksisting (Modal Awal Rp 0)',
        subtitle: 'Pengadaan server baru hanya diajukan setelah sistem terbukti sukses di lapangan.',
        metrics: [
          { label: 'Biaya Awal Tahap 1', before: 'Beli Server Baru (Puluhan Jt)', after: 'Rp 0 (PC Lab Sudah Ada)', highlight: 'Nol Risiko Finansial' },
          { label: 'Spesifikasi Uji Coba', before: 'Harus Beli Baru', after: 'Core i3 / 8GB / SSD+HDD', highlight: 'Sudah Tersedia di Lab' },
          { label: 'Waktu Implementasi', before: 'Tunggu Anggaran & Tender', after: 'Bisa Mulai Besok', highlight: 'Implementasi Cepat' }
        ],
        flowBefore: [
          { step: '1. Proposal Mahal', desc: 'Minta puluhan juta di awal' },
          { step: '2. Yayasan Ragu', desc: 'Takut dana terbuang sia2' },
          { step: '3. Diskusi Alot', desc: 'Proyek tertunda berbulan2' },
          { step: '4. Tetap Manual', desc: 'Sekolah tidak maju2' }
        ],
        flowAfter: [
          { step: '1. Manfaatkan PC Lab', desc: 'Gunakan 1 unit PC praktek' },
          { step: '2. Uji 1-2 Kelas', desc: 'Buktikan stabil di 60 anak' },
          { step: '3. Bukti Nyata', desc: 'Tunjukkan hasil ke yayasan' },
          { step: '4. Pengadaan Aman', desc: 'Yayasan yakin 100%' }
        ],
        pointsBefore: [
          '<strong>Kekhawatiran Investasi Gagal:</strong> Pengurus yayasan sangat wajar bersikap hati-hati mengeluarkan anggaran modal puluhan juta untuk sistem yang belum teruji.',
          '<strong>Kebutuhan Bukti Nyata:</strong> Teori di atas kertas tidak cukup meyakinkan pengurus jika belum dibuktikan langsung pada komputer sekolah kita sendiri.',
          '<strong>Aset Menganggur:</strong> Di ruang lab ICT Mutiara Bangsa 2 sudah ada unit komputer praktek yang memiliki kapasitas cukup untuk pengujian sistem.'
        ],
        pointsAfter: [
          '<strong>Proof of Concept (POC) Rp 0:</strong> Kita instal Proxmox VE pada 1 unit PC lab (Intel Core i3 Gen 4, RAM 8 GB, SSD 128 GB, HDD 1 TB) yang sudah terhubung ke switch lab.',
          '<strong>Uji Beban Terukur:</strong> Sistem langsung diuji coba untuk tugas harian dan ujian 1-2 kelas (30-60 siswa) guna mengukur kestabilan nyata tanpa biaya sepeser pun.',
          '<strong>Pengadaan Berbasis Fakta:</strong> Setelah yayasan melihat langsung ujian berjalan tanpa internet dan absensi terkirim ke WhatsApp, pengadaan server baru diajukan dengan rasa tenang.'
        ],
        impact: 'Kekhawatiran akan tingginya risiko biaya pengadaan sistem IT baru sering kali menjadi pertimbangan dalam percepatan digital sekolah.',
        solution: 'Memberikan kepastian dan rasa aman bagi yayasan: membuktikan keandalan sistem terlebih dahulu menggunakan komputer lab yang sudah tersedia (Rp 0) sebelum ada komitmen penganggaran.'
      },
      'consideration-1': {
        badge: 'Pertimbangan Strategis Yayasan',
        title: '1. Dari Sistem Serba Manual Menuju Otomatisasi Terpadu',
        subtitle: 'Menyatukan presensi, keuangan, akademik, dan website ke dalam 1 pintu terpusat.',
        metrics: [
          { label: 'Sistem Operasional', before: 'Terpisah & Tanpa Koneksi', after: '1 Basis Data Terpusat', highlight: 'Terintegrasi Penuh' },
          { label: 'Visibilitas Yayasan', before: 'Laporan Manual Lambat', after: 'Dashboard Real-Time', highlight: 'Pantau dari Mana Saja' },
          { label: 'Efisiensi Waktu Staf', before: 'Habis untuk Salin Data', after: 'Otomatis oleh Sistem', highlight: 'Fokus Pelayanan' }
        ],
        flowBefore: [
          { step: '1. Kertas Presensi', desc: 'Rekap absen fisik' },
          { step: '2. Buku Kas TU', desc: 'Catat bayar manual' },
          { step: '3. Laptop Guru', desc: 'Nilai di file terpisah' },
          { step: '4. Data Tidak Sinkron', desc: 'Perlu sinkronisasi manual' }
        ],
        flowAfter: [
          { step: '1. Presensi Guru Piket', desc: 'Input digital & notif WA' },
          { step: '2. Modul Keuangan', desc: 'Catatan SPP transparan' },
          { step: '3. E-Rapor Kurmer', desc: 'Nilai terhubung langsung' },
          { step: '4. Laporan Yayasan', desc: 'Grafik real-time 1 klik' }
        ],
        pointsBefore: [
          'Data siswa saat ini masih berada di beberapa kanal: absensi di lembar guru piket, SPP di pembukuan TU, dan nilai di spreadsheet masing-masing guru.',
          'Manajemen yayasan dan pimpinan sekolah membutuhkan waktu koordinasi bertahap untuk memantau status pembayaran SPP maupun rekapitulasi kehadiran harian.',
          'Pencatatan manual yang tersebar membutuhkan proses rekonsiliasi berkala untuk memastikan konsistensi data antardepartemen.'
        ],
        pointsAfter: [
          'MBISE menciptakan Satu Sumber Kebenaran Data (Single Source of Truth) untuk seluruh unit Mutiara Bangsa 2.',
          'Pengurus yayasan dan kepala sekolah memiliki kemudahan memantau statistik kehadiran siswa, rekap administrasi, dan kemajuan akademik dari satu dashboard.',
          'Seluruh proses terekam dengan jejak audit digital yang terstandarisasi, aman, dan dapat dipertanggungjawabkan.'
        ],
        impact: 'Belum terhubungnya data antarunit membuat proses rekapitulasi operasional sekolah membutuhkan waktu koordinasi ekstra.',
        solution: 'Memberikan transparansi dan kemudahan akses bagi pengurus yayasan dan pimpinan sekolah dalam memantau perkembangan sekolah secara real-time.'
      },
      'consideration-2': {
        badge: 'Pertimbangan Strategis Yayasan',
        title: '2. Efisiensi Biaya Nyata (Quick Win & Hemat Rutin Kas)',
        subtitle: 'Menghentikan pengeluaran sewa hosting luar dan menghindari biaya vendor software bulanan.',
        metrics: [
          { label: 'Sewa Hosting Domainesia', before: 'Rp 2,3 Juta / 2 Tahun', after: 'Rp 0 (Dihentikan)', highlight: 'Hemat Langsung' },
          { label: 'Sewa Software per Siswa', before: 'Rp 108 Juta / Tahun', after: 'Rp 0 Selamanya', highlight: 'Aset Permanen' },
          { label: 'ROI Balik Modal', before: 'Tidak Pernah Balik', after: 'Lunas dalam 1 Tahun', highlight: 'Sangat Menguntungkan' }
        ],
        flowBefore: [
          { step: '1. Bayar Hosting', desc: 'Domainesia Rp 2,3 jt' },
          { step: '2. Potensi Vendor', desc: 'Sewa SaaS ratusan juta' },
          { step: '3. Uang Hangus', desc: 'Tidak ada sisa aset' },
          { step: '4. Biaya Naik Terus', desc: 'Tiap tahun tarif naik' }
        ],
        flowAfter: [
          { step: '1. Hentikan Sewa', desc: 'Website ke server lokal' },
          { step: '2. Server Mandiri', desc: 'Rp 0 biaya langganan' },
          { step: '3. Jadi Aset Fisik', desc: 'Server bertahan 7 tahun' },
          { step: '4. Kas Yayasan Aman', desc: 'Hemat ratusan juta' }
        ],
        pointsBefore: [
          'Biaya sewa hosting website <code>mutiarabangsa.sch.id</code> di Domainesia sebesar Rp 2,3 juta per 2 tahun adalah biaya rutin yang terus keluar dari kas yayasan.',
          'Jika sekolah membeli aplikasi sekolah dari vendor komersial luar, biaya yang harus dibayar adalah Rp 15.000 / anak / bulan (mencapai Rp 108 juta per tahun untuk 600 siswa).',
          'Biaya sewa software bersifat hangus selamanya: jika tahun depan sekolah tidak membayar, semua data dan akses sistem langsung diputus oleh vendor.'
        ],
        pointsAfter: [
          'Menghentikan sewa Domainesia langsung menghemat kas yayasan sejak tahun pertama.',
          'Menghilangkan kebutuhan membayar software vendor bulanan, menghemat potensi pengeluaran hingga ratusan juta rupiah selama 5-7 tahun ke depan.',
          'Pengadaan server fisik menjadi aset inventaris resmi milik yayasan yang nilai gunanya dapat dinikmati ribuan siswa dari tahun ke tahun.'
        ],
        impact: 'Mengeluarkan biaya sewa terus menerus adalah pemborosan anggaran yang tidak meninggalkan aset berwujud bagi yayasan.',
        solution: 'Mengubah biaya pengeluaran operasional (Opex) yang hangus menjadi aset modal (Capex) yang produktif dan bernilai jangka panjang.'
      },
      'consideration-3': {
        badge: 'Pertimbangan Strategis Yayasan',
        title: '3. Uji Coba Tanpa Risiko Dana Awal (Safety First)',
        subtitle: 'Keputusan pengadaan server baru diambil berdasarkan fakta lapangan, bukan asumsi.',
        metrics: [
          { label: 'Biaya Persetujuan Awal', before: 'Harus Setuju Puluhan Jt', after: 'Rp 0 di Tahap 1', highlight: 'Nol Risiko Yayasan' },
          { label: 'Metode Pengujian', before: 'Langsung Beli Baru', after: 'Simulasi PC Lab Dulu', highlight: 'Sangat Terukur' },
          { label: 'Kepastian Keberhasilan', before: 'Spekulatif / Ragu', after: 'Terbukti di 60 Siswa', highlight: '100% Terverifikasi' }
        ],
        flowBefore: [
          { step: '1. Ajukan Anggaran', desc: 'Minta puluhan juta' },
          { step: '2. Yayasan Was-was', desc: 'Khawatir alat tak terpakai' },
          { step: '3. Proyek Mandek', desc: 'Tidak ada titik temu' },
          { step: '4. Rugi Waktu', desc: 'Sekolah jalan di tempat' }
        ],
        flowAfter: [
          { step: '1. Izin Uji Coba', desc: 'Tanpa minta uang di awal' },
          { step: '2. Jalankan di PC Lab', desc: 'Buktikan di 1-2 kelas' },
          { step: '3. Presentasi Hasil', desc: 'Data nyata kestabilan' },
          { step: '4. Keputusan Tenang', desc: 'Pengadaan disetujui aman' }
        ],
        pointsBefore: [
          'Pengurus yayasan seringkali ragu menyetujui pengadaan perangkat IT baru karena kekhawatiran sistem tidak berjalan lancar atau tidak dipakai oleh guru.',
          'Membeli server baru di muka sebelum membuktikan kecocokan software dengan alur kerja sekolah adalah langkah yang mengandung risiko.',
          'Komputer praktek yang ada di lab saat ini belum dimanfaatkan secara optimal di luar jam pelajaran.'
        ],
        pointsAfter: [
          'Fase 1 MBISE menggratiskan seluruh tahapan uji coba dengan memanfaatkan 1 unit PC praktek yang sudah ada di Lab ICT Mutiara Bangsa 2.',
          'Pengurus yayasan diundang secara langsung menyaksikan simulasi ujian offline tanpa internet dan simulasi absensi WhatsApp bot.',
          'Pengajuan anggaran pembelian unit server baru di Fase 2 hanya dilakukan setelah sistem terbukti 100% stabil, mudah dipakai guru, dan disukai orang tua murid.'
        ],
        impact: 'Kekhawatiran yang wajar dari pengurus yayasan seringkali menghambat modernisasi jika tidak ada skema uji coba yang bebas risiko.',
        solution: 'Skema 4 Fase MBISE memberikan rasa aman 100% bagi yayasan: buktikan dulu manfaatnya secara nyata, baru putuskan investasinya kemudian.'
      }
    };

    function openDetailModal(key) {
      const data = modalVisualData[key];
      if (!data) return;

      document.getElementById('modalBadge').innerText = data.badge;
      document.getElementById('modalTitle').innerText = data.title;
      document.getElementById('modalSubtitle').innerText = data.subtitle;

      // 1. Render Scorecards
      const scorecardsContainer = document.getElementById('modalScorecards');
      scorecardsContainer.innerHTML = data.metrics.map(m => `
        <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/80 space-y-1">
          <div class="flex items-center justify-between text-[11px] font-medium text-slate-500">
            <span>${m.label}</span>
            <span class="text-[9px] px-1.5 py-0.2 rounded font-semibold bg-emerald-100 text-emerald-800">${m.highlight}</span>
          </div>
          <div class="flex items-center justify-between pt-1 text-xs">
            <span class="text-rose-700 font-semibold line-through decoration-rose-400 text-[11px]">${m.before}</span>
            <span class="text-slate-400">&rarr;</span>
            <span class="text-emerald-700 font-bold text-xs sm:text-[13px]">${m.after}</span>
          </div>
        </div>
      `).join('');

      // 2. Render Workflow Steps
      const flowBeforeContainer = document.getElementById('modalFlowBefore');
      flowBeforeContainer.innerHTML = data.flowBefore.map((f, i) => `
        <div class="p-2 rounded bg-rose-100/60 border border-rose-200/80 text-rose-950">
          <div class="font-bold text-[11px]">${f.step}</div>
          <div class="text-[10px] text-rose-800/90 leading-tight mt-0.5">${f.desc}</div>
        </div>
      `).join('');

      const flowAfterContainer = document.getElementById('modalFlowAfter');
      flowAfterContainer.innerHTML = data.flowAfter.map((f, i) => `
        <div class="p-2 rounded bg-emerald-100/60 border border-emerald-200/80 text-emerald-950">
          <div class="font-bold text-[11px]">${f.step}</div>
          <div class="text-[10px] text-emerald-800/90 leading-tight mt-0.5">${f.desc}</div>
        </div>
      `).join('');

      // 3. Render Bullet Points
      const pointsBeforeContainer = document.getElementById('modalPointsBefore');
      pointsBeforeContainer.innerHTML = data.pointsBefore.map(p => `
        <div class="flex items-start gap-1.5">
          <i data-lucide="x" class="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5"></i>
          <div>${p}</div>
        </div>
      `).join('');

      const pointsAfterContainer = document.getElementById('modalPointsAfter');
      pointsAfterContainer.innerHTML = data.pointsAfter.map(p => `
        <div class="flex items-start gap-1.5">
          <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i>
          <div>${p}</div>
        </div>
      `).join('');

      // 4. Render Impact & Solution Callouts
      document.getElementById('modalImpactState').innerHTML = data.impact;
      document.getElementById('modalSolutionState').innerHTML = data.solution;

      const modal = document.getElementById('detailModal');
      modal.classList.remove('hidden');
      lucide.createIcons();
    }

    function switchModalView(mode) {
      const cardBefore = document.getElementById('modalCardBefore');
      const cardAfter = document.getElementById('modalCardAfter');
      const btnBefore = document.getElementById('modalTabBtnBefore');
      const btnAfter = document.getElementById('modalTabBtnAfter');

      if (!cardBefore || !cardAfter || !btnBefore || !btnAfter) return;

      if (mode === 'before') {
        cardBefore.classList.remove('hidden');
        cardAfter.classList.add('hidden');
        btnBefore.className = 'py-1.5 rounded-md bg-white text-rose-700 shadow-xs flex items-center justify-center gap-1.5 transition-all';
        btnAfter.className = 'py-1.5 rounded-md text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1.5 transition-all';
      } else {
        cardBefore.classList.add('hidden');
        cardAfter.classList.remove('hidden');
        btnBefore.className = 'py-1.5 rounded-md text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1.5 transition-all';
        btnAfter.className = 'py-1.5 rounded-md bg-white text-emerald-700 shadow-xs flex items-center justify-center gap-1.5 transition-all';
      }
      lucide.createIcons();
    }

    function closeDetailModal() {
      document.getElementById('detailModal').classList.add('hidden');
    }

    function handleBackdropClick(e) {
      closeDetailModal();
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDetailModal();
      }
    });

    function switchTab(name) {
      document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
      
      // Update desktop tabs
      document.querySelectorAll('.tab-nav').forEach(el => {
        el.classList.remove('bg-slate-100', 'text-slate-900', 'font-semibold');
        el.classList.add('text-slate-600', 'font-medium');
      });

      // Update mobile bottom nav
      document.querySelectorAll('.bnav-btn').forEach(el => {
        el.classList.remove('text-slate-950', 'bg-slate-100', 'font-bold');
        el.classList.add('text-slate-500', 'font-medium');
      });

      const pane = document.getElementById('pane-' + name);
      const nav = document.getElementById('tab-nav-' + name);
      const bnav = document.getElementById('bnav-' + name);

      if (pane) pane.classList.add('active');
      if (nav) {
        nav.classList.add('bg-slate-100', 'text-slate-900', 'font-semibold');
        nav.classList.remove('text-slate-600', 'font-medium');
      }
      if (bnav) {
        bnav.classList.add('text-slate-950', 'bg-slate-100', 'font-bold');
        bnav.classList.remove('text-slate-500', 'font-medium');
      }

      lucide.createIcons();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function setStudentCount(count) {
      const slider = document.getElementById('numStudents');
      if (slider) {
        slider.value = count;
        updateCalculation();
      }

      document.querySelectorAll('.preset-btn').forEach(btn => {
        if (btn.innerText.includes(count.toString())) {
          btn.className = 'preset-btn px-2.5 py-1 rounded-md bg-slate-900 border border-slate-900 text-[11px] font-semibold text-white active:scale-95 transition-all';
        } else {
          btn.className = 'preset-btn px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-700 hover:border-slate-400 active:scale-95 transition-all';
        }
      });
    }

    function updateCalculation() {
      const count = parseInt(document.getElementById('numStudents').value);
      document.getElementById('labelStudentCount').innerText = count.toLocaleString('id-ID');

      const monthlySaas = count * 15000;
      const yearlySaas = monthlySaas * 12;
      
      const domainesiaAndPluginsYearly = 1650000;
      const totalYear1Saas = yearlySaas + domainesiaAndPluginsYearly;
      const threeYearsSaas = (yearlySaas * 3) + (domainesiaAndPluginsYearly * 3);

      const serverCapex = 10000000;
      const electricityThreeYears = 120000 * 36;
      const domainRegistrationThreeYears = 55000 * 3;
      const mbiseThreeYears = serverCapex + electricityThreeYears + domainRegistrationThreeYears;

      const savings = threeYearsSaas - mbiseThreeYears;

      document.getElementById('valSaasMonthly').innerText = 'Rp ' + monthlySaas.toLocaleString('id-ID');
      document.getElementById('valSaasYear1').innerText = 'Rp ' + totalYear1Saas.toLocaleString('id-ID');
      document.getElementById('valSaasYear3').innerText = 'Rp ' + threeYearsSaas.toLocaleString('id-ID');
      document.getElementById('valSavings3Year').innerText = 'Rp ' + savings.toLocaleString('id-ID');
    }

    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      updateCalculation();
    });