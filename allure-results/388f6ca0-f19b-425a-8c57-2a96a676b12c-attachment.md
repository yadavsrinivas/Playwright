# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Client.AppPO.spec.js >> @sanity Client App login
- Location: tests\Client.AppPO.spec.js:4:1

# Error details

```
TypeError: OrderReviewPage is not a constructor
```

# Test source

```ts
  1  | const { LoginPage } = require("./LoginPage");
  2  | const { DashboardPage } = require("./DashboardPage");
  3  | const { CartPage } = require("./CartPage");
  4  | const { OrderHistoryPage } = require("./OrderHistoryPage");
  5  | const { OrderReviewPage } = require("./OrdersReviewPage");
  6  | 
  7  | 
  8  | 
  9  | class POManager {
  10 | 
  11 |     constructor(page) {
  12 |         this.page = page;
  13 |         this.loginPage = new LoginPage(this.page);
  14 |         this.dashboardPage = new DashboardPage(this.page);
  15 |         this.cartPage = new CartPage(this.page);
  16 |         this.orderHistoryPage = new OrderHistoryPage(this.page);
> 17 |         this.orderReviewPage = new OrderReviewPage(this.page);
     |                                ^ TypeError: OrderReviewPage is not a constructor
  18 | 
  19 | 
  20 |     }
  21 | 
  22 |     getLoginPage() {
  23 |         return this.loginPage;
  24 |     }
  25 |     getDashboardPage() {
  26 |         return this.dashboardPage;
  27 |     }
  28 | 
  29 |     getCartPage() {
  30 |         return this.cartPage;
  31 |     }
  32 |     getOrderReviewPage() {
  33 |         return this.orderReviewPage;
  34 |     }
  35 |     getOrderHistoryPage() {
  36 |         return this.orderHistoryPage;
  37 |     }
  38 | }
  39 | module.exports = { POManager };
```