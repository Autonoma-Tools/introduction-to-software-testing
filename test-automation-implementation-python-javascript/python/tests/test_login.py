import pytest
from playwright.sync_api import Page, expect

def test_successful_login(page: Page):
    """Test user can log in with valid credentials"""
    # Navigate to login page
    page.goto("https://bank-demo-web-app.vercel.app/")

    # Fill in credentials (the demo app's own login page lists these)
    page.get_by_label("Email").fill("demo@autonoma.app")
    page.get_by_label("Password").fill("autonoma123")

    # Click login button
    page.get_by_role("button", name="Sign in").click()

    # Verify successful login
    expect(page.get_by_text("Welcome Back")).to_be_visible()
    expect(page).to_have_url("https://bank-demo-web-app.vercel.app/")

@pytest.mark.smoke
def test_login_validation(page: Page):
    """Test the form blocks submission when required fields are empty"""
    page.goto("https://bank-demo-web-app.vercel.app/")

    # Submit with empty fields
    page.get_by_role("button", name="Sign in").click()

    # Native browser validation blocks the submit, so we never leave the login page
    expect(page).to_have_url("https://bank-demo-web-app.vercel.app/login")
