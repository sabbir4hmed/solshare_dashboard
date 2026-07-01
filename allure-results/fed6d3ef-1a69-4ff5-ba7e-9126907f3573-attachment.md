# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Dashboard\dashboard.spec.ts >> Dashboard Flow - emobility >> TC_008 - Toggle Navigation Button
- Location: tests\Dashboard\dashboard.spec.ts:28:9

# Error details

```
TypeError: dashboardPage.toggleNavigation is not a function
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { DashboardPage } from "../../pages/dashboard.spec";
  3  | import { test_credentials } from "../../testData/credentials.data.";
  4  | import { Helper } from "../../helpers/helper.spec";
  5  | 
  6  | test.describe('Dashboard Flow - emobility', () => {
  7  | 
  8  |     let dashboardPage: DashboardPage;
  9  |     let helper: Helper;
  10 | 
  11 |     test.beforeEach(async ({ page }) => {
  12 |         dashboardPage = new DashboardPage(page);
  13 |         helper = new Helper(page);
  14 | 
  15 |         await helper.waitForPageReady(page, 60000);
  16 |     });
  17 | 
  18 |     // TC_007 - Dashboard Load Check
  19 |     test('TC_007 - Dashboard Should Load Successfully', async ({ page }) => {
  20 | 
  21 | 
  22 | 
  23 | 
  24 |     })
  25 | 
  26 | 
  27 |     // TC_008 - Toggle Navigation Button
  28 |     test('TC_008 - Toggle Navigation Button', async ({ page }) => {
  29 | 
> 30 |        await dashboardPage.toggleNavigation();
     |                            ^ TypeError: dashboardPage.toggleNavigation is not a function
  31 | 
  32 |        console.log('TC_008 Passed - Navigation toggled successfully');
  33 | 
  34 |     })
  35 | 
  36 | })
```