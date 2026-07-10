const { remote } = require('webdriverio');

const capabilities = {
  platformName: 'iOS',
  'appium:deviceName': 'iPhone 14',
  'appium:platformVersion': '16.0',
  'appium:app': '/path/to/YourApp.app',
  'appium:automationName': 'XCUITest'
};

async function testMobileLogin() {
  const driver = await remote({
    hostname: 'localhost',
    port: 4723,
    capabilities
  });

  try {
    // Find and interact with mobile elements
    const emailField = await driver.$('~email-input'); // accessibility ID
    await emailField.setValue('user@example.com');

    const passwordField = await driver.$('~password-input');
    await passwordField.setValue('SecurePass123');

    const loginButton = await driver.$('~login-button');
    await loginButton.click();

    // Verify login success
    const welcomeText = await driver.$('~welcome-message');
    const text = await welcomeText.getText();
    assert(text.includes('Welcome back'));

  } finally {
    await driver.deleteSession();
  }
}
