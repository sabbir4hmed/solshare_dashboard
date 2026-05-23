import {test} from '@playwright/test';
import {LoginPage} from "../../pages/loginpage.spec";
import {test_credentials} from "../../testData/credentials.data.";
import {Helper} from "../../helpers/helper.spec";

//Test Suite

test.describe('Login Flow - emobility', ()=>{
    let loginPage: LoginPage;
    let helper: Helper;


    //Before each - navigate to login page

    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page);
        helper = new Helper(page);
        await loginPage.navigationTo();

    })

    //TC_001 Page load check
    test('TC_001 - Login Page Should Load Successfully', async ({page}) => {
    
        await helper.waitForPageReady(page, 60000);

        await loginPage.verifyPageLoaded();
    })

    //TC_002 Valid Login
    test('TC_002 - User Should Login with Valid Credentials', async () => {
        await loginPage.login(
            test_credentials._email,
            test_credentials._password
        );

        await loginPage.verifyLoginSucess();

        console.log('TC_002 Passed- Login Successfully');
    })

    //TC_003 Invalid Login

    test('TC_003 - Login with Invalid Credentials', async () => {
        await loginPage.login(
            test_credentials._wrongEmail,
            test_credentials._wrongPassword
        );
        await loginPage.verifyLoginFailed();

        console.log('TC_003- Failed - Login failed');
    })

    //TC_004 Invalid email

    test('TC_004 - Login with Invalid Email', async () => {
        await loginPage.login(
            test_credentials._wrongEmail,
            test_credentials._password
        );
        await loginPage.verifyLoginFailed();
        console.log('TC_004- Failed - Login failed with wrong email');
    })

    //TC_005 Invalid Password

    test('TC_005 - Login with Invalid Password', async () => {

        await loginPage.login(
            test_credentials._email,
            test_credentials._wrongPassword
        );

        await loginPage.verifyLoginFailed();

        console.log('TC_005 - Failed - Login failed with wrong password');

    })

});