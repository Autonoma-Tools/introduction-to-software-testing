# pages/login_page.py
from selenium.webdriver.common.by import By
from pages.base_page import BasePage

class LoginPage(BasePage):
    # Locators
    USERNAME_INPUT = (By.ID, "username")
    PASSWORD_INPUT = (By.ID, "password")
    LOGIN_BUTTON = (By.CSS_SELECTOR, "[data-test='login-button']")
    ERROR_MESSAGE = (By.CLASS_NAME, "error-message")

    URL = "/login"

    def __init__(self, driver, base_url):
        super().__init__(driver)
        self.base_url = base_url

    def navigate(self):
        self.navigate_to(f"{self.base_url}{self.URL}")

    def login(self, username, password):
        self.type_text(self.USERNAME_INPUT, username)
        self.type_text(self.PASSWORD_INPUT, password)
        self.click(self.LOGIN_BUTTON)

    def get_error_message(self):
        return self.get_text(self.ERROR_MESSAGE)

    def is_error_displayed(self):
        return self.is_displayed(self.ERROR_MESSAGE)
