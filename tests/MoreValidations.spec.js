const {test,expect } = require('@playwright/test')
test("Pop up validations", async({page})=>
{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//navigation
//   await page.goto("https://google.com");
//   await page.goBack();
//   await page.goForward();
//   await page.goBack();
//hide & show
  await expect (page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect (page.locator("#displayed-text")).toBeHidden();

//alert or dialogu
  
  await page.locator("#confirmbtn").click();
  page.on("dialog",dialog => dialog.dismiss);
  

// mouse over
await page.pause();
await page.locator("#mousehover").hover();
  
})