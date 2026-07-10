from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_user_login():
    # Initialize driver
    driver = webdriver.Chrome()

    try:
        # Navigate to login page
        driver.get('https://example.com/login')

        # Wait for and fill credentials
        email_field = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="email"]'))
        )
        email_field.send_keys('user@example.com')

        password_field = driver.find_element(By.CSS_SELECTOR, '[data-testid="password"]')
        password_field.send_keys('SecurePass123')

        # Click login button
        login_button = driver.find_element(By.CSS_SELECTOR, '[data-testid="login-button"]')
        login_button.click()

        # Verify successful login
        WebDriverWait(driver, 10).until(
            EC.url_contains('dashboard')
        )

        welcome_message = driver.find_element(By.CSS_SELECTOR, '[data-testid="welcome-message"]')
        assert 'Welcome back' in welcome_message.text

    finally:
        driver.quit()
