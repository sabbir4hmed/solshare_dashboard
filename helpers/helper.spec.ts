import {Page} from "@playwright/test";

export class Helper {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Random wait helper
    async waitForPageReady(page: Page, timeout: number = 60000) {
        await this.page.waitForLoadState('networkidle', {timeout: timeout});
    }

    //Clear & Fill input
    async clearAndFill(selector: string, value: string) {
        await this.page.locator(selector).clear();
        await this.page.locator(selector).fill(value);
    }

}