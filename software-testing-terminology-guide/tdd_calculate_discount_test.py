# Step 1: Write failing test (RED)
def test_calculate_discount():
    assert calculate_discount(100, 0.2) == 80.0
    assert calculate_discount(50, 0.1) == 45.0

# Step 2: Write minimal code to pass (GREEN)
def calculate_discount(price, discount_rate):
    return price * (1 - discount_rate)

# Step 3: Refactor if needed (BLUE)
def calculate_discount(price, discount_rate):
    if not 0 <= discount_rate <= 1:
        raise ValueError("Discount rate must be between 0 and 1")
    return price * (1 - discount_rate)
