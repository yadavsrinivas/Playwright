const {test, expect} = require('@playwright/test')

test("Regirstartion page", async ({page}) =>{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.locator("//a[text()='Register here']").click();
await page.locator("#firstName").fill("Srinivas");
await page.locator("[placeholder='Last Name']").fill("Siraboyna");
await page.locator("#userEmail").fill("srinu.208@gmail.com");
await page.locator(".custom-select").selectOption({label:"Engineer"});
await page.locator("[formcontrolname='userMobile']").fill("9490808080");
await page.locator("input[value='Male']").click();
await page.locator("[formcontrolname='userPassword']").fill("Sidiksha@13s");
await page.locator("[placeholder='Confirm Passsword']").fill("Sidiksha@13s");
await page.locator("[type='checkbox']").click();
await page.locator("[value='Register']").click();
const PageTitle = await page.title();
console.log(PageTitles);



})