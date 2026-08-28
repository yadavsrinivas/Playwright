const {test, expect} = require('@playwright/test');

test('Playwright special locators', async ({page, context}) => {

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption("Female");
    await page.getByPlaceholder('Password').fill("Sidiksha@13");
    await page.getByRole("button", {name : 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole('link', {name : 'Shop'}).click();

})



