// tests/authentication.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Authentication', () => {
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page, process.env.BASE_URL || 'http://localhost:3000');
        dashboardPage = new DashboardPage(page);
    });

    test('successful login with valid credentials', async () => {
        await loginPage.navigate();
        await loginPage.login('testuser@example.com', 'ValidPassword123!');

        expect(await dashboardPage.isHeaderDisplayed()).toBe(true);
        expect(await dashboardPage.getPageTitle()).toContain('Dashboard');
    });

    test('error message shown for invalid credentials', async () => {
        await loginPage.navigate();
        await loginPage.login('invalid@example.com', 'WrongPassword');

        expect(await loginPage.isErrorDisplayed()).toBe(true);
        expect(await loginPage.getErrorMessage()).toContain('Invalid credentials');
    });
});
