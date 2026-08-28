# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndtoEnd.spec.js >> @sanity End to End test
- Location: tests\EndtoEnd.spec.js:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.ta-results').locator('button').nth(14)

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ZARA COAT 3
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: srinivas.siraboyna@gmail.com
            - textbox [ref=e81]: srinivas.siraboyna@gmail.com
            - generic [ref=e83]:
              - textbox "Select Country" [active] [ref=e84]: ind
              - generic [ref=e85]:
                - button " British Indian Ocean Territory" [ref=e87] [cursor=pointer]:
                  - generic [ref=e88]:
                    - generic [ref=e89]: 
                    - text: British Indian Ocean Territory
                - button " India" [ref=e90] [cursor=pointer]:
                  - generic [ref=e91]:
                    - generic [ref=e92]: 
                    - text: India
                - button " Indonesia" [ref=e93] [cursor=pointer]:
                  - generic [ref=e94]:
                    - generic [ref=e95]: 
                    - text: Indonesia
            - generic [ref=e96]: Place Order
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | test('@sanity End to End test', async ({page, context}) => {
  3  | 
  4  | const username = page.locator("#userEmail");
  5  | const password = page.locator("#userPassword");
  6  | const signInBtn = page.locator("#login");
  7  | const products = page.locator(".card-body");
  8  | const productname = 'ZARA COAT 3';
  9  | const email = "srinivas.siraboyna@gmail.com"
  10 | 
  11 | await page.goto("https://rahulshettyacademy.com/client");
  12 | await username.fill("srinivas.siraboyna@gmail.com");
  13 | await password.fill("Sidiksha@13");
  14 | 
  15 | await signInBtn.click();
  16 | await page.waitForLoadState('networkidle');
  17 | await page.locator(".card-body b").first().waitFor();
  18 | const cardTitle = page.locator(".card-body b").allTextContents();
  19 | console.log(await cardTitle);
  20 | 
  21 | const count = await products.count();
  22 | for (let i = 0; i < count; i++) {
  23 |   const title = await products.nth(i).locator("b").first().textContent();
  24 |   if (title?.trim() === productname) {
  25 |     await products.nth(i).getByText('Add to Cart').click();
  26 |     break;
  27 |   }
  28 | }
  29 | 
  30 | await page.locator("[routerlink*='cart']").click();
  31 | await page. locator("div li").first().waitFor();
  32 | const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  33 | expect(bool).toBeTruthy();
  34 | await page.locator("div.subtotal button").click();
  35 | await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:1000});
  36 | const dropdown = await page.locator(".ta-results")
  37 | await dropdown.waitFor();
  38 | const optionsCount = await dropdown.locator("button").count();
  39 | for(let i=0; i < optionsCount; i++)
  40 |   {
> 41 |   const text = await dropdown.locator("button").nth(i).textContent();
     |                                                        ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  42 |      if(text === " India")
  43 |     {
  44 |       await dropdown.locator("button").nth(i).click();
  45 |       break;
  46 |     }
  47 |   }
  48 | await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  49 | await page.locator(".action__submit").click();
  50 | await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order.");
  51 | const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  52 | console.log(orderId);
  53 | 
  54 | await page.locator("button[routerlink*='myorders']").click();
  55 | await page.locator("tbody").waitFor();
  56 | const rows = await page.locator("tbody tr");
  57 | 
  58 | for (let i = 0; i < await rows.count(); i++) {
  59 |   const rowOrderId = await rows.nth(i).locator("th").textContent();
  60 |   if (rowOrderId && orderId.includes(rowOrderId.trim())) 
  61 |     {
  62 |     await rows.nth(i).locator("button").first().click();
  63 |     break;
  64 |   }
  65 | }
  66 | const orderDetailsLocator = page.locator(".col-text").first();
  67 | await orderDetailsLocator.waitFor({ state: 'visible' });
  68 | const orderDetails = await orderDetailsLocator.textContent();
  69 | expect(orderId.includes(orderDetails)).toBeTruthy();
  70 | 
  71 | 
  72 | })
  73 | 
```