Feature: Ecomerce Validations
  @Validationpar
  Scenario Outline: Placing the Order
    Given a login to Ecommerce2 Apllication with "<username>" and "<password>"
    Then verify Error message is displayed

    Examples:
    | username                      | password  |
    | srinivas.siraboyna@gmail.com  | Learning  |
    | rahulshettyacademy            | System    |

    @Validation
  Scenario: Placing the Order
    Given a login to Ecommerce2 Apllication with "srinivas.siraboyna@gmail.com" and "Learning"
    Then verify Error message is displayed