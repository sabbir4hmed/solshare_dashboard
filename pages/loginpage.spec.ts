import {Page, expect} from '@playwright/test';
import{urls, _pageTitle} from "../testData/credentials.data";

export class LoginPage {

    private page : Page;

    //Locators

    private _emailfield = 'input[name="username"]';
    private _passwordfield = 'input[name="password"]';
    private _submitbutton = "button[type='submit']";
    

    constructor(page:Page) {
        this.page = page;
    }

    //Action

    async navigationTo()
    {
        await this.page.goto(urls._baseUrl + urls._loginPage);
        await this.page.waitForLoadState('domcontentloaded');
    }

    //Fill Mail

    async fillmail(email: string)
    {
        await this.page.locator(this._emailfield).fill(email);
    }

    //Fill Password

    async fillpassword (password: string)
    {
        await this.page.locator(this._passwordfield).fill(password);
    }

    // Click Submit

    async clicksubmit()
    {
        await this.page.locator(this._submitbutton).click();
    }

    //Full Login Action

    async login(email : string, password: string)
    {
        await this.fillmail(email);
        await this.fillpassword(password);
        await this.clicksubmit();

        // 1 min wait
        await this.page.waitForLoadState('networkidle', {timeout: 60000});
    }


    //Assertion

   async verifyPageLoaded()
   {
       await expect(this.page).toHaveTitle(_pageTitle);
       await expect(this.page).toHaveURL(urls._baseUrl + urls._loginPage);
   }

   async verifyLoginSucess()
   {
       await expect(this.page).not.toHaveURL(/login/);
   }
   async verifyLoginFailed()
   {
       await expect(this.page).toHaveURL(/login/);
   }

}