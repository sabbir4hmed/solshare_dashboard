# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login/login.spec.ts >> Login Flow - emobility >> TC_002 - User should login with valid credentials
- Location: tests/Login/login.spec.ts:45:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.emobility-stage.me-solshare.net/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect , Page} from '@playwright/test';
  2  | 
  3  | const test_credentials = {
  4  | 
  5  |     _email: 'sabbir.ahmed@solshare.com',
  6  |     _password: 'S@bbir4hmed',
  7  |     _wrongEmail: 'sabbir.ahmed@gmail.com',
  8  |     _wrongPassword: 'S@bbirhmed',
  9  | };
  10 | 
  11 | 
  12 | const _url = 'https://www.emobility-stage.me-solshare.net/auth/login';
  13 | 
  14 | //TTest Suite
  15 | 
  16 | test.describe('Login Flow - emobility', ()=>{
  17 | 
  18 |     //Go to website test beforeeach
  19 | 
  20 |     test.beforeEach(async ({page}: {page:Page})=>{
  21 | 
> 22 |         await page.goto(_url);
     |                    ^ Error: page.goto: Target page, context or browser has been closed
  23 |         await page.waitForLoadState('domcontentloaded');
  24 | 
  25 |     })
  26 | 
  27 | // Test 1: Page Load Check
  28 | 
  29 |     test('TC_001 - Load Page sould load successfully', async ({page}: {page:Page}) => {
  30 |         //Page title check
  31 | 
  32 |         await expect(page).toHaveTitle('ME SOLshare');
  33 | 
  34 |         //url check
  35 | 
  36 |         await expect(page).toHaveURL('https://www.emobility-stage.me-solshare.net/auth/login');
  37 | 
  38 |         console.log('Page loaded successfully');
  39 |     })
  40 | 
  41 | 
  42 |   // Test 2: Valid Login
  43 | 
  44 | 
  45 |   test('TC_002 - User should login with valid credentials', async ({page}: {page:Page}) => {
  46 | 
  47 |       //Valid Email Fill
  48 |       await page.locator('input[name="username"]').fill(test_credentials._email);
  49 |       await page.waitForLoadState('networkidle', {timeout: 10000});
  50 | 
  51 | 
  52 |       //Valid Password Fill
  53 | 
  54 |       await page.locator('[name="password"]').fill(test_credentials._password);
  55 |       await page.waitForLoadState('networkidle', {timeout: 10000});
  56 | 
  57 |       // Login button click
  58 | 
  59 |       await await page.locator("button[type='submit']").click();
  60 | 
  61 |       //await page.waitForTimeout(60000);
  62 |       await page.waitForLoadState('domcontentloaded');
  63 | 
  64 |       console.log('login successfully');
  65 | 
  66 |   })
  67 | 
  68 | 
  69 | 
  70 | 
  71 | 
  72 | })
```