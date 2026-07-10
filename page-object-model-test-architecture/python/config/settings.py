# config/settings.py
import os

class Config:
    ENV = os.getenv("TEST_ENV", "dev").lower()

    URLS = {
        "dev": "http://localhost:3000",
        "staging": "https://staging.example.com",
        "production": "https://example.com"
    }

    BROWSER = os.getenv("BROWSER", "chrome")
    HEADLESS = os.getenv("HEADLESS", "false").lower() == "true"
    DEFAULT_TIMEOUT = int(os.getenv("DEFAULT_TIMEOUT", "10"))

    @classmethod
    def get_base_url(cls):
        return cls.URLS.get(cls.ENV, cls.URLS["dev"])
