# Test Plan – OrangeHRM Web Application

**Project:** OrangeHRM QA Portfolio  
**Versi:** 1.0  
**Dibuat:** September 2026  
**Tester:** QA Engineer  

---

## Overview

OrangeHRM adalah sistem HR berbasis web. Pengujian ini mencakup modul-modul utama yang digunakan sehari-hari oleh Admin, Manager, dan Karyawan — mulai dari login hingga pencatatan kehadiran.

Target aplikasi: **https://opensource-demo.orangehrmlive.com**

---

## Scope

**Yang diuji:**
- Login & Authentication (termasuk RBAC)
- PIM – Manajemen Data Karyawan
- Leave Management – Pengajuan & Approval Cuti
- Time & Attendance – Punch In/Out & Timesheet

**Yang tidak diuji:**
- Modul Recruitment & Performance (di luar scope)
- Konfigurasi server & infrastruktur
- Load testing & stress testing

---

## Pendekatan

Pengujian dilakukan secara **manual** untuk semua skenario fungsional dan negatif. Untuk skenario regression yang stabil, dibuat **automation script** menggunakan Playwright + TypeScript dengan pola Page Object Model (POM).

Test case diprioritaskan berdasarkan dampak bisnis:
- **P1** – Alur utama yang wajib jalan (login, tambah karyawan)
- **P2** – Fitur penting (apply leave, punch in, approval)
- **P3** – Fitur pendukung (edit, search, filter)

---

## Akun Uji

| Role | Username | Password |
|------|----------|----------|
| Admin | `Admin` | `admin123` |
| Employee | `Odis.Adalwin` | `Hrd@1234` |

---

## Entry & Exit Criteria

**Mulai testing jika:**
- URL demo bisa diakses
- Akun uji aktif dan bisa login
- Test cases sudah siap

**Selesai testing jika:**
- Semua TC prioritas P1 & P2 sudah dieksekusi
- Bug critical/major sudah dilaporkan
- Test report sudah dibuat

---

## Risiko

| Risiko | Mitigasi |
|--------|----------|
| Demo environment bisa di-reset kapan saja | Pakai timestamp-based ID di setiap run |
| Data demo berubah tanpa notifikasi | Selalu verifikasi data sebelum eksekusi |
| Fitur tertentu dibatasi di demo | Catat sebagai "Demo Limitation" |

---

## Tools

| Kebutuhan | Tool |
|-----------|------|
| Manual Testing | Chrome, Firefox |
| Automation | Playwright + TypeScript |
| Bug Tracking | Markdown (portfolio) |
| Dokumentasi | VS Code |
