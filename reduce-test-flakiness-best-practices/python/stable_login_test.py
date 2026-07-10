# GOOD: Dynamic wait + stable selector
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_login():
    driver.get("https://app.example.com/login")
    driver.find_element(By.ID, "email").send_keys("user@example.com")
    driver.find_element(By.ID, "password").send_keys("password123")
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

    # Wait for the actual element we need, with a timeout
    wait = WebDriverWait(driver, 10)
    username_element = wait.until(
        EC.presence_of_element_located((By.ATTR, "data-testid", "user-name"))
    )

    assert username_element.text == "John Doe"
