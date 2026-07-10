import { test, expect } from '@playwright/test';

test('user can log in successfully', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://example.com/login');

  // Fill credentials
  await page.fill('[data-testid="email"]', 'user@example.com');
  await page.fill('[data-testid="password"]', 'SecurePass123');

  // Click login button
  await page.click('[data-testid="login-button"]');

  // Verify successful login
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.locator('[data-testid="welcome-message"]'))
    .toContainText('Welcome back');
});
