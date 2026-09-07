import { Page, Locator } from '@playwright/test';

export class PimPage {
    readonly page: Page;
    readonly pimMenu: Locator;
    readonly addEmployeeButton: Locator;
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly employeeIdInput: Locator;
    readonly saveButton: Locator;
    readonly employeeProfileHeader: Locator;

    // Tambahan elemen baru untuk Fitur Search
    readonly searchEmployeeIdInput: Locator;
    readonly searchButton: Locator;
    readonly tableRows: Locator;

    constructor(page: Page) {
        this.page = page;

        // 1. Menu PIM di Sidebar
        this.pimMenu = page.locator('a[href*="viewPimModule"]');

        // 2. Tombol Add Employee (+ Add)
        this.addEmployeeButton = page.locator('button:has-text("Add")');
        
        // 3. Form Input Data Karyawan (perhatikan tanda petik ganda)
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.middleNameInput = page.locator('input[name="middleName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');

        // Input Employee ID
        this.employeeIdInput = page.locator('.oxd-grid-2 input.oxd-input');

        // Save Button
        this.saveButton = page.locator('button[type="submit"]');

        // Header Profil Karyawan (tambahkan 'orangehrm')
        this.employeeProfileHeader = page.locator('.orangehrm-edit-employee-name h6');

        // Locator Search 
        // Search Employee ID
        this.searchEmployeeIdInput = page.locator('.oxd-input-group:has-text("Employee Id") input');

        // Tombol Search berwarna hijau orange dengan tipe submit
        this.searchButton = page.locator('button[type="submit"]');
        
        //Baris Tabel hasil pencarian
        this.tableRows = page.locator('.oxd-table-card');

    } // <-- Constructor ditutup di sini

    // Method Action berada di LUAR constructor:
    async navigateToPim() {
        await this.pimMenu.click();
    }

    async clickAddEmployee() {
        await this.addEmployeeButton.click();
    }

    async addNewEmployee(firstName: string, middleName: string, lastName: string, employeeId?: string) {
        await this.firstNameInput.fill(firstName);
        await this.middleNameInput.fill(middleName);
        await this.lastNameInput.fill(lastName);

        if (employeeId) {
            await this.employeeIdInput.clear();
            await this.employeeIdInput.fill(employeeId);
        }

        await this.saveButton.click();
    }

    // Method Untuk Search
    async searchEmployeeId(empId: string) {
        await this.searchEmployeeIdInput.fill(empId);
        await this.searchButton.click();
    }
}
