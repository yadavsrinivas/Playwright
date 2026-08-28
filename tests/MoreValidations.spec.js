const {test,expect } = require('@playwright/test')
test("Pop up validations", async({page})=>
{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  // await page.goto("https://google.com");
  // await page.goBack();
  // await page.goForward();
  // await page.goBack();

await expect (page.getByPlaceholder("Hide/Show Example")).toBeVisible();
await page.getByRole('button', {name : "Hide"}).click();
await expect (page.getByPlaceholder("Hide/Show Example")).toBeHidden();
await page.pause();
page.on('dialog', dialog => dialog.accept());
await page.locator("#confirmbtn").click();

//mouse over
await page.getByRole('button', {name :"Mouse Hover"}).hover();

//Frames
const framesPage = await page.frameLocator("#courses-iframe");
await framesPage.locator("li a[href*='lifetime-access']:visible").click();
const textCheck = await framesPage.locator(".text h2").textContent();
textCheck.split(" ")[1];


})

test('Screent shot  & Visual validation', async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await expect (page.locator("#displayed-text")).toBeVisible();
await page.screenshot({path: 'screenshot.png'})
await page.locator('#displayed-text').screenshot({path: 'screenshot2.jpg'});
await page.locator("#hide-textbox").click();
await page.screenshot({path: 'screenshot1.png'})
await expect (page.locator("#displayed-text")).toBeHidden();

})
test.only('Screentshot on visual', async ({page})=>
{
  await page.goto("https://google.com/");
  expect(await page.screenshot()).toMatchSnapshot('landing-win32.png');

}

)