# PROJECT MBISE

> **Codename:** MBISE *(Dibaca: "EMBAIS")*
> **Status:** Draft / Living Document
> **Terakhir Diperbarui:** 10 September 2026

---

MB2
        
          MBISE
          Server Mandiri Sekolah Terpadu
        
      

      
        
          **
          Cetak PDF
        
        
          **
          Hitung Anggaran
          Kalkulator
        
        
          **
        
      
    

    
    
      
        Ringkasan Proposal
      
      
        Latar Belakang & Masalah
      
      
        Cakupan Sistem (5 Pilar)
      
      
        Perbandingan Biaya
      
      
        Spesifikasi Server & Jaringan
      
      
        Rencana Pelaksanaan
      
    
  

  
  

    
    
      
      
        Dokumen Usulan Teknis & Anggaran
        
# 
          Pengembangan Server Mandiri Berbasis Proxmox untuk Sistem Sekolah Terpadu (MBISE)
        

        

          Proposal ini menguraikan rencana **pengembangan dan perluasan platform School LMS & Asesmen Digital** yang sudah berjalan saat ini, agar dapat digunakan oleh **seluruh guru mata pelajaran (SD, SMP, SMA)** untuk penyampaian materi, kuis harian, tugas, dan ujian CBT bebas gangguan internet. Rencana ini juga mencakup migrasi **Website Resmi Mutiara Bangsa School (mutiarabangsa.sch.id)** dari hosting sewa Domainesia serta penyatuan sistem presensi dan administrasi ke server mandiri milik sekolah.
        

      

      
      
        Ringkasan Indikator Teknis & Operasional
        
          
          Klik kartu di bawah untuk melihat rincian kondisi aktual saat ini
        
      

      
      
        
        
          
            
              
                
              
              Sistem Manajemen Sekolah
            
            
              Buka Visual →
            
          
          
            Sinergi & Integrasi Sistem
            Menghubungkan aplikasi guru piket & agenda SMP-SMA serta digitalisasi agenda SD ke server mandiri.
          
          
          
            Format Terpisah per Jenjang
            →
            MBISE: 1 Ekosistem Terpadu
          
        

        
        
          
            
              
                
              
              Biaya Lisensi Software
            
            
              Buka Visual →
            
          
          
            Rp 0 / bulan
            Sistem 100% milik sekolah, bebas biaya lisensi vendor per siswa.
          
          
          
            SaaS: Rp 108 Jt/thn
            →
            MBISE: Rp 0 Selamanya
          
        

        
        
          
            
              
                
              
              Website Resmi MB School
            
            
              Buka Visual →
            
          
          
            Rp 0 (Hemat 2,3 Juta)
            mutiarabangsa.sch.id (6 Kampus) pindah dari Domainesia ke Proxmox lokal.
          
          
          
            Domainesia: Rp 2,3 Jt
            →
            Proxmox: Hemat 100%
          
        

        
        
          
            
              
                
              
              Ketahanan Ujian CBT
            
            
              Buka Visual →
            
          
          
            Offline LAN Ready
            Ujian lab kebal mati internet, jalur kabel internal latensi 0 ms.
          
          
          
            Cloud: Rawan ISP Down
            →
            LAN: 1 Gbps Bebas Putus
          
        

        
        
          
            
              
                
              
              Administrasi & Nilai
            
            
              Buka Visual →
            
          
          
            Otomatis & Real-Time
            Hilangkan lembur rekap manual nilai Excel saat pembagian e-Rapor.
          
          
          
            Guru: Lembur Salin Excel
            →
            MBISE: 1 Klik Jadi Rapor
          
        

        
        
          
            
              
                
              
              Modal Awal Uji Coba
            
            
              Buka Visual →
            
          
          
            Rp 0 (PC Lab)
            Tahap 1 memanfaatkan 1 unit PC praktek yang sudah ada di lab.
          
          
          
            Modal Awal: Rp 0
            →
            Pakai PC Lab Eksisting
          
        
      

      
      
        
          
            
