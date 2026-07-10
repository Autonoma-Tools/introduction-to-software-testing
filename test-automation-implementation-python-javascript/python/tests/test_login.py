import pytest
from playwright.sync_api import Page, expect

def test_successful_login(page: Page):
    """Test user can log in with valid credentials"""
    # Navigate to login page
    page.goto("https://bank-demo-web-app.vercel.app/")

    # Fill in credentials
    page.get_by_label("Username").fill("testuser")
    page.get_by_label("Password").fill("password123")

    # Click login button
    page.get_by_role("button", name="Sign in").click()

    # Verify successful login
    expect(page.get_by_text("Welcome back")).to_be_visible()
    expect(page).to_have_url("https://bank-demo-web-app.vercel.app/dashboard")

@pytest.mark.smoke
def test_login_validation(page: Page):
    """Test login shows error for invalid credentials"""
    page.goto("https://bank-demo-web-app.vercel.app/")

    # Try logging in without credentials
    page.get_by_role("button", name="Sign in").click()

    # Verify error message appears
    expect(page.get_by_text("Username is required")).to_be_visible()
