# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login\auth.spec.ts >> Authentication Setup
- Location: tests\Login\auth.spec.ts:11:6

# Error details

```
TimeoutError: locator.fill: Timeout 1500ms exceeded.
Call log:
  - waiting for locator('input[name="username"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e6]:
          - link "logo" [ref=e7] [cursor=pointer]:
            - /url: /
            - img "logo" [ref=e8]
          - button "Stockholm-icons / Navigation / Angle-double-left" [ref=e9] [cursor=pointer]:
            - img "Stockholm-icons / Navigation / Angle-double-left" [ref=e11]
        - generic [ref=e18]:
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "ln Overview" [ref=e21] [cursor=pointer]:
                - /url: /overview
                - img "ln" [ref=e23]
                - generic [ref=e24]: Overview
            - listitem [ref=e25]:
              - heading "Finance" [level=4] [ref=e26]
              - text: 
            - listitem [ref=e27]:
              - link "ln Contract Management" [ref=e28] [cursor=pointer]:
                - /url: /contract-management/list
                - img "ln" [ref=e30]
                - generic [ref=e31]: Contract Management
            - listitem [ref=e32]:
              - link "mw Transactions" [ref=e33] [cursor=pointer]:
                - /url: /payments/list
                - img "mw" [ref=e35]
                - generic [ref=e36]: Transactions
            - listitem [ref=e37]:
              - link "inv Invoices" [ref=e38] [cursor=pointer]:
                - /url: /invoices/list
                - img "inv" [ref=e40]
                - generic [ref=e41]: Invoices
            - listitem [ref=e42]:
              - link "dt Deposits" [ref=e43] [cursor=pointer]:
                - /url: /deposits/list
                - img "dt" [ref=e45]
                - generic [ref=e46]: Deposits
            - listitem [ref=e47]:
              - heading "Operations" [level=4] [ref=e48]
              - text: 
            - listitem [ref=e49]:
              - link "Battery Rent Logs" [ref=e50] [cursor=pointer]:
                - /url: /dynamodb/rent-logs
                - img [ref=e52]
                - generic [ref=e54]: Battery Rent Logs
            - listitem [ref=e55]:
              - link "Drivers" [ref=e56] [cursor=pointer]:
                - /url: /drivers/list
                - generic [ref=e58]: 
                - generic [ref=e59]: Drivers
            - listitem [ref=e60]:
              - link "smi Smart batteries" [ref=e61] [cursor=pointer]:
                - /url: /devices/list
                - img "smi" [ref=e63]
                - generic [ref=e64]: Smart batteries
            - listitem [ref=e65]:
              - link "smi GPS Devices" [ref=e66] [cursor=pointer]:
                - /url: /gps/list
                - img "smi" [ref=e68]
                - generic [ref=e69]: GPS Devices
            - listitem [ref=e70]:
              - link "smi Live Location" [ref=e71] [cursor=pointer]:
                - /url: /live-location
                - img "smi" [ref=e73]
                - generic [ref=e74]: Live Location
            - listitem [ref=e75]:
              - link "smi Geofence Notifications" [ref=e76] [cursor=pointer]:
                - /url: /geofence-notifications
                - img "smi" [ref=e78]
                - generic [ref=e79]: Geofence Notifications
            - listitem [ref=e80]:
              - link "EVs" [ref=e81] [cursor=pointer]:
                - /url: /evs/list
                - img [ref=e83]
                - generic [ref=e85]: EVs
            - listitem [ref=e86]:
              - link "Borrowers" [ref=e87] [cursor=pointer]:
                - /url: /borrowers/list
                - img [ref=e89]
                - generic [ref=e90]: Borrowers
            - listitem [ref=e91]:
              - heading "Battery Management" [level=4] [ref=e92]
              - text: 
            - listitem [ref=e93]:
              - link "Vendors" [ref=e94] [cursor=pointer]:
                - /url: /batteries/vendors/list
                - img [ref=e96]
                - generic [ref=e98]: Vendors
            - listitem [ref=e99]:
              - link "Models" [ref=e100] [cursor=pointer]:
                - /url: /batteries/models/list
                - img [ref=e102]
                - generic [ref=e104]: Models
            - listitem [ref=e105]:
              - link "Batteries" [ref=e106] [cursor=pointer]:
                - /url: /batteries/list
                - generic [ref=e108]: 
                - generic [ref=e109]: Batteries
            - listitem [ref=e110]:
              - link "Data Log" [ref=e111] [cursor=pointer]:
                - /url: /battery-logs/list
                - generic [ref=e113]: 
                - generic [ref=e114]: Data Log
            - listitem [ref=e115]:
              - heading "Dongle Management" [level=4] [ref=e116]
              - text: 
            - listitem [ref=e117]:
              - link "Smart Dongles" [ref=e118] [cursor=pointer]:
                - /url: /dongles/list
                - img [ref=e120]
                - generic [ref=e122]: Smart Dongles
            - listitem [ref=e123]:
              - link "Hardwares" [ref=e124] [cursor=pointer]:
                - /url: /ota/hardwares
                - img [ref=e126]
                - generic [ref=e128]: Hardwares
            - listitem [ref=e129]:
              - link "Firmwares" [ref=e130] [cursor=pointer]:
                - /url: /ota/firmwares
                - generic [ref=e132]: 
                - generic [ref=e133]: Firmwares
            - listitem [ref=e134]:
              - link "OTA Updates" [ref=e135] [cursor=pointer]:
                - /url: /ota/history
                - generic [ref=e137]: 
                - generic [ref=e138]: OTA Updates
            - listitem [ref=e139]:
              - heading "Event Management" [level=4] [ref=e140]
              - text: 
            - listitem [ref=e141]:
              - link "Mobile App Events" [ref=e142] [cursor=pointer]:
                - /url: /app-events/list
                - generic [ref=e144]: 
                - generic [ref=e145]: Mobile App Events
            - listitem [ref=e146]:
              - heading "Administration" [level=4] [ref=e147]
              - text: 
            - listitem [ref=e148]:
              - link "org Organization - Financiers" [ref=e149] [cursor=pointer]:
                - /url: /financiers/list
                - img "org" [ref=e151]
                - generic [ref=e152]: Organization - Financiers
            - listitem [ref=e153]:
              - link "Users" [ref=e154] [cursor=pointer]:
                - /url: /users/list
                - generic [ref=e156]: 
                - generic [ref=e157]: Users
            - listitem [ref=e158]:
              - link "Roles" [ref=e159] [cursor=pointer]:
                - /url: /roles
                - generic [ref=e161]: 
                - generic [ref=e162]: Roles
          - generic [ref=e163]:
            - generic [ref=e164]: Dashboard v3.7.0
            - generic [ref=e165] [cursor=pointer]: Privacy Policy
      - generic [ref=e168]:
        - generic [ref=e170]:
          - combobox "Search with EV number" [ref=e175]
          - generic [ref=e178] [cursor=pointer]:
            - generic [ref=e179]: Hi,
            - generic [ref=e180]: Sabbir Ahmed
        - generic [ref=e188]:
          - img "Auto-Rickshaw" [ref=e189]
          - heading "Welcome to the SOLmobility Dashboard" [level=1] [ref=e190]:
            - generic [ref=e191]:
              - text: Welcome to the
              - mark [ref=e192]: SOLmobility
              - text: Dashboard
          - paragraph
        - generic [ref=e194]:
          - generic [ref=e195]:
            - text: 2026 ©
            - link "ME-SOLshare" [ref=e196] [cursor=pointer]:
              - /url: https://solshare.com
          - generic [ref=e197]:
            - link "About" [ref=e198] [cursor=pointer]:
              - /url: https://solshare.com/overview/
            - link "Contact" [ref=e199] [cursor=pointer]:
              - /url: https://solshare.com/contact-us/
    - generic [ref=e200]:
      - generic [ref=e201]:
        - heading "User Profile" [level=3] [ref=e202]
        - link "" [ref=e203] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e204]: 
      - generic [ref=e210]:
        - link "Sabbir Ahmed" [ref=e211] [cursor=pointer]:
          - /url: "#"
        - link [ref=e213] [cursor=pointer]:
          - /url: "#"
        - generic [ref=e215]:
          - button "Update password" [ref=e217] [cursor=pointer]
          - button "Sign out" [ref=e220] [cursor=pointer]
    - generic [ref=e222]:
      - generic [ref=e223]:
        - tablist [ref=e224]:
          - listitem [ref=e225]:
            - tab "Audit Logs" [selected] [ref=e226] [cursor=pointer]
          - listitem [ref=e227]:
            - tab "Notifications" [ref=e228] [cursor=pointer]
          - listitem [ref=e229]:
            - tab "Settings" [ref=e230] [cursor=pointer]
        - link "" [ref=e232] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e233]: 
      - generic [ref=e235]:
        - tabpanel [ref=e236]:
          - generic [ref=e237]:
            - heading "System Messages" [level=5] [ref=e238]
            - generic [ref=e239]:
              - generic [ref=e242]:
                - link "Top Authors" [ref=e243] [cursor=pointer]:
                  - /url: "#"
                - generic [ref=e244]: Most Successful Fellas
              - generic [ref=e245] [cursor=pointer]: +82$
            - generic [ref=e246]:
              - generic [ref=e249]:
                - link "Popular Authors" [ref=e250] [cursor=pointer]:
                  - /url: "#"
                - generic [ref=e251]: Most Successful Fellas
              - generic [ref=e252] [cursor=pointer]: +280$
            - generic [ref=e253]:
              - generic [ref=e256]:
                - link "New Users" [ref=e257] [cursor=pointer]:
                  - /url: "#"
                - generic [ref=e258]: Most Successful Fellas
              - generic [ref=e259] [cursor=pointer]: +4500$
            - generic [ref=e260]:
              - generic [ref=e263]:
                - link "Active Customers" [ref=e264] [cursor=pointer]:
                  - /url: "#"
                - generic [ref=e265]: Most Successful Fellas
              - generic [ref=e266] [cursor=pointer]: +4500$
            - generic [ref=e267]:
              - generic [ref=e270]:
                - link "Bestseller Theme" [ref=e271] [cursor=pointer]:
                  - /url: "#"
                - generic [ref=e272]: Most Successful Fellas
              - generic [ref=e273] [cursor=pointer]: +4500$
          - generic [ref=e274]:
            - heading "Notifications" [level=5] [ref=e275]
            - generic [ref=e276]:
              - generic [ref=e277]:
                - link "Another purpose persuade" [ref=e278] [cursor=pointer]:
                  - /url: "#"
                - generic [ref=e279]: Due in 2 Days
              - generic [ref=e280]: +28%
            - generic [ref=e281]:
              - img "Stockholm-icons / Communication / Write" [ref=e283]
              - generic [ref=e288]:
                - link "Would be to people" [ref=e289] [cursor=pointer]:
                  - /url: "#"
                - generic [ref=e290]: Due in 2 Days
              - generic [ref=e291]: +50%
            - generic [ref=e292]:
              - img "Stockholm-icons / Communication / Group-chat" [ref=e294]
              - generic [ref=e299]:
                - link "Purpose would be to persuade" [ref=e300] [cursor=pointer]:
                  - /url: "#"
                - generic [ref=e301]: Due in 2 Days
              - generic [ref=e302]: "-27%"
            - generic [ref=e303]:
              - img "Stockholm-icons / General / Attachment2" [ref=e305]
              - generic [ref=e312]:
                - link "The best product" [ref=e313] [cursor=pointer]:
                  - /url: "#"
                - generic [ref=e314]: Due in 2 Days
              - generic [ref=e315]: +8%
        - text:             
  - img
```

