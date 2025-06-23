//Login UI
//test, cart, order, order deaatil, order history
// const { test, expect } = require('@playwright/test');
// let webContext;

const { test, expect } = require('@playwright/test');
let webContext;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/");
  await page.locator("#userEmail").fill("srinivas.siraboyna@gmail.com");
  await page.locator("#userPassword").fill("Mokshit@10");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState('networkidle');
  await context.storageState({ path: 'state.json' });
  webContext = await browser.newContext({ storageState: 'state.json' });
});

test('Client App login', async () => {
  const email = "srinivas.siraboyna@gmail.com";
  const productname = "ZARA COAT 3";
  const page = await webContext.newPage();
  await page.goto("https://rahulshettyacademy.com/client/");  // ✅ Important: you must load the page again after creating newContext
  const products = page.locator(".card-body");

  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
  const count = await products.count();
  for (let i = 0; i < count; ++i) {
    if (await products.nth(i).locator("b").textContent() === productname) {
      await products.nth(i).locator("text= Add To Cart").click();

      // ✅ Wait here for cart button to become visible before click
      const cart = page.locator("[routerlink*='cart']");
      await cart.waitFor({ state: 'visible' });
      await cart.click();

      break;
    }
  }

  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  expect(bool).toBeTruthy();

  await page.locator("text=Checkout").click();
  await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 100 });
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
  for (let i = 0; i < optionsCount; ++i) {
    const text = await dropdown.locator("button").nth(i).textContent();
    if (text.trim() === "India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }
  //await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderID);
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for (let i = 0; i < await rows.count(); ++i) {
    const roworderId = await rows.nth(i).locator("th").textContent();
    if (orderID.includes(roworderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator("div.col-text").textContent();
  expect(orderID.includes(orderIdDetails)).toBeTruthy();
});

test('Test Case title verify', async () => {
  const email = "srinivas.siraboyna@gmail.com";
  const productname = "ZARA COAT 3";
  const page = await webContext.newPage();
  await page.goto("https://rahulshettyacademy.com/client/");  // ✅ Important: you must load the page again after creating newContext
  const products = page.locator(".card-body");
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);

})

//55 complete