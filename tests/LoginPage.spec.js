const {test, expect} = require('@playwright/test');

test("Login page test", async ({page}) =>{

    
const username = page.locator("#username");
const password = page.locator("#password");
const signInBtn = page.locator("#signInBtn");
const terms = page.locator('id=terms')
const cardTitles = page.locator(".card-body a");


await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
console.log(await page.title());
await username.fill('rahulshettyacademy')
await password.fill('Learning@830$3mK2')
await terms.check()
await signInBtn.click();

console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
console.log(await cardTitles.last().textContent());

const alltitles = await cardTitles.allTextContents();
console.log(alltitles);


//Automate the webpage "https://rahulshettyacademy.com/client/#/auth/login" do registratioon and login and get first product result



})