/// <reference types="node" />
import { defineConfig } from '@playwright/test';
import { urls } from "./testData/credentials.data.";

export default defineConfig({
  testDir: './tests',

  timeout: 90000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright', {
      detail: true,
      outputFolder: 'allure-results',
      suitTitle: false,
    }]
  ],

  
  use: {
    baseURL: urls._baseUrl,
    actionTimeout: 1500,
    navigationTimeout: 60000,
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    },
    screenshot: "on",
    video: "on",
    trace: "on",
  },

  projects: [

    // ============================================
    // Step 1: Auth Setup 
    // ============================================
    {
      name: 'setup',
      testMatch: '**/Login/auth.setup.ts',
      
    },

    // ============================================
    // Step 2: Login Tests 
    // ============================================
    {
      name: 'Login Tests',
      testMatch: '**/Login/login.spec.ts', 
      use: {
        channel: 'chrome',
        viewport: null,
        
      },
      
    },

    // ============================================
    // Step 3: Dashboard Tests 
    // ============================================
    {
      name: 'Dashboard Tests',
      testMatch: '**/Dashboard/dashboard.spec.ts', 
      use: {
        channel: 'chrome',
        viewport: null,
        storageState: 'AUth/.auth/user.json', 
      },
      dependencies: ['setup'], 
    },

  ],
});
