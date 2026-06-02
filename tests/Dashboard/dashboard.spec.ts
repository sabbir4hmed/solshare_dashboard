import {test, expect} from '@playwright/test';
import { DashboardPage } from "../../pages/dashboard.spec";
import { test_credentials } from "../../testData/credentials.data";
import { Helper } from "../../helpers/helper.spec";
import {LoginPage} from "../../pages/loginpage.spec";

test.describe('Dashboard Flow - emobility', () => {

    let dashboardPage: DashboardPage;
    let helper: Helper;
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        helper = new Helper(page);

        await loginPage.navigationTo();
        await loginPage.login(
            test_credentials._email,
            test_credentials._password
        ); 
        await helper.waitForPageReady(page, 60000);
    });

    // TC_007 - Dashboard Load Check
    test('TC_007 - Dashboard Should Load Successfully', async ({ page }) => {

        await dashboardPage.verifyDashboardLoaded();

        await helper.waitForPageReady(page, 60000);

        console.log('TC_007 Passed - Dashboard Loaded Successfully');


    })


    // TC_008 - Overview Section Check085233
    test('TC_008 - Overview Section Should Be Accessible', async ({ page }) => {

        await dashboardPage.overview();

        console.log('TC_008 Passed - Overview Section is Accessible');

    })

})