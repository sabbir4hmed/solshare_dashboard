import {Page} from "@playwright/test";

//Random wait helper

export async function _waitForPageReady(page:Page, timeout:60000) {

    await page.waitForLoadState('networkidle', {timeout: timeout});

}

//Clear & Fill input

export async function _clearAndFill(page:Page, selcetor: string, value: string) {
    await page.locator(selcetor).clear();
    await page.locator(selcetor).fill(value);
}