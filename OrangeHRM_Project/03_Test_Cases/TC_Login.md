# Test Cases – Login & Authentication

**URL:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login  
**Automation:** `tests/login.spec.ts`

---

| TC ID | Skenario | Precondition | Steps | Expected Result | Status |
|-------|----------|-------------|-------|-----------------|--------|
| TC-LOGIN-01 | Login berhasil sebagai Admin | - | 1. Buka halaman login <br> 2. Username: `Admin`, Password: `admin123` <br> 3. Klik Login | Redirect ke `/dashboard`, header tampil "Dashboard" | ⬜ |
| TC-LOGIN-02 | Login gagal – password salah | - | 1. Username: `Admin` <br> 2. Password: `wrongpassword` <br> 3. Klik Login | Muncul alert merah "Invalid credentials", tetap di halaman login | ⬜ |
| TC-LOGIN-03 | Login gagal – semua field kosong | - | 1. Langsung klik tombol Login tanpa isi apapun | Pesan "Required" muncul di bawah field username dan password | ⬜ |
| TC-LOGIN-04 | Login gagal – username tidak terdaftar | - | 1. Username: `userGhoib99` <br> 2. Password: `admin123` <br> 3. Klik Login | Muncul "Invalid credentials", URL tetap di login | ⬜ |
| TC-LOGIN-05 | Login gagal – hanya password dikosongkan | - | 1. Username: `Admin` <br> 2. Password dikosongkan <br> 3. Klik Login | Pesan "Required" muncul hanya di field password | ⬜ |
| TC-LOGIN-06 | Forgot Password – tampil form reset | - | 1. Klik link "Forgot your password?" <br> 2. Isi username: `Admin` <br> 3. Klik Reset Password | Muncul konfirmasi bahwa link reset sudah dikirim ke email | ⬜ |
| TC-LOGIN-07 | RBAC – menu Admin tidak tampil untuk Employee | Akun employee tersedia | 1. Login pakai akun Employee <br> 2. Lihat sidebar | Menu "Admin" tidak terlihat di sidebar. Menu yang muncul terbatas (Leave, Time, My Info) | ⬜ |
| TC-LOGIN-08 | Logout berhasil | Sudah login | 1. Klik ikon profil di kanan atas <br> 2. Klik "Logout" | Kembali ke halaman login, session habis | ⬜ |
| TC-LOGIN-09 | Username case-sensitive | - | 1. Username: `admin` (huruf kecil) <br> 2. Password: `admin123` <br> 3. Klik Login | Gagal login atau berhasil — catat hasilnya sebagai temuan | ⬜ |

**Status:** ⬜ Not Run &nbsp; ✅ Pass &nbsp; ❌ Fail &nbsp; ⏭️ Skipped

---

**Catatan Automation:**
- TC-LOGIN-01, 02, 03 sudah diotomasi di `login.spec.ts`
- Skenario lainnya dieksekusi manual
