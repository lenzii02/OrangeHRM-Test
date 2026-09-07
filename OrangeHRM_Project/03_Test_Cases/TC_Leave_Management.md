# Test Cases – Leave Management

**URL:** https://opensource-demo.orangehrmlive.com/web/index.php/leave/leaveList

---

| TC ID | Skenario | Precondition | Steps | Expected Result | Status |
|-------|----------|-------------|-------|-----------------|--------|
| TC-LEAVE-01 | Apply leave – data valid | Login sebagai Employee, saldo > 0 | 1. Leave → Apply <br> 2. Tipe: Annual Leave, From: `2026-10-01`, To: `2026-10-03` <br> 3. Klik Apply | Pengajuan tersimpan dengan status "Pending" | ⬜ |
| TC-LEAVE-02 | Admin approve pengajuan cuti | Ada pengajuan berstatus Pending | 1. Login Admin <br> 2. Leave → Leave List, filter Pending <br> 3. Buka pengajuan → Approve | Status berubah jadi "Approved", saldo karyawan berkurang | ⬜ |
| TC-LEAVE-03 | Admin reject pengajuan cuti | Ada pengajuan berstatus Pending | 1. Login Admin <br> 2. Buka pengajuan → Reject <br> 3. Isi alasan penolakan | Status berubah "Rejected", saldo karyawan tidak berkurang | ⬜ |
| TC-LEAVE-04 | Saldo cuti berkurang setelah approved | Saldo diketahui sebelum apply (misal: 10 hari) | 1. Employee apply 2 hari <br> 2. Admin approve <br> 3. Cek Leave Entitlement | Saldo berkurang jadi 8 hari (bukan saat Pending, tapi setelah Approved) | ⬜ |
| TC-LEAVE-05 | Apply leave – saldo tidak cukup | Saldo hanya 1 hari | 1. Leave → Apply, pilih Annual Leave <br> 2. Isi durasi 5 hari <br> 3. Klik Apply | Sistem menolak pengajuan, muncul pesan insufficient balance | ⬜ |
| TC-LEAVE-06 | Employee cancel pengajuan yang masih Pending | Ada pengajuan berstatus Pending | 1. Leave → My Leave List <br> 2. Klik Cancel pada pengajuan Pending | Status berubah "Cancelled", saldo tidak berkurang | ⬜ |
| TC-LEAVE-07 | Cek Leave Balance | Login sebagai Employee | 1. Leave → My Entitlements | Tampil daftar tipe cuti beserta sisa saldo yang akurat | ⬜ |
| TC-LEAVE-08 | Apply leave – tanggal To lebih awal dari From | - | 1. From Date: `2026-10-10`, To Date: `2026-10-05` <br> 2. Klik Apply | Sistem menampilkan error validasi, pengajuan tidak tersimpan | ⬜ |

**Status:** ⬜ Not Run &nbsp; ✅ Pass &nbsp; ❌ Fail &nbsp; ⏭️ Skipped
