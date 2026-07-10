Feature: User Login
  As a registered user
  I want to log in to my account
  So that I can access my dashboard

Scenario: Successful login with valid credentials
  Given I am on the login page
  And I have a registered account with email "user@example.com"
  When I enter "user@example.com" in the email field
  And I enter my correct password
  And I click the "Login" button
  Then I should see the dashboard page
  And I should see "Welcome back, User" in the header

Scenario: Failed login with incorrect password
  Given I am on the login page
  When I enter "user@example.com" in the email field
  And I enter an incorrect password
  And I click the "Login" button
  Then I should see an error message "Invalid email or password"
  And I should remain on the login page
