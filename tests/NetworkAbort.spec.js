const {test, expect} = require('@playwright/test');

test ('Network Abort feature ', async ({page})=>{

    page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // page.route('**/*.css',route=> route.abort());
    page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
    await page.locator("#userEmail").fill("srinivas.siraboyna@gmail.com");
    await page.locator("#userPassword").fill("Sidiksha@13");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('newtworkidle');
    const titles= await page.locator(".card-body b").allTextConetent();

});