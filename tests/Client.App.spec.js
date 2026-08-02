const {test, expect} = require('@playWright/test');
test ('client App login page', async ({page}) =>{

const username = page.locator("#userEmail");
const password = page.locator("[formcontrolname='userPassword']");
const loginButton = page.locator("#login");     
const cardTitles = page.locator(".card-body b");

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await username.fill("srinivas.siraboyna@gmail.com");
await password.fill("Sidiksha@13");
await loginButton.click();

// await page.waitForLoadState('networkidle');

console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);

});


test.only('drop down select', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username = page.locator('#username');
    const password = page.locator('#password');
    const documentlink = page.locator("[href*='documents-request']");
    await username.fill("srinivas.siraboyna@gmail.com");
    await password.fill("Sidiksha@13");
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');
    await page.locator(".radiotextsty").last().click();
    await page.locator('#okayBtn').click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentlink).toHaveAttribute("class", "blinkingText");

});

            