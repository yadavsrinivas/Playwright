const {test, expect} = require('@playwright/test');
test('End to End test', async ({page, context}) => {

const username = page.locator("#userEmail");
const password = page.locator("#userPassword");
const signInBtn = page.locator("#login");
const products = page.locator(".card-body");
const productname = 'ZARA COAT 3';
const email = "srinivas.siraboyna@gmail.com"

await page.goto("https://rahulshettyacademy.com/client");
await username.fill("srinivas.siraboyna@gmail.com");
await password.fill("Sidiksha@13");

await signInBtn.click();
await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();
const cardTitle = page.locator(".card-body b").allTextContents();
console.log(await cardTitle);

const count = await products.count();
for (let i = 0; i < count; i++) {
  const title = await products.nth(i).locator("b").first().textContent();
  if (title?.trim() === productname) {
    await products.nth(i).getByText('Add to Cart').click();
    break;
  }
}

await page.locator("[routerlink*='cart']").click();
await page. locator("div li").first().waitFor();
const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();
await page.locator("div.subtotal button").click();
await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:1000});
const dropdown = await page.locator(".ta-results")
await dropdown.waitFor();
const optionsCount = await dropdown.locator("button").count();
for(let i=0; i < optionsCount; i++)
  {
  const text = await dropdown.locator("button").nth(i).textContent();
     if(text === " India")
    {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }
await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator(".action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order.");
const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderId);

await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");

for (let i = 0; i < await rows.count(); i++) {
  const rowOrderId = await rows.nth(i).locator("th").textContent();
  if (rowOrderId && orderId.includes(rowOrderId.trim())) 
    {
    await rows.nth(i).locator("button").first().click();
    break;
  }
}
const orderDetailsLocator = page.locator(".col-text").first();
await orderDetailsLocator.waitFor({ state: 'visible' });
const orderDetails = await orderDetailsLocator.textContent();
expect(orderId.includes(orderDetails)).toBeTruthy();


})
