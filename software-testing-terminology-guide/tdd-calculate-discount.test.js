// Step 1: Write failing test (RED)
test('calculateDiscount applies percentage correctly', () => {
  expect(calculateDiscount(100, 0.2)).toBe(80.0);
  expect(calculateDiscount(50, 0.1)).toBe(45.0);
});

// Step 2: Write minimal code to pass (GREEN)
function calculateDiscount(price, discountRate) {
  return price * (1 - discountRate);
}

// Step 3: Refactor if needed (BLUE)
function calculateDiscount(price, discountRate) {
  if (discountRate < 0 || discountRate > 1) {
    throw new Error('Discount rate must be between 0 and 1');
  }
  return price * (1 - discountRate);
}
