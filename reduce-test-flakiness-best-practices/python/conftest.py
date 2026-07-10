import pytest

@pytest.fixture
def test_user():
    # Setup: Create user before test
    user = create_user(f"test_{uuid.uuid4()}@example.com")
    yield user
    # Teardown: Delete user after test
    cleanup_user(user)

def test_login(test_user):
    result = login(test_user.email)
    assert result.success == True
