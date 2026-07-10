# Selenium - BETTER
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver.get('https://example.com')
button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, 'submit'))
)
button.click()
