const {test, expect} = require('@playwright/test');
test("@sanity UI Basics", async ({page, context}) => {
    
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const documentLink = page.locator("[href*='documents-request']");
const [newPage] = await Promise.all(
[
context.waitForEvent('page'),
    documentLink.click(),
]
)
const text = await newPage.locator(".red").textContent();
console.log(text);
const arrayText = text.split("@");
const domain = arrayText[1].split(" ")[0]
// console.log(domain);
await page.locator("#username").fill(domain);
console.log(await page.locator("#username").inputValue());

})
