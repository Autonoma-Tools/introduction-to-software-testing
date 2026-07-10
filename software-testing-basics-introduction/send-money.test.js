// Test: Can users send money successfully?
test('user can send money to another account', async () => {
    // Setup: Login and navigate to transfer page
    await loginAs('user@example.com');
    await navigateTo('/transfer');

    // Get initial balance
    const initialBalance = await getAccountBalance();

    // Perform transfer
    await fillField('recipient', 'jane@example.com');
    await fillField('amount', '50.00');
    await clickButton('Send Money');

    // Verify success
    await waitForText('Transfer successful');
    const newBalance = await getAccountBalance();
    expect(newBalance).toBe(initialBalance - 50);

    // Verify transaction appears in history
    await navigateTo('/transactions');
    await waitForText('Sent $50.00 to jane@example.com');
});
