
import { Page, expect } from '@playwright/test';
import { urls } from "../testData/credentials.data";


export class DashboardPage {


    private page: Page;


    // Locator 

    private _overview = 'Overview';





    constructor(page: Page) {
        this.page = page;


    }


    async navigationDashboard()
    {
        await this.page.goto(urls._baseUrl + urls._dashboardPage);
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    }

    async overview() {
        await this.page.getByText(this._overview).click();
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    }



    //Assertions

    async verifyDashboardLoaded() {
        await expect(this.page).toHaveURL(urls._baseUrl + urls._dashboardPage);

        console.log('Dashboard Loaded Successfully');

    }



}