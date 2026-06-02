import {test, expect} from '@playwright/test';
import { DashboardPage } from "../../pages/dashboard.spec";
import { test_credentials } from "../../testData/credentials.data.";
import { Helper } from "../../helpers/helper.spec";

test.describe('Dashboard Flow - emobility', () => {

    let dashboardPage: DashboardPage;
    let helper: Helper;

    test.beforeEach(async ({ page }) => {
        dashboardPage = new DashboardPage(page);
        helper = new Helper(page);

        await helper.waitForPageReady(page, 60000);
    });

    // TC_007 - Dashboard Load Check
    test('TC_007 - Dashboard Should Load Successfully', async ({ page }) => {




    })


    // TC_008 - Toggle Navigation Button
    test('TC_008 - Toggle Navigation Button', async ({ page }) => {

       await dashboardPage.toggleNavigation();

       console.log('TC_008 Passed - Navigation toggled successfully');

    })

})