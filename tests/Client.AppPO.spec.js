const { test, expect } = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager');

test('@sanity Client App login', async ({ page }) => {
    const poManager = new POManager(page);
    const username = "srinivas.siraboyna@gmail.com";
    const password = "Sidiksha@13";
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");
    const loginPage = poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.validLogin(username,password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(productName);
    await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();

    const orderReviewpage = poManager.getOrderReviewPage();
    await orderReviewpage.searchCountryAndSelect("ind","India");
    const orderId = await orderReviewpage.submitAndGetOrderId();
    console.log(orderId);
    await dashboardPage.navigateToOrders();
    const orderHistroypage = poManager.getOrderHistoryPage();
    await orderHistroypage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await orderHistroypage.getOrderId())).toBeTruthy();
    
   
});

