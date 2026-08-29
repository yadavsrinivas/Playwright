// @ts-check
const { defineConfig } = require('@playwright/test');
const { createAzurePlaywrightConfig, ServiceOS } = require('@azure/playwright');
const { DefaultAzureCredential } = require('@azure/identity');
const baseConfig = require('./playwright.config');

// Handle ESM/CommonJS default export structure
const configToUse = baseConfig.default || baseConfig;

module.exports = defineConfig(
  configToUse,
  createAzurePlaywrightConfig(configToUse, {
    exposeNetwork: '<loopback>',
    connectTimeout: 3 * 60 * 1000, // 3 minutes
    os: ServiceOS.LINUX,
    credential: new DefaultAzureCredential(),
  }),
  {
    reporter: [
      ['html', { open: 'never' }],
      ['@azure/playwright/reporter'],
    ],
  }
);