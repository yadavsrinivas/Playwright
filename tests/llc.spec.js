const {test, expect} = require('@playwright/test');

test('Playwright special locators', async ({page, context}) => {

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption("Female");
    await page.getByPlaceholder('Password').fill("Sidiksha@13");
    await page.getByRole("button", {name : 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //5 seconds default timeout for expect assertaions --timeout : 10000 step level
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout: 10000});
    await page.getByRole('link', {name : 'Shop'}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

});

test.only('Playwright special locators with slow expect', async ({page, context}) => {

    const slowExpect = expect.configure({timeout : 9000});
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption("Female");
    await page.getByPlaceholder('Password').fill("Sidiksha@13");
    await page.getByRole("button", {name : 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //5 seconds default timeout for expect assertaions --timeout : 10000 step level and also in test level
    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout: 10_000});

    await page.getByRole('link', {name : 'Shop'}).click();
    await slowExpect(page.locator('my-4').first()).toHaveText('Shop')

    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

});


test('Playwright special locators with test timeout expect', async ({page, context}) => {

    test.setTimeout(60000);

    const slowExpect = expect.configure({timeout : 9000});
    page.setDefaultTimeout(9000);
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption("Female");
    await page.getByPlaceholder('Password').fill("Sidiksha@13");
    await page.getByRole("button", {name : 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //5 seconds default timeout for expect assertaions --timeout : 10000 step level and also in test level
    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();

    //Global -> test ->step
    await page.getByRole('link', {name : 'Shop'}).click({timeout:15000});//first priority
    await slowExpect(page.locator('my-4').first()).toHaveText('Shop')

    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

});
//45

