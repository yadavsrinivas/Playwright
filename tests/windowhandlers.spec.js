const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test.only("Child windows hadl", async({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();
const userName = page.locator("#userEmail");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const documentlink = page.locator("[href*=documents-request]");

const[newPage]= await Promise.all(
[
  context.waitForEvent('page'),//listen for any new page pending.rejected,fullfilled
  documentlink.click(),
])

//new page is opened
const text= await newPage.locator(".red").textContent();
const arrayText = text.split("@");
const domain = arrayText[1].split(" ")[0];
console.log(domain);
await page.locator("#username").fill(domain);
await page.pause();
console.log(await page.locator("#username").textContent());


});



test('Page Playwright test', async ({page}) =>
  {

     await page.goto("https://google.com")
     console.log(await page.title());
     await expect(page).toHaveTitle("Google");
     //CSS Selector and Xpath locators

     
});
