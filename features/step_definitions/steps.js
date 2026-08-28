const { When, Then, Given } = require('@cucumber/cucumber')
const { POManager } = require('../../pageobjects/POManager');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');



Given('a login to Ecommerce Apllication with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    const products = this.page.locator(".card-body");
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.validLogin(username, password);
});

When('Add {string} to Cart', { timeout: 100 * 1000 }, async function (productName) {
    console.log("ADD TO CART STEP STARTED");
    // Write code here that turns the phrase above into concrete actions
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();
});


Then('verify {string} is displayed in the Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('I enter the valid details and Place the Order', async function () {
    // Write code here that turns the phrase above into concrete actions
    const orderReviewpage = this.poManager.getOrderReviewPage();
    await orderReviewpage.searchCountryAndSelect("ind", "India");
    this.orderId = await orderReviewpage.submitAndGetOrderId();
    console.log(this.orderId);

});

Then('Verify the Order is present in the OrderHistory', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.dashboardPage.navigateToOrders();
    const orderHistroypage = this.poManager.getOrderHistoryPage();
    await orderHistroypage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await orderHistroypage.getOrderId())).toBeTruthy();
});

Given('a login to Ecommerce2 Apllication with {string} and {string}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    const userName = this.page.locator("#username")
    const passWord = this.page.locator("input#password")
    const signIn = this.page.locator("#signInBtn");
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await this.page.title());
    await userName.fill(username);
    await passWord.fill(password);
    await signIn.click();
});

Then('verify Error message is displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');
});


