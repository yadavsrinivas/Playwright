const {test, expect} = require('@playwright/test');

test('Screenshot and visual comparison', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractise/');
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'});
await page.locator("#hide-textbox").click();
await page.screenshot({path:'screenshot.png'});
await expect (page.locator("#displayed-text")).toBeHidden();
});

test('visual',async({page})=>
{ 
await page.goto("https://www.google.com/");
expect(await page.screenshot()).toMatchSnapshot('googlepage.png');

})