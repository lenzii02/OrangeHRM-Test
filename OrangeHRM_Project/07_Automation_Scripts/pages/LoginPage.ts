import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    //Error Messages
    readonly errorMesage: Locator;
    //Locator untuk pesan error field input
    readonly requiredFieldErrorMessage: Locator;
    
    constructor(page:Page) {
        this.page = page;
        this.usernameInput =
            page.locator('input[name="username"]');
        this.passwordInput =
            page.locator('input[name="password"]');
        this.loginButton =
            page.locator('button[type="submit"]');
        //Locator Pesan error alert Bawaan orangeHRM
        this.errorMesage = page.locator('.oxd-alert-content-text');
        //Class pesan required di OrangeHRM untuk field username dan password
        this.requiredFieldErrorMessage = page.locator('.oxd-input-field-error-message');
     
    }

    async navigate() { 
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    async login(username: string, password: string) { 
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click()
    }

    //Method Khusus untuk klik login tanpa isi form
    async clickLoginButton() {
        await this.loginButton.click();
    }

}