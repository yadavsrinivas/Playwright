// @ts-check
import { defineConfig, devices } from '@playwright/test';

const config = defineConfig({
  testDir: './tests',

  reporter : "html",
  projects : [
    {
     
      name : 'safari',
      use:{
        browserName : 'webkit',
        headless : false,
        screenshot: 'on',
        "scripts":{
          "regression": "npx playwright test",
          "webTest": "npx playwright test --grep @web",
          "APITest": "npx playwright test --grep @API",
          "Safari Config":"npx playwright test --config playwright.config1.js --project-safari",
          "CucumberRegression": "npx cucumber-js --tags '@Regression' --retry 1 --exit --format html:cucmber-report.html"
        },

        trace : 'on',
       ...devices['iPhone 11'],

      }
    },
  ]


  });
  export default config;