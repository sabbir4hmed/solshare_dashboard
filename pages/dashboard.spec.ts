
import { Page, expect } from '@playwright/test';
import { urls } from "../testData/credentials.data";


export class DashboardPage {


    private page: Page;


    // Locator 

    private _overview = 'span:has-text("Overview")';
    private _branchPerformnce = 'Branch-wise Performance';
    private _borrowerPerformnce = 'Borrower-wise Performance';
    private _activity = 'Activity';





    constructor(page: Page) {
        this.page = page;


    }


    // Operations 

    async navigationDashboard()
    {
        await this.page.goto(urls._baseUrl + urls._dashboardPage);
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    }

    async overview() {
        await this.page.locator(this._overview).click();
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    }

    async branchPerformance() {
        await this.page.getByText(this._branchPerformnce).click();
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    }

    async borrowerPerformance() {
        await this.page.getByText(this._borrowerPerformnce).click();
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    }

    async activity() {
        await this.page.getByText(this._activity).click();
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    }

    //Assertions

    async verifyDashboardLoaded() {
        await expect(this.page).toHaveURL(urls._baseUrl + urls._dashboardPage);

        console.log('Dashboard Loaded Successfully');

    }




}