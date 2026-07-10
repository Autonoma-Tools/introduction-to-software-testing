test.beforeEach(async () => {
  // Create unique test data
  testUser = {
    email: `test-${Date.now()}@example.com`,
    password: 'TestPass123'
  };
});

test.afterEach(async ({ page }) => {
  // Clean up after test
  await page.request.delete(`/api/users/${testUser.email}`);
});
