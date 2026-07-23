import { test, expect } from '@playwright/test';
import { genrateCreds, generateMobileNumber, generateRandomName  } from './helpers/utils';
import { LoginPage } from './pages/LoginPage';
import { SignupPage} from './pages/signupPage';
import * as fs from 'fs';

test.describe('Example Test Suite', () => {
   
    test('validate signup flow', async ({ page }) => {
        // Navigate to the baseURL 
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        const firstName: string = await generateRandomName();
        const lastName: string = await generateRandomName();
        const mobileNo = generateMobileNumber();
        await genrateCreds();
        await page.goto('/');
      
        await expect(page).toHaveURL('https://my.saleshandy.com/login');
        await expect(loginPage.loginButton).toBeDisabled();
        await expect(loginPage.welcomeMsg).toBeVisible();
        await expect(loginPage.welcomeMsg).toHaveText('Welcome Back to Saleshandy');
        await loginPage.signupBtn.click();
        await expect(page).toHaveURL('https://my.saleshandy.com/signup');
        await expect(signupPage.heading).toHaveText('Create your account');
        await expect(signupPage.signup).toBeDisabled();
        await signupPage.firstName.fill(`${firstName}`);
        await signupPage.lastName.fill(`${lastName}`);
        await signupPage.mobileNo.fill(`${mobileNo}`);
        const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf-8'));
        await signupPage.email.fill(`${credentials.email}`);
        await signupPage.password.fill(`${credentials.password}`);
        await signupPage.signup.click();
        await page.waitForResponse('**/api/edge/auth/signup');
        await page.waitForLoadState(); 
        await expect(page).toHaveURL('https://my.saleshandy.com/sequence?signup=completed');
        await expect(signupPage.userOptions).toBeVisible();
        await expect(signupPage.client).toBeVisible();
        await signupPage.client.click();
      });

    // test('should successfully log in', async ({ page }) => {
    //     const loginPage = new LoginPage(page);
    
    //     // Navigate to the login page
    //     await page.goto('/'); // Base URL is already set in the config
    
    //     // Perform login actions
    //     await page.fill(loginPage.emailInput, 'testuser@example.com');
    //     await page.fill(loginPage.passwordInput, 'password123');
    //     await page.click(loginPage.loginButton);
    
    //     // Add assertions for successful login
    //     await expect(page).toHaveURL('https://my.saleshandy.com/dashboard'); // Example URL after login
    //   });
});