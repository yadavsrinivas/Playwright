const { test, expect } = require('@playwright/test');

test('Page title', async({page}) => 
    {
        
        await page.goto('https://www.google.com/');
        console.log(await page.title());
        await expect(page).toHaveTitle("Google");
    
    
    });