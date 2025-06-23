const { test, expect } = require('@playwright/test');

test('Client App login', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("srinivas.siraboyna@gmail.com");
    await page.locator("#userPassword").fill("MOkshit@10");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('newtworkidle');
    const titles= await page.locator(".card-body b").allTextConetent();
    console.log(titles);


})