## Pertimbangan Strategis untuk Pengurus Yayasan

            
Tiga pilar utama mengapa modernisasi server mandiri sangat mendesak dan aman bagi yayasan.

          
          
            
            Klik kartu untuk rincian
          
        
        
        
          
            
              
                
                1. Dari Manual ke Sistem Terpadu
              
              Buka →
            
            
Saat ini belum ada sistem manajemen yang menghubungkan data siswa. Absensi manual kertas, pencatatan SPP di TU terpisah, dan nilai di laptop masing-masing guru.

          

          
            
              
                
                2. Efisiensi Biaya Nyata (Quick Win)
              
              Buka →
            
            
Penghentian sewa hosting Domainesia (Rp 2,3 juta / 2 tahun) dan pencegahan biaya sewa vendor software luar (bisa ratusan juta per tahun) langsung memotong pengeluaran kas yayasan.

          

          
            
              
                
                3. Uji Coba Tanpa Risiko Dana
              
              Buka →
            
            
Pengadaan server baru hanya diajukan setelah sistem terbukti stabil diuji coba pada 1-2 kelas menggunakan komputer lab yang sudah tersedia (Rp 0 di tahap 1).

          
        
      
    

    
    
      
        
          
## Kondisi Lapangan & Masalah Saat Ini

          
Evaluasi teknis sistem ICTCodehub dan operasional sekolah Mutiara Bangsa 2.

        

        
        
          
            
              
              Peluang Sinergi: Menyatukan Inisiatif Digital Sekolah (SD, SMP, & SMA)
            
            Potret Lapangan
          
          
            
              
                
                Jenjang SMP & SMA: Inisiatif Digital Mandiri yang Sangat Baik
              
              

                Pimpinan dan tim guru di SMP-SMA telah menunjukkan komitmen inovasi digital mandiri dengan menghadirkan portal guru di [s.id/portalgurumb2jshs](https://s.id/portalgurumb2jshs), yang memuat modul kehadiran murid oleh guru piket dan weekly agenda. Agar inisiatif baik ini memiliki keandalan jangka panjang tanpa risiko batasan kuota platform hosting luar negeri, diperlukan dukungan server lokal resmi sekolah yang stabil dan permanen.
              

            
            
              
                
                Jenjang SD: Potensi Transformasi Menuju Agenda Digital
              
              

                Pada jenjang SD, pencatatan Weekly Agenda dan presensi saat ini berjalan secara konvensional menggunakan buku agenda fisik. Hal ini menjadi potensi besar untuk kita fasilitasi ke dalam format digital yang praktis, sehingga mempermudah para guru piket dan memberikan kemudahan bagi para orang tua murid dalam memantau agenda harian anak langsung dari ponsel.
              

            
          
          
            
            **Tujuan MBISE:** Mengapresiasi dan menyatukan seluruh inisiatif mandiri bapak/ibu guru ke dalam satu ekosistem server sekolah yang terstandarisasi, aman, dan berdaulat.
          
        

        
          
          
            
              
              Efisiensi Biaya Website Resmi (mutiarabangsa.sch.id)
            
            

              Website resmi Mutiara Bangsa School (WordPress) yang menjadi etalase utama 6 kampus (Poris Indah, Duta Garden, Jelambar, Banjar Wijaya, Pasar Kemis, Citra Maja) saat ini menyewa shared hosting di Domainesia sebesar **Rp 2,3 juta per 2 tahun**. Pemindahan ke server Proxmox lokal memotong pengeluaran rutin ini menjadi Rp 0 dengan kecepatan loading yang jauh lebih gesit.
            

          

          
          
            
              
              Keterbatasan Kuota Cloud Provider Publik
            
            

              Platform pembelajaran ICTCodehub saat ini masih berjalan pada infrastruktur cloud publik. Pada 9 September 2026, pemakaian sudah mencapai 50% budget Google Cloud dan 75% kuota transfer Vercel. Dengan server mandiri di sekolah, seluruh siswa dan guru dari seluruh jenjang dapat mengakses materi dan asesmen tanpa rasa cemas terhadap batasan kuota data.
            

          

          
          
            
              
              Jaminan Kelancaran Ujian Bebas Gangguan ISP
            
            

              Ketergantungan pada koneksi internet publik saat ujian serentak berisiko bila jalur ISP luar mengalami kendala teknis. Jalur kabel LAN lokal 1.000 Mbps di lab sekolah memastikan ujian 200+ siswa tetap berlangsung 100% lancar walau koneksi internet ke dunia luar padam.
            

          

          
          
            
              
              Kebutuhan Integrasi Data Lintas Layanan
            
            

              Saat ini data kehadiran, agenda kelas, dan nilai siswa masih tersimpan di dokumen terpisah. Menyatukannya ke dalam satu basis data terpusat akan mempermudah koordinasi antar-guru, mempercepat penerbitan e-Rapor, dan memberikan laporan statistik real-time yang akurat bagi pengurus yayasan.
            

          
        
      
    

    
    
      
        
          
## 5 Pilar Sistem Sekolah Terpadu (MBISE)

          
Satu server lokal yang melayani lima kebutuhan operasional sekolah.

        

        
          
            1. Platform LMS & Asesmen Digital (ICTCodehub)
            

              Pengembangan platform ICTCodehub yang sudah berjalan saat ini agar dapat digunakan oleh **seluruh guru mata pelajaran (SD, SMP, SMA)** untuk menyajikan materi belajar interaktif, tugas harian, kuis, dan ujian sekolah (CBT) dengan proteksi anti-curang (lockdown) serta koreksi otomatis bebas gangguan internet.
            

            Status: Sudah aktif & teruji di lab, siap diperluas untuk semua guru mapel.
          

          
            2. Presensi Guru Piket & Notifikasi (SAMS)
            

              Presensi digital terpusat untuk guru piket dan wali kelas. Menggantikan cara manual guru piket SD yang keliling kelas membawa kertas, serta menyatukan web app guru piket SMP/SMA dari Vercel ke server lokal dengan notifikasi WhatsApp otomatis ke orang tua jika siswa tidak hadir atau terlambat.
            

            Status: Menyatukan sistem guru piket & agenda ke server lokal.
          

          
            3. Administrasi Keuangan (SPP & TU)
            

              Pencatatan pembayaran SPP, uang seragam/kegiatan, cetak kwitansi digital, rekapitulasi tunggakan, serta pengingat tagihan berkala ke wali murid.
            

            Status: Menggantikan pencatatan manual buku kas TU.
          

          
            4. E-Rapor & Leger Nilai
            

              Portal penginputan nilai tugas dan ujian oleh seluruh guru mata pelajaran sesuai standar Kurikulum Merdeka, perhitungan predikat otomatis, hingga cetak lembar rapor siswa.
            

            Status: Mencegah kekeliruan rekap nilai manual.
          

          
            5. Website Resmi Mutiara Bangsa School (mutiarabangsa.sch.id)
            

              Menghosting website utama **mutiarabangsa.sch.id** (profil 6 kampus Mutiara Bangsa 1-7, berita, kegiatan, dan pendaftaran siswa baru) di container Proxmox lokal dengan akselerasi Cloudflare CDN gratis.
            

            Status: Menghentikan sewa Domainesia Rp 2,3 juta / 2 tahun.
          

          
            Modul Sarpras & Kepegawaian
            

              Pendataan inventaris komputer lab, proyektor kelas, peminjaman alat, presensi kehadiran guru, dan rekap jurnal harian mengajar kelas.
            

            Status: Modul pendukung operasional internal.
          
        
      
    

    
    
      
        
          
## Analisis Finansial: Sewa Vendor vs Server Mandiri

          
Perhitungan estimasi penghematan kas yayasan dalam periode 1 sampai 3 tahun.

        

        
        
          
            Simulasi Jumlah Siswa (SMP + SMA):
            
              600 Siswa
            
          

          
          
            Pilih Cepat:
            200 Siswa
            600 Siswa
            1.000 Siswa
            1.200 Siswa
          

          *
          
          
            200
            600 (Aktual)
            1.000
            1.200
          
        

        
        
          
          
            
              Opsi A: Sewa Vendor Aplikasi + Hosting Luar
              Sewa Rutin
            
            
              
                Tarif aplikasi per siswa:
                Rp 15.000 / bln
              
              
                Pengeluaran aplikasi per bulan:
                Rp 9.000.000
              
              
                Sewa hosting Domainesia (web yayasan):
                Rp 1.150.000 / thn
              
              
                Estimasi plugin WordPress berbayar:
                Rp 500.000 / thn
              
              
                Total Pengeluaran 1 Tahun:
                Rp 109.650.000
              
              
                Total Pengeluaran 3 Tahun:
                Rp 328.950.000
              
            
            
Biaya sewa terus berjalan selamanya tanpa ada kepemilikan aset bagi sekolah.

          

          
          
            
              Opsi B: Server Mandiri MBISE
              Aset Milik Sekolah
            
            
              
                Tahap 1 (Uji Coba PC Lab):
                Rp 0 (Alat Sudah Ada)
              
              
                Pengadaan Server Baru (Beli 1x):
                Rp 10.000.000 (Aset Tetap)
              
              
                Hosting Web Sekolah di Proxmox:
                Rp 0 (Sudah Include)
              
              
                Perpanjangan Domain .sch.id:
                Rp 55.000 / thn (Resmi PANDI)
              
              
                Estimasi Biaya Listrik (24/7):
                ± Rp 120.000 / bln
              
              
                Total Biaya 1 Tahun (Unit+Listrik+Domain):
                Rp 11.495.000
              
              
                Total Biaya 3 Tahun:
                Rp 14.485.000
              
            
            
              Estimasi Penghematan Yayasan dalam 3 Tahun:
              Rp 314.465.000
            
          
        
      
    

    
    
      
        
          
## Spesifikasi Perangkat Keras & Jaringan

          
Pendekatan bertahap dari PC lab praktek menuju server produksi resmi.

        

        
          
            
              
                Komponen
                Tahap 1: Uji Coba (PC Lab Sekarang)
                Tahap 2: Pengadaan Server Produksi Baru
              
            
            
              
                Tujuan
                Validasi fungsi & uji beban 1-2 kelas (30-60 siswa)
                Operasional penuh seluruh sekolah (500-1000 siswa) + Web Yayasan
              
              
                Processor (CPU)
                Intel Core i3 Gen 4 (3.2 GHz, 2 Core / 4 Thread)
                AMD Ryzen 7 5700X (8 Core) atau Intel i5 Gen 13/14
              
              
                RAM
                8 GB DDR3
                32 GB atau 64 GB DDR4/DDR5
              
              
                Penyimpanan Sistem & DB
                SSD SATA 128 GB
                NVMe SSD 1 TB PCIe 4.0 (5.000 MB/s, jutaan IOPS)
              
              
                Penyimpanan Berkas/Backup
                HDD 1 TB SATA
                HDD 4 TB SATA (Arsip tugas, foto web + auto backup harian)
              
              
                Daya Listrik (Estimasi)
                ± 65 Watt
                ± 75-100 Watt (Hemat daya, senyap tanpa AC ruang khusus)
              
              
                Kebutuhan Anggaran
                Rp 0 (Memakai inventaris yang ada)
                ± Rp 8.500.000 - 11.000.000
              
            
          
        

        
          Pembagian Beban Container Proxmox:
          

            Di Proxmox, sistem dibagi menjadi container mandiri: (1) Reverse Proxy Caddy/Nginx, (2) Database Utama, (3) Platform LMS & Ujian ICTCodehub untuk Seluruh Guru, (4) Presensi Guru Piket & Agenda Digital SD-SMP-SMA, (5) Administrasi SPP/TU, dan (6) **Container WordPress Khusus Website Resmi MB School (mutiarabangsa.sch.id)** yang dilengkapi Redis Cache agar load halaman sangat cepat bagi orang tua siswa.
          

        
      
    

    
    
      
        
          
## Tahapan Pelaksanaan (Roadmap Proyek)

          
Rencana kerja bertahap agar tidak mengganggu proses pembelajaran berjalan.

        

        
          
            
              Fase 1: Persiapan Server Uji Coba di Lab (Bulan ke-1)
              Biaya: Rp 0
            
            

              Memasang Proxmox VE pada 1 unit PC praktek i3 di lab ICT. Mengatur IP lokal pada MikroTik lab dan menyiapkan container database mandiri.
            

          

          
            
              Fase 2: Uji Coba CBT & Penilaian di 1-2 Kelas (Bulan ke-2)
              Biaya: Rp 0
            
            

              Menjalankan simulasi ujian CBT untuk 30-60 siswa pada mata pelajaran ICT. Memastikan autosave jawaban lancar, sistem stabil di jaringan LAN tanpa internet luar, dan tidak terjadi kendala memori.
            

          

          
            
              Fase 3: Pelaporan ke Yayasan & Pengadaan Server Baru (Bulan ke-3)
              Biaya: Sesuai Anggaran Disetujui
            
            

              Mempresentasikan hasil evaluasi teknis Fase 2 kepada pengurus yayasan dan kepala sekolah. Mengajukan pengadaan 1 unit server workstation baru berdasarkan data keberhasilan uji coba.
            

          

          
            
              Fase 4: Migrasi Penuh, Migrasi Web Domainesia & Integrasi Modul (Bulan ke-4 ke Depan)
              Operasional Penuh
            
            

              Memindahkan sistem ke server baru (proses 3 menit). Memindahkan website `mutiarabangsa.sch.id` dari hosting Domainesia ke Proxmox (menghentikan perpanjangan sewa hosting). Mengaktifkan modul presensi guru piket digital terpadu dan SPP.
            

          
        

        
          
            Proposal Teknis MBISE Siap Dipaparkan
            Dapat dipresentasikan langsung via browser ini atau dicetak sebagai berkas proposal resmi.
          
          
            Cetak Berkas Usulan
          
        
      
    

  
  

  
  
    
      
      
      

      
      
        
          Kondisi Aktual
          
### Judul Detail

          
Perbandingan visual kondisi operasional sekolah saat ini vs sistem mandiri MBISE.

        
        
          *
        
      

      
      
        
      

      
      
        
          **
          Perbandingan Alur Kerja (Workflow Comparison)
        

        
        
          
            
            Alur Kerja Saat Ini (Terpisah):
          
          
            
          
        

        
        
          
            
            Alur Kerja Baru Ekosistem MBISE (1 Pintu & Otomatis):
          
          
            
          
        
      

      
      
        
          **
          Kondisi Saat Ini
        
        
          **
          Solusi MBISE
        
      

      
      
        
        
        
          
            
              **
              Kondisi Lapangan Saat Ini
            
            Konvensional
          

          
            
          

          
            
              **
              Dampak Terhadap Sekolah:
            
            
              Dampak operasional...
            
          
        

        
        
          
            
              **
              Solusi Ekosistem MBISE
            
            Server Mandiri
          

          
            
          

          
            
              **
              Keuntungan Nyata bagi Yayasan:
            
            
              Keuntungan yayasan...
            
          
        

      

      
      
        Tekan ESC atau klik area luar untuk menutup rincian
        
          
            Tutup Rincian
          
        
      
    
  

  
  
    
      Project MBISE &bull; Mutiara Bangsa 2 School &bull; Tim ICT
    
  

  
  

  
  
    
      **
      Ringkasan
    
    
      **
      Masalah
    
    
      **
      5 Pilar
    
    
      **
      Biaya
    
    
      **
      Server
    
    
      **
      Fase
    
  

  
  
    
      Password Admin
      *
      
Password salah.

      
        Batal
        Masuk
      
    
  

  
  
    
      GitHub Token
      
PAT dengan akses **Contents: Read & Write** ke repo `ictcodehub/MBISE`.

      
      

      
        Lewati
        
          Batal
          Simpan
        
      
    
  

  
  
    
      
      
        * Save
      
      
        Exit
