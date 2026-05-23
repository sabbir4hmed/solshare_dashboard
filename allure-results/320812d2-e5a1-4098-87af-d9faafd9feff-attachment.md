# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login/login.spec.ts >> Login Flow - emobility >> TC_001 - Load Page sould load successfully
- Location: tests/Login/login.spec.ts:29:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.emobility-stage.me-solshare.net/"
Received: "https://www.emobility-stage.me-solshare.net/auth/login"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://www.emobility-stage.me-solshare.net/auth/login"

```

```yaml
- link "Logo":
  - /url: /
  - img "Logo"
- heading "Welcome to SOLshare!" [level=3]
- paragraph: Create a network. Share electricity. Brighten the future
- text: © 2026 ME-SOLshare Privacy Policy
- heading "Emobility dashboard" [level=3]
- textbox "Phone number or email"
- textbox "Password"
- button "Sign In With SOLshare"
- button "Sign In"
- img
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
  12 | const _url = 'https://www.emobility-stage.me-solshare.net/';
  13 | 
  14 | //TTest Suite
  15 | 
  16 | test.describe('Login Flow - emobility', ()=>{
  17 | 
  18 |     //Go to website test beforeeach
  19 | 
  20 |     test.beforeEach(async ({page}: {page:Page})=>{
  21 | 
  22 |         await page.goto(_url);
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
> 36 |         await expect(page).toHaveURL('https://www.emobility-stage.me-solshare.net');
     |                            ^ Error: expect(page).toHaveURL(expected) failed
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
  49 | 
  50 | 
  51 |       //Valid Password Fill
  52 | 
  53 |       await await page.locator('[name="password"]').fill(test_credentials._password);
  54 | 
  55 | 
  56 |       // Login button click
  57 | 
  58 | 
  59 |   })
  60 | 
  61 | 
  62 | 
  63 | 
  64 | 
  65 | })
```