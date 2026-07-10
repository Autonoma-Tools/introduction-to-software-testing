// pages/LoginPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    // Locators
    private readonly usernameInput = '[data-test="username"]';
    private readonly passwordInput = '[data-test="password"]';
    private readonly loginButton = '[data-test="login-button"]';
    private readonly errorMessage = '.error-message';

    private readonly url = '/login';

    constructor(page: Page, private baseUrl: string) {
        super(page);
    }

    async navigate(): Promise<void> {
        await this.navigateTo(`${this.baseUrl}${this.url}`);
    }

    async login(username: string, password: string): Promise<void> {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    async getErrorMessage(): Promise<string> {
        return await this.getText(this.errorMessage);
    }

    async isErrorDisplayed(): Promise<boolean> {
        return await this.isVisible(this.errorMessage);
    }
}
