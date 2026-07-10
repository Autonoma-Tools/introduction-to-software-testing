// Wait for network request to complete
await page.waitForResponse(response =>
  response.url().includes('/api/data') && response.status() === 200
);

// Wait for element state
await page.waitForSelector('[data-testid="results"]', { state: 'visible' });

// Wait for custom condition
await page.waitForFunction(() => {
  return document.querySelectorAll('.item').length > 0;
});
