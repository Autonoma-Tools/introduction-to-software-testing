# GOOD: Each test sets up and tears down its own data
def test_create_user():
    user = create_user("create@example.com")
    assert user.email == "create@example.com"
    cleanup_user(user)

def test_login_user():
    user = create_user("login@example.com")  # Create fresh data
    login_result = login(user.email)
    assert login_result.success == True
    cleanup_user(user)
