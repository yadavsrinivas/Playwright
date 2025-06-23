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

test("Child windows hadl", async({browser})=>
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



// test('test', async ({ page }) => {

//   await page.goto('https://www.google.com/');

//   await page.getByRole('combobox', { name: 'Search' }).click();

//   await page.getByRole('combobox', { name: 'Search' }).fill('rahulshettu');

//   await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Drahulshettu%26sca_esv%3D151be9a0a91a555a%26source%3Dhp%26ei%3DW-45aLzzM4GRseMPsbGeiAk%26iflsig%3DAOw8s4IAAAAAaDn8a32axAaFp_VEmdc_0dlFk5o9DYGy%26ved%3D0ahUKEwj8jMSq38uNAxWBSGwGHbGYB5EQ4dUDCA8%26uact%3D5%26oq%3Drahulshettu%26gs_lp%3DEgdnd3Mtd2l6IgtyYWh1bHNoZXR0dTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDUjIU1CmHVjGOXABeACQAQCYAZgBoAHaCKoBAzYuNbgBA8gBAPgBAZgCDKAC1QmoAgrCAgoQABgDGOoCGI8BwgIOEAAYgAQYsQMYgwEYigXCAgsQLhiABBixAxiDAcICDhAuGIAEGLEDGNEDGMcBwgIIEAAYgAQYsQPCAggQLhiABBixA8ICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAgUQABiABMICERAuGIAEGLEDGIMBGNQCGIoFwgIFEC4YgATCAg4QLhiABBixAxiDARiKBcICCxAuGIAEGMcBGK8BwgINEC4YgAQYxwEYChivAcICBxAuGIAEGAqYAxHxBaevPV7KLcb8kgcEMi4xMKAHuJwBsgcEMS4xMLgHxAnCBwUyLTUuN8gHbQ%26sclient%3Dgws-wiz%26sei%3DcO45aM-zAbqTseMPmcHBuA8&q=EgQ8868NGPDc58EGIjA_G3eDMJwHA2I1_7_qwdcT7E62gDDmYMa8Jb_twnYagGdL43D-xr6xRBVjkt084i0yAVJaAUM');

//   await page.locator('iframe[name="a-3obqj96yj4i5"]').contentFrame().getByText('I\'m not a robot').click();

//   await page.locator('iframe[name="c-3obqj96yj4i5"]').click();

//   await page.locator('iframe[name="c-3obqj96yj4i5"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();

//   await page.locator('iframe[name="c-3obqj96yj4i5"]').contentFrame().locator('td:nth-child(2)').first().click();

//   await page.locator('iframe[name="c-3obqj96yj4i5"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();

//   await page.locator('iframe[name="c-3obqj96yj4i5"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();

//   await page.locator('iframe[name="c-3obqj96yj4i5"]').contentFrame().locator('td:nth-child(3)').first().click();

//   await page.locator('iframe[name="c-3obqj96yj4i5"]').contentFrame().getByRole('button', { name: 'Verify' }).click();

//   await page.getByRole('button', { name: 'rahul shetty', exact: true }).click();

//   await page.getByRole('link', { name: 'Rahul Shetty Academy:' }).click();

//   await page.getByRole('link', { name: 'VIEW ALL COURSES' }).click();

//   await page.getByRole('img', { name: 'Product image for Learn SQL' }).click();

// });



test('Page Playwright test', async ({page}) =>
  {

     await page.goto("https://google.com")
     console.log(await page.title());
     await expect(page).toHaveTitle("Google");
     //CSS Selector and Xpath locators

     
});
