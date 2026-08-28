const {test, expect} = require('@playwright/test');
test('Locators testing', async ({page})=>{

await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel('Check me out if you Love IceCreams!').check();
await page.getByLabel('Employed').click();
await page.getByLabel('Gender').selectOption('Female');
await page.getByPlaceholder('Password').fill('Srinivas');
await page.getByRole("button",{name : 'Submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
//expect timeout by default will be 5 secs
await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
//suppose it was mentioned the locator will take 8 secs to load on the page, then we can customize for that particular locator step level
await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout : 10_00});
//If we whant to override Globally go to playwright.config.js file

await page.getByRole('link',{name:'Shop'}).click();
await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
    
});

test('Timeout testing in Test level', async ({page})=>{
test.timeout(60000);
const slowExpect = expect.configure({timeout : 9000});
page.setDefaultTimeout(9000);
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel('Check me out if you Love IceCreams!').check();
await page.getByLabel('Employed').click();
await page.getByLabel('Gender').selectOption('Female');
await page.getByPlaceholder('Password').fill('Srinivas');
await page.getByRole("button",{name : 'Submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
await slowExpect (page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();

await page.getByRole('link',{name:'Shop'}).click();
await slowExpect (page.locator("h1.my-4").first()).toHaveText("Shop");
await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
    
});

//41 to start