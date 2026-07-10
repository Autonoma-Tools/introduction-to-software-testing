// pages/DashboardPage.ts
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
    readonly header: Locator;
    private readonly pageTitle = 'h1';

    constructor(page: Page) {
        super(page);
        this.header = this.getLocator('[data-test="dashboard-header"]');
    }

    async isHeaderDisplayed(): Promise<boolean> {
        return await this.header.isVisible();
    }

    async getPageTitle(): Promise<string> {
        return await this.getText(this.pageTitle);
    }
}
