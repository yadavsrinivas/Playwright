const { test, expect } = require('@playwright/test');

test('Guru site functionality', async ({page}) =>
{

    await page.goto("https://demo.guru99.com/telecom/index.html");
    console.log(await page.title());

    const logo = await page.locator("[role='presentation']").isVisible();
    expect(logo).toBeTruthy();

    const links = page.locator('a');
    const count = await links.count();

    console.log(`Total links found: ${count}`);
    for (let i = 0; i < count; i++) {
    const href = await links.nth(i).getAttribute('href');
    console.log(`${i + 1}: ${href}`);
  
  }
  await page.getByRole("Link",{name : "Add Customer"}).click();
 await page.waitForSelector("h1"); // or a more specific element

// Optional: assert the heading text
const heading = await page.locator("h1").textContent();
if (heading.includes("Add Customer")) {
  console.log("✅ Customer registration page loaded.");
}

   await page.locator("[placeholder*='FirstName']").fill("Srinu")
   await page.locator("[placeholder*='LastName']").fill("Yadav")
   await page.locator("[placeholder*='Email']").fill("ss@mail.com")
   await page.locator("[placeholder*='Enter your address']").fill("test")
   await page.locator("[placeholder*='Mobile Number']").fill("6464545645")
   await page.locator("[value*='Submit']").click();

   const SubmitOrder = await page.locator("h1").textContent();
   if(heading.includes("Access Details to Guru99 Telecom")) {
   console.log("Order page displayed");
}

//    const orderID = await page.locator("tbody h3").textContent();
//    console.log("Order/User ID:", orderID.trim());

   const orderLocator = page.locator("tbody h3");
   await expect(orderLocator).toHaveCount(1, { timeout: 10000 });
    // Adjust timeout if needed
   const orderID = await orderLocator.textContent();
   console.log("Order/User ID:", orderID);


})