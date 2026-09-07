import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/PimPage';

test.describe('OrangeHRM PIM Feature', () => {

    let loginPage: LoginPage;
    let pimPage: PimPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        pimPage = new PimPage(page);

        // Sebelum Uji PIM, login terlebih dahulu
        await loginPage.navigate();
        await loginPage.login('Admin', 'admin123');

        await expect(page).toHaveURL(/.*dashboard/);
    });

    test('PIM 1: Successfully Add New Employee with Valid Data', async ({ page }) => {
        const firstName = 'John';
        const middleName = 'Doe';
        const lastName = 'Smith';
        const uniqueEmpId = Date.now().toString().slice(-4);

        // 1. Klik menu PIM di Sidebar
        await pimPage.navigateToPim();
        await expect(page).toHaveURL(/.*viewEmployeeList/);

        // 2. Klik tombol Add
        await pimPage.clickAddEmployee();
        await expect(page).toHaveURL(/.*addEmployee/);

        // 3. Isi data karyawan baru dan simpan
        await pimPage.addNewEmployee(firstName, middleName, lastName, uniqueEmpId);

        // 4. Validasi: Sistem akan redirect ke halaman Personal Details
        await expect(page).toHaveURL(/.*viewPersonalDetails/, { timeout: 10000 });

        // 5. Validasi: Pastikan nama karyawan muncul di header profil
        await expect(pimPage.employeeProfileHeader).toBeVisible();
        await expect(pimPage.employeeProfileHeader).toHaveText(`${firstName} ${lastName}`);
    });

    test('PIM 2: Search Employee By ID Successfully', async ({ page }) => {
        const firstName = 'Jane';
        const middleName = 'Grey';
        const lastName = 'Sandy';
        const uniqueEmpId = Date.now().toString().slice(-4);

        await pimPage.navigateToPim();
        await pimPage.clickAddEmployee();
        await pimPage.addNewEmployee(firstName, middleName, lastName, uniqueEmpId);

        await expect(page).toHaveURL(/.*viewPersonalDetails/, { timeout: 10000 });

        // Kembali ke halaman daftar karyawan pim
        await pimPage.navigateToPim();
        await expect(page).toHaveURL(/.*viewEmployeeList/);

        // Cari karyawan dengan ID
        await pimPage.searchEmployeeId(uniqueEmpId);

        // Validasi Tavek menampilkan 1 hasil
        await expect(pimPage.tableRows).toHaveCount(1);

        // Validasi Pastikan baris tabel tersebut mengandung ID dan Nama Karywana yang dicari
        await expect(pimPage.tableRows.first()).toContainText(uniqueEmpId);
        await expect(pimPage.tableRows.first()).toContainText(`${firstName} ${middleName}`);
        await expect(pimPage.tableRows.first()).toContainText(`${lastName}`);

        
    });
});