# Test source

```ts
  1  | import {Page, expect} from '@playwright/test';
  2  | import{urls, _pageTitle} from "../testData/credentials.data.";
  3  | 
  4  | export class LoginPage {
  5  | 
  6  |     private page : Page;
  7  | 
  8  |     //Locators
  9  | 
  10 |     private _emailfield = 'input[name="username"]';
  11 |     private _passwordfield = 'input[name="password"]';
  12 |     private _submitbutton = "button[type='submit']";
  13 |     
  14 | 
  15 |     constructor(page:Page) {
  16 |         this.page = page;
  17 |     }
  18 | 
  19 |     //Action
  20 | 
  21 |     async navigationTo()
  22 |     {
  23 |         await this.page.goto(urls._baseUrl + urls._loginPage);
  24 |         await this.page.waitForLoadState('domcontentloaded');
  25 |     }
  26 | 
  27 |     //Fill Mail
  28 | 
  29 |     async fillmail(email: string)
  30 |     {
> 31 |         await this.page.locator(this._emailfield).fill(email);
     |                                                   ^ TimeoutError: locator.fill: Timeout 1500ms exceeded.
  32 |     }
  33 | 
  34 |     //Fill Password
  35 | 
  36 |     async fillpassword (password: string)
  37 |     {
  38 |         await this.page.locator(this._passwordfield).fill(password);
  39 |     }
  40 | 
  41 |     // Click Submit
  42 | 
  43 |     async clicksubmit()
  44 |     {
  45 |         await this.page.locator(this._submitbutton).click();
  46 |     }
  47 | 
  48 |     //Full Login Action
  49 | 
  50 |     async login(email : string, password: string)
  51 |     {
  52 |         await this.fillmail(email);
  53 |         await this.fillpassword(password);
  54 |         await this.clicksubmit();
  55 | 
  56 |         // 1 min wait
  57 |         await this.page.waitForLoadState('networkidle', {timeout: 60000});
  58 |     }
  59 | 
  60 | 
  61 |     //Assertion
  62 | 
  63 |    async verifyPageLoaded()
  64 |    {
  65 |        await expect(this.page).toHaveTitle(_pageTitle);
  66 |        await expect(this.page).toHaveURL(urls._baseUrl + urls._loginPage);
  67 |    }
  68 | 
  69 |    async verifyLoginSucess()
  70 |    {
  71 |        await expect(this.page).not.toHaveURL(/login/);
  72 |    }
  73 |    async verifyLoginFailed()
  74 |    {
  75 |        await expect(this.page).toHaveURL(/login/);
  76 |    }
  77 | 
  78 | }
```