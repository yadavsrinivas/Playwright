import { test, expect } from '@playwright/test';

test.only('Elements page test', async ({ page, context }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const documentLink = page.locator("[href*='documents-request']");

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    documentLink.click(),
  ]);

  const text = await newPage.locator('.red').textContent();
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0]
  console.log(domain);
  await page.locator('#username').fill(domain);
  await page.pause();
  console.log(await page.locator('#username').textContent());



  
});