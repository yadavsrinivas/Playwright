const { test, expect } = require('@playwright/test');

test('Browser Context -validating error login', async ({ browser })=>
  {
  const context = await browser.newContext();
  const page = await context.newPage();
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

});

