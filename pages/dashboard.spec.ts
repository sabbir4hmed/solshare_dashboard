import { Page, expect } from '@playwright/test';
import { urls } from "../testData/credentials.data";

export class DashboardPage {

    private page: Page;

    // Locators
    private _overview = 'span:has-text("Overview")';
    private _branchPerformance = 'Branch-wise Performance';
    private _borrowerPerformance = 'Borrower-wise Performance';
    private _activity = 'Activity';

    constructor(page: Page) {
        this.page = page;
    }

    //  Operations 

    async navigationDashboard() {
        await this.page.goto(urls._baseUrl + urls._dashboardPage);
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    }

    
    async overview() {
        const overviewTab = this.page.locator(this._overview).first();
        await overviewTab.waitFor({ state: 'visible', timeout: 30000 });
        await overviewTab.click();
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
        console.log('✅ Overview Tab Clicked');
    }


    async branchPerformance() {
        const branchTab = this.page.getByText(this._branchPerformance, { exact: true }).first();
        await branchTab.waitFor({ state: 'visible', timeout: 30000 });
        await branchTab.click();
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
        console.log('✅ Branch-wise Performance Tab Clicked');
    }


    async borrowerPerformance() {
        const borrowerTab = this.page.getByText(this._borrowerPerformance, { exact: true }).first();
        await borrowerTab.waitFor({ state: 'visible', timeout: 30000 });
        await borrowerTab.click();
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
        console.log('✅ Borrower-wise Performance Tab Clicked');
    }


    async activity() {
        const activityTab = this.page.getByText(this._activity, { exact: true }).first();
        await activityTab.waitFor({ state: 'visible', timeout: 30000 });
        await activityTab.click();
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });
        console.log('✅ Activity Tab Clicked');
    }

    //  Assertions 

    async verifyDashboardLoaded() {
        await expect(this.page).toHaveURL(urls._baseUrl + urls._dashboardPage);
        console.log('✅ Dashboard Loaded Successfully');
    }
}
