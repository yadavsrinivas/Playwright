const {test, expect} = require('@playwright/test')
test("iframes validations", async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const textcheck = await framesPage.locator(".text h2").textContent();
    console.log(textcheck.split(" ")[1]);

    //44 ompleted

})
