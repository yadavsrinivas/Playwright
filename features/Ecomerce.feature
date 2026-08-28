Feature: Ecomerce Validations
  @Regression
  Scenario: Placing the Order
    Given a login to Ecommerce Apllication with "srinivas.siraboyna@gmail.com" and "Sidiksha@13"
    When Add "ZARA COAT 3" to Cart
    Then verify "ZARA COAT 4" is displayed in the Cart
    When I enter the valid details and Place the Order
    Then Verify the Order is present in the OrderHistory

    