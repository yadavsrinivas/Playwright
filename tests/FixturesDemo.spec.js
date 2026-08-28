const { customtest } = require("../utils/fixtures.js");

customtest('Fixture demo', async ({ authenticationPage, createOrder }) => {
  await authenticationPage.goto('https://rahulshettyacademy.com/client/');
  await authenticationPage.locator("button[routerlink*='myorders']").click();
  await authenticationPage.locator("tbody").waitFor();
  await expect(authenticationPage.getByText(createOrder.orderId)).toBeVisible();


});