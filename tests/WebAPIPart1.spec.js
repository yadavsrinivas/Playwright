const {test, expect, request} = require('@playwright/test');
const {APIUtils} = require('./utils/APIUtils');
const loginPayLoad = {userEmail:"srinivas.siraboyna@gmail.com",userPassword:"Mokshit@10"};
const orderPayLoad = {orders: [{country: "Cuba", productOrderedId: "67a8dde5c0d3e6622a297cc8"}]};
let response;
let apiContext;

test.beforeAll(async() =>
{
    
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayLoad);
  response = await apiUtils.createOrder(orderPayLoad);

})


test.beforeEach(()=>
{

})


//Create Order is success
test('Place the Order', async ({page})=>
{
  //const apiUtils = new APIUtils(apiContext);
  //const orderId = CreateOrder(orderPayLoad,loginPayLoad);
 // const apiUtils = new APIUtils(apiContext, loginPayLoad);
  page.addInitScript(value => {
  window.localStorage.setItem('token',value);
}, response.token);


  await page.goto("https://rahulshettyacademy.com/client/");
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for(let i=0; i< await rows.count(); ++i)
  {
    const roworderId = await rows.nth(i).locator("th").textContent();
    if(response.orderId.includes(roworderId))
    {
      await rows.nth(i).locator("button").first().click();
      break;

    }
  }

  const orderIdDetails =  await page.locator("div  .col-text").textContent();
 // await page.pause();
  expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

});
