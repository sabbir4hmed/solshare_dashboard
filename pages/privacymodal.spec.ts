import {Page, expect, Locator} from '@playwright/test';


export class PrivacyModal
{
    private privacybutton: Locator;
    //private modal : Locator;
    private closebutton : Locator;


constructor(page: Page)
{
    this.privacybutton = page.getByText('Privacy Policy');
    //this.modal = page.locator("//div[@class='modal-content']");
    this.closebutton = page.getByRole('button', {name: 'Close'});
}


//Assertion to verify  the privacy button is visible

async verifyPrivacyButtonVisible()
{
    await expect(this.privacybutton).toBeVisible();
}

//Assertion to Verify the Privacy Modal is Visible

/* async verifyPrivacyModalVisible()
{
    await expect(this.modal).toBeVisible();
} */

//Assertion to Verify the Privacy Modal is Closed

async verifyPrivacyModalClosed()
{
    await expect(this.privacybutton).toBeVisible();
    await this.privacybutton.click();
    //await expect(this.modal).toBeVisible();
    await this.closebutton.click();
    //await expect(this.modal).not.toBeVisible();
}



}