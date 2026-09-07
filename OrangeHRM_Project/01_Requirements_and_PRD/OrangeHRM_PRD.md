# Product Requirements Document (PRD): OrangeHRM

## 1. Pendahuluan
**Tujuan:**
Dokumen ini menguraikan spesifikasi produk, fitur utama, dan persyaratan untuk platform OrangeHRM (Sistem Manajemen Sumber Daya Manusia). PRD ini berfungsi sebagai panduan bagi tim QA, pengembang, dan pemangku kepentingan.

**Ruang Lingkup:**
Fokus utama mencakup modul-modul esensial dari OrangeHRM seperti Autentikasi (Login), Dashboard, Manajemen Informasi Pegawai (PIM), Manajemen Cuti (Leave), dan Pelacakan Waktu (Time Tracking).

## 2. Visi Produk
Menyediakan sistem manajemen SDM yang skalabel dan ramah pengguna untuk menyederhanakan proses HR, mulai dari rekrutmen, pelacakan waktu, hingga evaluasi kinerja secara terpusat.

## 3. Target Pengguna (User Personas)
- **Admin (System Administrator):** Mengelola konfigurasi sistem, hak akses, master data perusahaan, dan manajemen user.
- **Manajer/Supervisor:** Melihat laporan tim, menyetujui/menolak pengajuan cuti atau timesheet dari bawahan.
- **Karyawan (ESS - Employee Self Service):** Mengakses data pribadi, mengajukan cuti, melakukan absensi (punch in/out), dan mengisi timesheet harian.

## 4. Struktur & Fitur Utama (Core Features)

### 4.1. Modul Autentikasi (Login & Security)
- **Halaman Login:** Form dengan input `Username` dan `Password`.
- **Lupa Sandi (Forgot Password):** Mekanisme pemulihan akun berbasis email.
- **Kontrol Akses:** Sistem RBAC (*Role-Based Access Control*) untuk membatasi tampilan menu berdasarkan peran pengguna.

### 4.2. Dashboard Utama
- **Widget Ringkasan:** Menampilkan panel cepat seperti "Time at Work", "My Actions" (tugas tertunda/persetujuan), dan "Quick Launch" (akses cepat ke menu sering dipakai).
- **Notifikasi & Pengumuman:** Menampilkan berita perusahaan atau pemberitahuan sistem.

### 4.3. PIM (Personal Information Management)
- **Profil Karyawan:** Penambahan, pembaruan, dan penonaktifan biodata karyawan, kontak darurat, dependensi, dan dokumen lampiran.
- **Pekerjaan & Gaji:** Data terkait jabatan (Job Title), departemen, status kontrak, dan struktur penggajian dasar.

### 4.4. Manajemen Cuti (Leave Management)
- **Tipe Cuti:** Konfigurasi jenis cuti (Tahunan, Sakit, Melahirkan, dll.) dan alokasi kuota (Entitlements).
- **Pengajuan & Workflow:** Karyawan dapat membuat pengajuan (Apply Leave), dan sistem mengarahkan ke Supervisor untuk disetujui (Approve/Reject).
- **Laporan Cuti:** Melacak sisa kuota (Leave Balance) secara *real-time*.

### 4.5. Manajemen Kehadiran & Waktu (Time & Attendance)
- **Punch In / Punch Out:** Pencatatan jam masuk dan jam keluar harian (bisa dibatasi berdasarkan IP atau lokasi).
- **Timesheets:** Pencatatan waktu kerja berbasis proyek/klien yang dapat dikumpulkan mingguan (Submit) untuk disetujui manajer.

## 5. Persyaratan Non-Fungsional
- **Keamanan:** Menggunakan HTTPS, enkripsi *password* (hashing), dan proteksi terhadap *Brute Force* login (misalnya jeda setelah sekian percobaan gagal).
- **Kinerja (Performance):** Waktu muat halaman (page load) di bawah 3 detik.
- **Usability (UI/UX):** Desain responsif (*Mobile-friendly*), navigasi sidebar (kiri) yang intuitif, dan *feedback* pesan error yang jelas (misal: "Invalid credentials" jika salah password).

## 6. Kriteria Penerimaan (Acceptance Criteria) - Tingkat Tinggi
1. **Login Sukses:** Pengguna diarahkan ke halaman `/web/index.php/dashboard` jika kredensial benar.
2. **Login Gagal:** Muncul pesan peringatan berawarna merah jika kredensial salah, pengguna tetap di halaman login.
3. **Navigasi Berbasis Peran:** Karyawan biasa tidak melihat modul "Admin" di sidebar.
4. **Alur Cuti:** Saldo cuti berkurang secara otomatis hanya setelah pengajuan di-*Approve* oleh Manajer.

---
*Struktur ini dapat digunakan sebagai dasar penyusunan Test Plan, Test Cases, dan struktur pengujian (QA) untuk web OrangeHRM.*
