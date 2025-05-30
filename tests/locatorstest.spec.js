const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test('Browser Context Playwright test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  const userName = page.locator("input#username");
  const signIn = page.locator("#signInBtn");

  await userName.fill("rahulshetty");
  await page.locator("[type='password']").fill("learning");
  await signIn.click();

  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');

  await userName.fill("");
  await userName.fill("rahulshettyacademy");
 // await page.locator("[type='password']").fill("learning");
  await signIn.click(); // again use the correct variable

  console.log(await page.locator(".card-body a").first().textContent());
  console.log(await page.locator(".card-body a").nth(1).textContent());
  const allTitles = console.log(await page.locator(".card-body a").allTextContents());
  console.log(allTitles);



});
test('UI Controls', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("#userEmail");
  const signIn = page.locator("#signInBtn");
  const dropdown = page.locator("select.form-control");
  const documentlink = page.locator("[href*=documents-request]");
  await dropdown.selectOption("consult");
  await page.locator(".customradio").last().click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".customradio").last().isChecked());
  await expect(page.locator(".customradio").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  await expect(documentlink).toHaveAttribute("class","blinkingText");

  //await page.pause();

});

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
