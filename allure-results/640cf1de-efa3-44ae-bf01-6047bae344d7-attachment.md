# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login/login.spec.ts >> Login Flow - emobility >> TC_002 - User should login with valid credentials
- Location: tests/Login/login.spec.ts:45:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - link "Logo" [ref=e7] [cursor=pointer]:
        - /url: /
        - img "Logo" [ref=e8]
      - generic [ref=e9]:
        - heading "Welcome to SOLshare!" [level=3] [ref=e10]
        - paragraph [ref=e11]:
          - text: Create a network. Share electricity.
          - text: Brighten the future
      - generic [ref=e12]:
        - generic [ref=e13]: © 2026 ME-SOLshare
        - generic [ref=e15] [cursor=pointer]: Privacy Policy
    - generic [ref=e20]:
      - heading "Emobility dashboard" [level=3] [ref=e21]
      - generic [ref=e23]:
        - generic [ref=e25]:
          - generic [ref=e26]:
            - generic [ref=e27]: 
            - textbox "Phone number or email" [ref=e28]: sabbir.ahmed@solshare.com
          - generic [ref=e29]:
            - generic [ref=e30]: 
            - text: OTP already sent. Please wait until it expires.
        - generic [ref=e32]:
          - generic [ref=e33]:
            - generic [ref=e34]: 
            - textbox "Password" [ref=e35]: S@bbir4hmed
            - generic [ref=e37] [cursor=pointer]: 
          - generic [ref=e38]:
            - generic [ref=e39]: 
            - text: OTP already sent. Please wait until it expires.
        - generic [ref=e40]:
          - button "Sign In With SOLshare" [ref=e42] [cursor=pointer]
          - button "Sign In" [ref=e44] [cursor=pointer]
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
> 61 |       await page.waitForTimeout(60000);
     |                  ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  62 |       //await page.waitForLoadState('domcontentloaded');
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