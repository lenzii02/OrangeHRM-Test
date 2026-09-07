import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('OrangeHRM Authentication Feature', () => {

    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    })

    //Positive Case
    test('AC 1: Successful login with valid credentials', async ({ page }) => {
        //1. Buka Halaman login

        //2. Login dengan akun demo kredensial Orange HRM
        await loginPage.login('Admin', 'admin123');

        //3. Validasi dan Pastikan arah ke dashboard
        await expect(page).toHaveURL(/.dashboard/);

        //4. Validasi Tambahan: Memastikan teks "Dashboard" munvul di header
        const dashboardHeader = page.locator('h6:has-text("Dashboard")');
        await expect(dashboardHeader).toBeVisible();
    });

    //Negative Case 1
    test('AC 2 : Failed Login with invalid password', async ({ page }) => {
        //2. Login dengan password salah
        await loginPage.login('Admin', 'wrongpassword');

        //3. Validasi pesan error muncul
        await expect(loginPage.errorMesage).toContainText('Invalid credentials');

        //4. Pastikan URL tetap di halaman login
        await expect(page).toHaveURL(/.*login/);
    });

    //Megative Case 2 Form kosong
    test('AC 3: Failed Login when username and password fields are empty', async ({ page }) => {
        //1. Klik tombol login tanpa input form
        await loginPage.clickLoginButton()

        //2. Validasi Pesan Error muncul di kedua field
        //Pesan Error dibawah username (elemen pertama)
        await expect(loginPage.requiredFieldErrorMessage.first()).toBeVisible();
        await expect(loginPage.requiredFieldErrorMessage.first()).toHaveText('Required');

        //Pesan Error dibawah password elemen kedua
        await expect(loginPage.requiredFieldErrorMessage.last()).toBeVisible();
        await expect(loginPage.requiredFieldErrorMessage.last()).toHaveText('Required');

        await expect(page).toHaveURL(/.*login/);
    })


});