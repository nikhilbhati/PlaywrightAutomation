import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page; // Kept for reference or quick page-level calls
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly welcomeMsg: Locator;
  readonly signupBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Centralize all resilient locators here
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('#error-msg');
    this.welcomeMsg = page.locator('.auth-container--title');
    this.signupBtn = page.getByRole('link', { name: 'Sign up!'});
  }
}