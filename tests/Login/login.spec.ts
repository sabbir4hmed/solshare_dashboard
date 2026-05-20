import {test} from '@playwright/test';
import {LoginPage} from "../../pages/loginpage.spec";
import {test_credentials} from "../../testData/credentials.data.";

//Test Suite

test.describe('Login Flow - emobility', ()=>{
    let loginPage: LoginPage;

    //Before each - navigate to login page

    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page);
        await loginPage.navigationTo();
    })
})