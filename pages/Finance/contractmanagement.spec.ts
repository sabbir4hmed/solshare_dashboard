import { Page, expect } from '@playwright/test';
import { urls } from "../testData/credentials.data";

export class ContractManagementPage {
    private page: Page;

    // Locators

    private _contractManagementTab = 'span:has-text("Contract Management")';
    private _smartBatteryFill = 'Type Smart Battery ID...';
    private _contractIDFill = 'Type Contract ID...';
    private _dongleIDFill = 'Type Dongle ID...';
    private _

    constructor(page: Page) {
        this.page = page;
    }
}