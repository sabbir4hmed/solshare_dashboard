# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Dashboard\dashboard.spec.ts >> Dashboard Flow - emobility >> TC_008 - Toggle Navigation Button
- Location: tests\Dashboard\dashboard.spec.ts:28:9

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByText('Overview')

```

# Test source

```ts
  1  | 
  2  | import { Page, expect } from '@playwright/test';
  3  | import { urls } from "../testData/credentials.data.";
  4  | 
  5  | 
  6  | export class DashboardPage {
  7  | 
  8  | 
  9  |     private page: Page;
  10 | 
  11 | 
  12 |     // Locator 
  13 | 
  14 |     private _overview = 'Overview';
  15 | 
  16 | 
  17 | 
  18 | 
  19 | 
  20 |     constructor(page: Page) {
  21 |         this.page = page;
  22 | 
  23 | 
  24 |     }
  25 | 
  26 | 
  27 |     async navigationDashboard()
  28 |     {
  29 |         await this.page.goto(urls._baseUrl + urls._dashboardPage);
  30 |         await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  31 |     }
  32 | 
  33 |     async overview() {
> 34 |         await this.page.getByText(this._overview).click();
     |                                                   ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  35 |         await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  36 |     }
  37 | 
  38 | 
  39 | 
  40 | }
```