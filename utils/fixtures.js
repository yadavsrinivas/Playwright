const base = require('@playwright/test');
const {APiUtils} = require('./ApiUtils.js')
const {request} = require('@playwright/test');

const loginPayLoad = { userEmail: "srinivas.siraboi@gmail.com",userPassword: "Sidiksha@13"};


exports.customtest = base.test.extend(
    {
        authenticationPage: async ({ browser }, use) => {
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto("https://rahulshettyacademy.com/client/");
            await page.locator("#userEmail").fill("srinivas.siraboyna@gmail.com");
            await page.locator("#userPassword").fill("Sidiksha@13");
            await page.locator("[value='Login']").click();
             await page.locator(".card-body b").first().waitFor();
            await context.storageState({ path: 'state.json' });
            await use(page);
        },

        createOrder: async ({ }, use) => {
            const apiContext = await request.newContext();
            const apiUtils = new APiUtils(apiContext, loginPayLoad);
            const response = await apiUtils.createOrder(orderPayLoad);
            await use(response);
        }


    }
);