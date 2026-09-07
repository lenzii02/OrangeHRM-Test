# Test Data – OrangeHRM

**Environment:** https://opensource-demo.orangehrmlive.com  

---

## Akun Pengguna

| Role | Username | Password | Akses |
|------|----------|----------|-------|
| Admin | `Admin` | `admin123` | Full access |
| Employee | `Odis.Adalwin` | `Hrd@1234` | Terbatas (Leave, Time, My Info) |

> Jika akun Employee tidak aktif, buat baru via Admin → User Management → Users → Add.

---

## Data Login

| Skenario | Username | Password |
|----------|----------|----------|
| Valid login | `Admin` | `admin123` |
| Password salah | `Admin` | `wrongpassword` |
| Username tidak ada | `userGhoib99` | `admin123` |
| Semua kosong | *(kosong)* | *(kosong)* |
| Hanya password kosong | `Admin` | *(kosong)* |

---

## Data Karyawan Baru (PIM)

| Field | Data 1 | Data 2 | Data 3 |
|-------|--------|--------|--------|
| First Name | `John` | `Jane` | `Budi` |
| Middle Name | `Doe` | `Grey` | `Santoso` |
| Last Name | `Smith` | `Sandy` | `Wijaya` |
| Employee ID | `7788` | `9901` | `5544` |
| Gender | Male | Female | Male |
| Nationality | American | Australian | Indonesian |

> **Automation note:** Di `pim.spec.ts`, Employee ID digenerate pakai `Date.now().toString().slice(-4)` biar unik setiap run.

---

## Data Pengajuan Cuti (Leave)

| TC | Tipe | From | To | Durasi | Keterangan |
|----|------|------|----|--------|-----------|
| TC-LEAVE-01 | Annual Leave | 2026-10-01 | 2026-10-03 | 3 hari | Liburan |
| TC-LEAVE-02 | Annual Leave | 2026-10-05 | 2026-10-06 | 2 hari | Personal |
| TC-LEAVE-05 | Annual Leave | 2026-10-01 | 2026-10-15 | 15 hari | Melebihi saldo |
| TC-LEAVE-08 | Annual Leave | 2026-10-10 | 2026-10-05 | - | Tanggal terbalik (invalid) |

---

## Data Timesheet

| Hari | Project | Activity | Jam |
|------|---------|----------|-----|
| Senin | Internal Project | Testing | 8 |
| Selasa | Internal Project | Testing | 8 |
| Rabu | Internal Project | Documentation | 8 |
| Kamis | Internal Project | Meeting | 8 |
| Jumat | Internal Project | Testing | 8 |

---

## Data Attachment (PIM)

| File | Format | Ukuran | Keterangan |
|------|--------|--------|-----------|
| `attachment_test.pdf` | PDF | < 1MB | Valid – KTP karyawan |
| `big_file.zip` | ZIP | > 1MB | Invalid – uji batas ukuran |
