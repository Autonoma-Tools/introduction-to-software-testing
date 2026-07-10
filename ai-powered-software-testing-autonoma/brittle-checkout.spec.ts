import { test, expect } from '@playwright/test';

test('user can complete checkout', async ({ page }) => {
  await page.goto('https://shop.example.com');

  // Brittle selector - breaks when HTML changes
  await page.locator('#product-grid > div:nth-child(3) > button.add-to-cart').click();

  // Hard-coded wait - causes flakiness
  await page.waitForTimeout(2000);

  // Specific class name - breaks when CSS refactors
  await page.locator('.cart-icon.header-cart').click();

  // Exact text match - breaks with copy changes
  await page.locator('button:has-text("Proceed to Checkout")').click();

  await page.locator('#email').fill('test@example.com');
  await page.locator('#card-number').fill('4242424242424242');

  // Another brittle selector
  await page.locator('button[type="submit"].checkout-button').click();

  // Assertion breaks if wording changes
  await expect(page.locator('.success-message')).toHaveText('Order confirmed!');
});
