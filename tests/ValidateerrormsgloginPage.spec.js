const { test, expect } = require('@playwright/test');

test('Login page', async ({ page }) => {

await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
console.log(await page.title());
await page.locator('#username').fill('srinivas.siraboyna@gmail.com')
await page.locator('#password').fill('Sidiksha@13s')
await page.locator('id=terms').check()
await page.locator('#signInBtn').click();

console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText("Incorrect");




}


);
