const {test, expect} = require('@playwright/test');


test('Popup/Hide show functionality test', async ({page}) => {

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// await page.goto("https://google.com");
// await page.goBack();
// await page.goForward();
// await page.goBack();
await expect(page.getByPlaceholder('Hide/Show Example')).toBeVisible();
await page.locator('#hide-textbox').click();
await expect(page.locator('#displayed-text')).toBeHidden();
await page.locator('#alertbtn').click();
page.on('dialog', dialog => dialog.accept())
await page.locator('#alertbtn').click();
page.on('dialog', dialog => dialog.dismiss())
await page.locator('.mouse-hover').hover()
// await page.locator()
const framesPaage = page.frameLocator('#courses-iframe');
await framesPaage.locator("li a[href*='lifetime-access']:visible").click();
const imgcheck  = await framesPaage.locator('.flaticon-star-2').isVisible();

})