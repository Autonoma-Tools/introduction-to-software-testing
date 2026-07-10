import requests

def test_get_user_returns_expected_profile():
    response = requests.get("https://api.example.com/users/42")

    assert response.status_code == 200
    body = response.json()
    assert body["id"] == 42
    assert body["email"] == "user@example.com"
    assert "password" not in body  # never leak secrets
