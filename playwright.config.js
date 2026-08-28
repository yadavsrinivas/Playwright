// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { TIMEOUT } from 'node:dns';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
<<<<<<< HEAD
 

  timeout: 30 *1000,
  expect : {
    timeout: 5000,
  },
  
=======

>>>>>>> 0753e43 (Updated new changes)
  reporter : "html",
  
 
  use: {
<<<<<<< HEAD
  actionTimeout: 10 * 1000,
  navigationTimeout: 30 * 1000,
  browserName : "chromium",
  headless : false,
  screenshot : "on",
  trace: "retain-on-failure"
=======
  actionTime : 10000,
  browserName : "chromium",
  headless : false,
  screenshot : "on",
  trace: 'on', //on/off'//retain-on-failure
    timeout: 30 *1000,
  navigationTimeout: 30000,
  expect : {
    timeout: 10000,//10 secs
  
  },
>>>>>>> 0753e43 (Updated new changes)

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  },


     
});
 module.exports = config

