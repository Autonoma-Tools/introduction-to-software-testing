// Reusable login function with proper waits
async function login(page: Page, email: string, password: string) {
  await page.goto('/login');
  await page.fill('[data-testid="email"]', email);
  await page.fill('[data-testid="password"]', password);
  await page.click('[data-testid="login-button"]');

  // Wait for login to complete
  await page.waitForURL('/dashboard');
  await page.waitForSelector('[data-testid="user-menu"]', { state: 'visible' });
}

// Use it in every test that needs authentication
test('view profile', async ({ page }) => {
  await login(page, 'user@example.com', 'password123');
  await page.click('[data-testid="user-menu"]');
  await page.click('[data-testid="profile-link"]');
  // ... rest of test
});
