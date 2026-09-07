# Test Cases – PIM (Personal Information Management)

**URL:** https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList  
**Precondition umum:** Login sebagai Admin  
**Automation:** `tests/pim.spec.ts`

---

| TC ID | Skenario | Steps | Expected Result | Status |
|-------|----------|-------|-----------------|--------|
| TC-PIM-01 | Tambah karyawan baru – data valid | 1. PIM → Add Employee <br> 2. First Name: `John`, Middle: `Doe`, Last: `Smith` <br> 3. Employee ID: `7788` <br> 4. Save | Redirect ke halaman Personal Details, header tampil "John Smith" | ⬜ |
| TC-PIM-02 | Cari karyawan by Employee ID | 1. Buka Employee List <br> 2. Isi field Employee ID: `7788` <br> 3. Klik Search | Tabel menampilkan 1 baris dengan ID dan nama yang sesuai | ⬜ |
| TC-PIM-03 | Tambah karyawan – nama wajib dikosongkan | 1. PIM → Add Employee <br> 2. Biarkan First Name & Last Name kosong <br> 3. Save | Pesan "Required" muncul di kedua field, data tidak tersimpan | ⬜ |
| TC-PIM-04 | Edit nama karyawan | 1. Buka profil karyawan existing <br> 2. Ubah Last Name menjadi `Johnson` <br> 3. Save | Notifikasi "Successfully Saved", nama di header berubah | ⬜ |
| TC-PIM-05 | Hapus karyawan | 1. Cari karyawan di Employee List <br> 2. Centang checkbox, klik Delete <br> 3. Konfirmasi di pop-up | Karyawan terhapus, pencarian ulang menghasilkan "No Records Found" | ⬜ |
| TC-PIM-06 | Search karyawan – nama tidak ada | 1. Isi Employee Name: `ZZZFiktif999` <br> 2. Klik Search | Tabel menampilkan "No Records Found" | ⬜ |
| TC-PIM-07 | Upload lampiran di profil karyawan | 1. Buka profil karyawan <br> 2. Tab Attachments → Add <br> 3. Upload file PDF < 1MB, isi comment <br> 4. Save | File berhasil tampil di daftar lampiran dengan nama dan komentar yang benar | ⬜ |
| TC-PIM-08 | Employee tidak bisa akses PIM orang lain | 1. Login sebagai Employee <br> 2. Coba akses menu PIM | Menu PIM tidak tersedia di sidebar, atau redirect ke halaman error jika akses URL langsung | ⬜ |

**Status:** ⬜ Not Run &nbsp; ✅ Pass &nbsp; ❌ Fail &nbsp; ⏭️ Skipped

---

**Catatan Automation:**
- TC-PIM-01 dan TC-PIM-02 sudah diotomasi di `pim.spec.ts`
- Employee ID menggunakan `Date.now().toString().slice(-4)` agar unik setiap run
