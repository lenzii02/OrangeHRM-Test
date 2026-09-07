# Bug Reports – OrangeHRM

**Environment:** Chrome 130 / Firefox 131 – Windows 11  
**Tester:** QA Engineer  
**Tanggal Testing:** September 2026

---

**Severity:** 🔴 Critical &nbsp; 🟠 Major &nbsp; 🟡 Minor &nbsp; 🔵 Trivial  
**Status:** 🆕 New &nbsp; 🔄 In Progress &nbsp; ✅ Fixed &nbsp; 🔁 Re-opened

---

## BUG-001 – Alert "Invalid credentials" tidak selalu muncul saat login gagal

| Field | Detail |
|-------|--------|
| **Module** | Login |
| **Severity** | 🟠 Major |
| **Priority** | High |
| **Status** | 🆕 New |
| **Related TC** | TC-LOGIN-02 |

**Steps to Reproduce:**
1. Buka halaman login
2. Username: `Admin`, Password: `wrongpassword`
3. Klik Login
4. Amati response

**Expected:** Alert merah "Invalid credentials" muncul segera  
**Actual:** Terkadang halaman hanya di-refresh tanpa pesan error apapun, terutama saat koneksi lambat

---

## BUG-002 – Tombol Login bisa diklik berkali-kali (tidak ada loading state)

| Field | Detail |
|-------|--------|
| **Module** | Login |
| **Severity** | 🟡 Minor |
| **Priority** | Medium |
| **Status** | 🆕 New |
| **Related TC** | TC-LOGIN-01 |

**Steps to Reproduce:**
1. Isi kredensial valid
2. Klik tombol Login 3–4 kali cepat sebelum respons datang

**Expected:** Tombol disabled / loading setelah klik pertama  
**Actual:** Tombol tetap aktif, mengirim beberapa request sekaligus

---

## BUG-003 – Halaman Forgot Password tidak memberi feedback setelah submit

| Field | Detail |
|-------|--------|
| **Module** | Login – Forgot Password |
| **Severity** | 🟡 Minor |
| **Priority** | Medium |
| **Status** | 🆕 New |
| **Related TC** | TC-LOGIN-06 |

**Steps to Reproduce:**
1. Klik "Forgot your password?"
2. Isi username: `Admin`
3. Klik "Reset Password"

**Expected:** Pesan konfirmasi "Link reset sudah dikirim ke email"  
**Actual:** Langsung kembali ke halaman login tanpa pesan apapun — pengguna tidak tahu apakah berhasil atau tidak

---

## BUG-004 – Field Employee ID menerima karakter huruf tanpa validasi

| Field | Detail |
|-------|--------|
| **Module** | PIM – Add Employee |
| **Severity** | 🟡 Minor |
| **Priority** | Medium |
| **Status** | 🆕 New |
| **Related TC** | TC-PIM-01 |

**Steps to Reproduce:**
1. PIM → Add Employee
2. Isi Employee ID dengan `ABCDE`
3. Isi nama, klik Save

**Expected:** Error validasi "Employee ID harus berupa angka"  
**Actual:** Data tersimpan dengan ID berupa huruf tanpa error

---

## BUG-005 – Pesan "Required" tidak muncul di field Last Name saat form dikosongkan (Firefox)

| Field | Detail |
|-------|--------|
| **Module** | PIM – Add Employee |
| **Severity** | 🟡 Minor |
| **Priority** | Low |
| **Status** | 🆕 New |
| **Related TC** | TC-PIM-03 |
| **Browser** | Firefox 131 (tidak terjadi di Chrome) |

**Steps to Reproduce:**
1. Buka Add Employee di Firefox
2. Biarkan First Name & Last Name kosong
3. Klik Save

**Expected:** "Required" muncul di kedua field  
**Actual:** "Required" hanya muncul di First Name, Last Name tidak ada validasi

---

## BUG-006 – Saldo cuti tidak berkurang setelah leave diapprove

| Field | Detail |
|-------|--------|
| **Module** | Leave Management |
| **Severity** | 🔴 Critical |
| **Priority** | Critical |
| **Status** | 🆕 New |
| **Related TC** | TC-LEAVE-04 |

**Steps to Reproduce:**
1. Catat saldo Annual Leave karyawan (misal: 10 hari)
2. Employee apply cuti 2 hari
3. Admin approve
4. Cek Leave Entitlement karyawan

**Expected:** Saldo berkurang jadi 8 hari  
**Actual:** Saldo tetap 10 hari — tidak ada perubahan sama sekali

