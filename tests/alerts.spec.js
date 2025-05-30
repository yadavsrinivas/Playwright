const { test, expect } = require('@playwright/test');
const { only } = require('node:test');


test("Alert with OK", async({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/');
page.on('dialog', async dialog => {
    // Verify type of dialog
     expect(dialog.type()).toContain('alert');
// verify message of alert
    expect(dialog.message()).toContain('I am an alert box!');
    console.log("I am Here with My text");
    await page.waitForTimeout(5000);
    //click on alert ok button
    await dialog.accept();//  --> close by using Ok button
    
  });
 
  // Click on Trigger an alert button
   await page.click('#alertBtn');
   
});

test('Confirm Alert with OK and Cancel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    // Enable alert handling
    page.on('dialog', async dialog => {
      // Verify type of dialog
       expect(dialog.type()).toContain('confirm');   
      
      // verify message of alert
      expect(dialog.message()).toContain('Press a button!');
      await page.waitForTimeout(5000);
      //click on alert ok button
      await dialog.accept();//  --> close by using Ok button
      //await dialog.dismiss(); --> close by using Cancel button
    });
     // Click on Trigger an alert button
     await page.click('#confirmBtn');

});

test.only('Prompt Alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    // Enable alert handling
    page.on('dialog', async dialog => {
      // Verify type of dialog
       expect(dialog.type()).toContain('prompt');   
      
      // verify message of alert
      expect(dialog.message()).toContain('Please enter your name:');
      
      //Verify Default Input Value
      expect(dialog.defaultValue()).toContain('Harry Potter');
      await page.waitForTimeout(5000);
      // Click on OK Button with any value
      await dialog.accept('John');
    });
     // Click on Trigger an alert button
     await page.click('#promptBtn');
     

    // Verify message displayed after clicking on OK button
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?')

  });