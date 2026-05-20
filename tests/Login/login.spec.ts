import { test, expect , Page} from '@playwright/test';

const test_credentials = {

    _email: 'sabbir.ahmed@solshare.com',
    _password: 'S@bbir4hmed',
    _wrongEmail: 'sabbir.ahmed@gmail.com',
    _wrongPassword: 'S@bbirhmed',
};


const _url = 'https://www.emobility-stage.me-solshare.net/';

//TTest Suite

test.describe('Login Flow - emobility', ()=>{

    //Go to website test beforeeach

    test.beforeEach(async ({page}: {page:Page})=>{

        await page.goto(_url);
        await page.waitForLoadState('domcontentloaded');

    })

// Test 1: Page Load Check

    test('TC_001 - Load Page sould load successfully', async ({page}: {page:Page}) => {
        //Page title check

        await expect(page).toHaveTitle('ME SOLshare');

        //url check

        await expect(page).toHaveURL('https://www.emobility-stage.me-solshare.net');

        console.log('Page loaded successfully');
    })


  // Test 2: Valid Login


  test('TC_002 - User should login with valid credentials', async ({page}: {page:Page}) => {

      //Valid Email Fill
      await page.locator('input[name="username"]').fill(test_credentials._email);


      //Valid Password Fill

      await await page.locator('[name="password"]').fill(test_credentials._password);


      // Login button click


  })





})