**Impact:** Karyawan bisa terus apply cuti melebihi jatah yang seharusnya

---

## BUG-007 – Filter status di Leave List tidak berfungsi

| Field | Detail |
|-------|--------|
| **Module** | Leave Management |
| **Severity** | 🟠 Major |
| **Priority** | High |
| **Status** | 🆕 New |
| **Related TC** | TC-LEAVE-02 |

**Steps to Reproduce:**
1. Login Admin → Leave → Leave List
2. Filter Status: "Pending", klik Search

**Expected:** Hanya tampil data dengan status Pending  
**Actual:** Semua data muncul termasuk Approved dan Rejected

---

## BUG-008 – Halaman blank sebentar setelah submit timesheet (tidak ada loading indicator)

| Field | Detail |
|-------|--------|
| **Module** | Time & Attendance – Timesheet |
| **Severity** | 🟡 Minor |
| **Priority** | Low |
| **Status** | 🆕 New |
| **Related TC** | TC-TIME-03 |

**Steps to Reproduce:**
1. Login Employee → Timesheets → My Timesheets
2. Edit timesheet, klik Submit

**Expected:** Loading indicator muncul, lalu status berubah "Submitted"  
**Actual:** Halaman kosong 3–5 detik tanpa indikasi apapun, pengguna tidak tahu apakah aksinya berhasil

---

## BUG-009 – Double punch-in bisa terjadi karena tombol "In" tidak langsung disabled

| Field | Detail |
|-------|--------|
| **Module** | Time & Attendance |
| **Severity** | 🟠 Major |
| **Priority** | High |
| **Status** | 🆕 New |
| **Related TC** | TC-TIME-06 |

**Steps to Reproduce:**
1. Login Employee → Attendance → My Records
2. Klik tombol "In"
3. Langsung klik "In" lagi sebelum halaman refresh

**Expected:** Tombol "In" langsung disabled setelah klik pertama  
**Actual:** Ada jeda ~2 detik di mana tombol masih aktif, menghasilkan 2 record punch-in di hari yang sama

---

## BUG-010 – Sidebar tidak responsive di viewport 768px (tablet)

| Field | Detail |
|-------|--------|
| **Module** | UI – Responsivitas |
| **Severity** | 🔵 Trivial |
| **Priority** | Low |
| **Status** | 🆕 New |
| **Related TC** | Exploratory |

**Steps to Reproduce:**
1. Buka OrangeHRM di Chrome
2. DevTools → Device Toolbar → iPad (768x1024)
3. Amati sidebar

**Expected:** Sidebar collapse otomatis / hamburger menu  
**Actual:** Sidebar tetap terbuka penuh, menutupi area konten

---

## BUG-011 – Toast "Successfully Saved" muncul tapi data tidak tersimpan

| Field | Detail |
|-------|--------|
| **Module** | PIM – Edit Employee |
| **Severity** | 🔴 Critical |
| **Priority** | Critical |
| **Status** | 🆕 New |
| **Related TC** | TC-PIM-04 |

**Steps to Reproduce:**
1. Login Admin, buka profil karyawan existing
2. Ubah Last Name → Save
3. Refresh halaman, cek Last Name

**Expected:** Last Name tersimpan sesuai perubahan  
**Actual:** Toast "Successfully Saved" muncul, tapi setelah refresh data kembali ke nilai lama

**Impact:** Sangat menyesatkan — Admin mengira data sudah tersimpan padahal tidak

---

## Rekap

| Bug ID | Module | Severity | Priority | Status |
|--------|--------|----------|----------|--------|
| BUG-001 | Login | 🟠 Major | High | 🆕 New |
| BUG-002 | Login | 🟡 Minor | Medium | 🆕 New |
| BUG-003 | Login | 🟡 Minor | Medium | 🆕 New |
| BUG-004 | PIM | 🟡 Minor | Medium | 🆕 New |
| BUG-005 | PIM | 🟡 Minor | Low | 🆕 New |
| BUG-006 | Leave | 🔴 Critical | Critical | 🆕 New |
| BUG-007 | Leave | 🟠 Major | High | 🆕 New |
| BUG-008 | Time | 🟡 Minor | Low | 🆕 New |
| BUG-009 | Time | 🟠 Major | High | 🆕 New |
| BUG-010 | UI | 🔵 Trivial | Low | 🆕 New |
| BUG-011 | PIM | 🔴 Critical | Critical | 🆕 New |

**Total: 11 bug** — 2 Critical, 3 Major, 5 Minor, 1 Trivial
