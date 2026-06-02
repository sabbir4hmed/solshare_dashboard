
import { Page, expect } from '@playwright/test';
import { urls } from "../testData/credentials.data.";


export class DashboardPage {


    private page: Page;


    // Locator 

    private _navbutton = "//button[@id='kt_aside_toggle']";





    constructor(page: Page) {
        this.page = page;


    }


    async navigationDashboard()
    {
        await this.page.goto(urls._baseUrl + urls._dashboardPage);
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    }

    async toggleNavigation() {
        await this.page.click(this._navbutton);
        await this.page.waitForLoadState
    }



}