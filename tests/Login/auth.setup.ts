import { test as setup } from '@playwright/test';
import { LoginPage } from "../../pages/loginpage.spec";
import { test_credentials } from "../../testData/credentials.data";
import { PrivacyModal } from "../../pages/privacymodal.spec";


// Save auth state 

const Auth_file = 'AUth/.auth/user.json';

setup('Authentication Setup', async ({ page }) => {

    const loginpage = new LoginPage(page);
    const privacyModal = new PrivacyModal(page);


    // Navigate to login page
    await loginpage.navigationTo();
    await page.waitForLoadState('domcontentloaded');

    // Login

    await loginpage.login(
        test_credentials._email,
        test_credentials._password
    );

    // Verify Login Success

    await loginpage.verifyLoginSucess();


    // Handle Privacy Modal if it appears

    try {
        // Call the check and then attempt to close the modal if present.
        await privacyModal.verifyPrivacyButtonVisible();
        console.log('Privacy Modal Detected - Handling it');
        await privacyModal.verifyPrivacyModalClosed();
    } catch {
        // If the check failed or modal not present, continue silently
        console.log('Privacy Modal not present or already handled');
    }

    // Save Auth State

    await page.context().storageState({ path: Auth_file });

    console.log('Authentication setup completed - Auth state saved');

});