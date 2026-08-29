// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Test location
  testDir: './tests',

  // Test timeout
  timeout: 30 * 1000,

  // Expect timeout
  expect: {
    timeout: 10 * 1000,
  },

  // HTML report
  reporter: 'html',

       use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'on',
        trace: 'on',

        actionTimeout: 10 * 1000,
        navigationTimeout: 30 * 1000,
      },
    

});
