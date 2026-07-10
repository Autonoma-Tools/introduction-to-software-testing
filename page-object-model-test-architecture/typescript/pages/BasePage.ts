// pages/BasePage.ts
import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async click(locator: string): Promise<void> {
        await this.page.click(locator);
    }

    async fill(locator: string, text: string): Promise<void> {
        await this.page.fill(locator, text);
    }

    async getText(locator: string): Promise<string> {
        return await this.page.textContent(locator) || '';
    }

    async isVisible(locator: string): Promise<boolean> {
        try {
            await this.page.waitForSelector(locator, { state: 'visible', timeout: 10000 });
            return true;
        } catch {
            return false;
        }
    }

    getLocator(selector: string): Locator {
        return this.page.locator(selector);
    }
}
