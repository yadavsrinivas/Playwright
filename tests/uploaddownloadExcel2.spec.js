const ExcelJs = require('exceljs');
const {test, expect} = require('@playwright/test');


async function WriteExcelTest(searchText,replaceText,change,filePath)
    {
    
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet,searchText);

   
    const cell = worksheet.getCell(output.row,output.column+change.colChange);
    cell.value=replaceText;
    await workbook.xlsx.writeFile(filePath);

    }
     async function readExcel(worksheet,searchText)
    {
   
    let output = {row:-1, column:-1} 
    worksheet.eachRow((row,rowNumber)=>
    {
        
        row.eachCell((cell,colNumber)=>
        {
            if (cell.value === searchText)
            {
                output.row=rowNumber;
                output.column=colNumber;
            }
        });

    
});
return output;
}
//update Mango Price to 350.
// WriteExcelTest("Banana",350,{rowChange:0,colChange:2},"C:\\Users\\syadav\\excelDownloadTest.xlsx");
test.only('upload download excel validation', async ({page})=>
{

const textSearch = 'Mango';
const updatevalue = '350';
   await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
   const downloadPromise = page.waitForEvent('download');
   await page.getByRole('button',{name :'Download'}).click();
   await downloadPromise;
   WriteExcelTest(textSearch,updatevalue,{rowChange:0,colChange:2},"C:\Users\syadav\Downloads\download.xlsx");
   await page.locator('#fileinput').click();
   await page.locator('#fileinput').setInputFiles("C:\Users\syadav\Downloads\download.xlsx");
   const textlocator = page.getByText(textSearch);
   const desiredrow = await page.getByRole('row').filter({has :textlocator});
   await expect(desiredrow.locator("cell-4-undefined")).toContainText(updatevalue);



});



//85 completed
