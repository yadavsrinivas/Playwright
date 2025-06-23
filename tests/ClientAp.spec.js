const { test, expect } = require('@playwright/test');

test('Client App login', async ({ page })=>
  {

  const productname = "ZARA COAT 3";  
  const products = page.locator(".card-body");
  const email = "srinivas.siraboyna@gmail.com";
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/");
  console.log(await page.title());
  const userName = page.locator("#userEmail");
  const passWord = page.locator("#userPassword"); 
  const login = page.locator("[value='Login']");
 
  await userName.fill("srinivas.siraboyna@gmail.com");
  await passWord.fill("Mokshit@10");
  await login.click();
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
 //await page.waitForLoadState('networkidle');
  console.log(titles);
  const count = await products.count();
  for(let i=0; i< count; ++i)
  {
   if(await products.nth(i).locator("b").textContent() === productname)
   {
    // add to cart
     await products.nth(i).locator("text= Add To Cart").click();
     break;
   }

  }
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();
  //sudo code i.e locator found by tag and text
  const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  expect(bool).toBeTruthy();
  await page.locator("text=Checkout").click();
  await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:100});
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
  for(let i =0; i < optionsCount; ++i)
  { 
    const text = await dropdown.locator("button").nth(i).textContent();
     if (text.trim() === "India") {
     {
       await dropdown.locator("button").nth(i).click();
       break;
     }

  }
  }
  await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderID);
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for(let i=0; i< await rows.count(); ++i)
  {
    const roworderId = await rows.nth(i).locator("th").textContent();
    if(orderID.includes(roworderId))
    {
      await rows.nth(i).locator("button").first().click();
      break;

    }
  }
  const orderIdDetails =  await page.locator("div  .col-text").textContent();
  expect(orderID.includes(orderIdDetails)).toBeTruthy();



});

  