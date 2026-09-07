# Test Cases – Time & Attendance

**URL:** https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchInOut

---

| TC ID | Skenario | Precondition | Steps | Expected Result | Status |
|-------|----------|-------------|-------|-----------------|--------|
| TC-TIME-01 | Punch In berhasil | Login Employee, belum punch in hari ini | 1. Time → Attendance → My Records <br> 2. Klik tombol "In" <br> 3. Isi note (opsional): `WFO` <br> 4. Konfirmasi | Waktu punch in terekam, tombol berubah jadi "Out" | ⬜ |
| TC-TIME-02 | Punch Out berhasil | Sudah punch in sebelumnya | 1. Klik tombol "Out" <br> 2. Isi note <br> 3. Konfirmasi | Punch out terekam, durasi kerja terhitung otomatis (Out - In) | ⬜ |
| TC-TIME-03 | Isi dan submit timesheet mingguan | Login Employee, timesheet belum disubmit | 1. Time → Timesheets → My Timesheets <br> 2. Klik Edit, isi jam kerja Senin–Jumat (8 jam/hari) <br> 3. Save → Submit | Status timesheet berubah "Submitted", field jadi read-only | ⬜ |
| TC-TIME-04 | Admin approve timesheet | Ada timesheet berstatus Submitted | 1. Login Admin <br> 2. Time → Timesheets → Employee Timesheets <br> 3. Cari karyawan, buka timesheet → Approve | Status berubah "Approved" | ⬜ |
| TC-TIME-05 | Admin lihat rekap kehadiran karyawan | Login Admin | 1. Time → Attendance → Employee Records <br> 2. Cari karyawan, pilih tanggal <br> 3. Klik View | Data punch in/out dan durasi kerja tampil dengan benar | ⬜ |
| TC-TIME-06 | Punch In ganda tidak diperbolehkan | Sudah punch in hari ini | 1. Buka halaman Attendance <br> 2. Perhatikan tombol yang tersedia | Tombol "In" tidak aktif/tersembunyi, hanya ada tombol "Out" | ⬜ |
| TC-TIME-07 | Timesheet tidak bisa diedit setelah Submit | Timesheet berstatus Submitted | 1. Buka timesheet yang sudah Submitted <br> 2. Coba klik Edit | Tombol Edit tidak tersedia atau field dalam mode read-only | ⬜ |

**Status:** ⬜ Not Run &nbsp; ✅ Pass &nbsp; ❌ Fail &nbsp; ⏭️ Skipped
