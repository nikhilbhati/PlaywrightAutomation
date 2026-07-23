import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',
  use: {
    headless: true,
    browserName: 'chromium',
    baseURL: 'https://my.saleshandy.com', // Set the base URL here
  },
});