// Wait for network to be idle before proceeding
await page.goto('https://app.example.com/dashboard', {
  waitUntil: 'networkidle'
});

// Or wait for a specific API call to complete
await page.waitForResponse(response =>
  response.url().includes('/api/user') && response.status() === 200
);

const username = await page.locator('[data-testid="user-name"]').textContent();
expect(username).toBe('John Doe');
