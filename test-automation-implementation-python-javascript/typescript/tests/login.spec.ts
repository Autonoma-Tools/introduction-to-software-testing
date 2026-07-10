import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  // Navigate to login page
  await page.goto('/login');

  // Fill in credentials (the demo app's own login page lists these)
  await page.getByLabel('Email').fill('demo@autonoma.app');
  await page.getByLabel('Password').fill('autonoma123');

  // Click login button
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Verify successful login
  await expect(page.getByText('Welcome Back')).toBeVisible();
  await expect(page).toHaveURL('/');
});

test('login validation', async ({ page }) => {
  await page.goto('/login');

  // Submit with empty fields
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Native browser validation blocks the submit, so we never leave the login page
  await expect(page).toHaveURL('/login');
});
