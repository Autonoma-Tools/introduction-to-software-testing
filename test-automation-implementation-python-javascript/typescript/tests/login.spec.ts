import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  // Navigate to login page
  await page.goto('/login');

  // Fill in credentials
  await page.getByLabel('Username').fill('testuser');
  await page.getByLabel('Password').fill('password123');

  // Click login button
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Verify successful login
  await expect(page.getByText('Welcome back')).toBeVisible();
  await expect(page).toHaveURL('/dashboard');
});

test('login validation', async ({ page }) => {
  await page.goto('/login');

  // Try logging in without credentials
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Verify error message appears
  await expect(page.getByText('Username is required')).toBeVisible();
});
