// components/Navigation.ts
import { BasePage } from '../pages/BasePage';

export class NavigationComponent extends BasePage {
    private readonly homeLink = '[data-nav="home"]';
    private readonly productsLink = '[data-nav="products"]';
    private readonly cartIcon = '[data-nav="cart"]';
    private readonly userMenu = '[data-nav="user-menu"]';

    async goToHome(): Promise<void> {
        await this.click(this.homeLink);
    }

    async goToProducts(): Promise<void> {
        await this.click(this.productsLink);
    }

    async openCart(): Promise<void> {
        await this.click(this.cartIcon);
    }

    async isUserLoggedIn(): Promise<boolean> {
        return await this.isVisible(this.userMenu);
    }
}
