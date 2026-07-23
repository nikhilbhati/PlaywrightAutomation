import { Page, Locator } from '@playwright/test';

export class SignupPage {
  readonly page: Page; // Kept for reference or quick page-level calls
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly mobileNo: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly signup: Locator;
  readonly heading: Locator;
  readonly userOptions: Locator;
  readonly client: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('input[name="firstName"]');
    this.lastName = page.locator('input[name="lastName"]');
    this.email = page.locator('input[name="email"]');
    this.mobileNo = page.locator('input[name="phone"]');
    this.password = page.locator('input[name="password"]');
    this.signup = page.locator('.shd-button--primary');
    this.heading = page.locator('.auth-container--title');
    this.userOptions = page.locator('.modal-content-container');
    this.client = page.getByText('Clients', { exact: true });
  }
}