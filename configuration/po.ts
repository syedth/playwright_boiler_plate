import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly maxisTimeLogo: Locator;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('form > div:nth-child(1) > mat-form-field > div > div > div > input');
    this.passwordInput = page.locator('form > div:nth-child(2) > mat-form-field > div > div > div > input');
  }
}

export class DashBoardPage {
    readonly page: Page;
    readonly maxisTimeLogo: Locator;
    
    constructor(page: Page) {
      this.page = page;
      this.maxisTimeLogo = page.locator('.app-sidebar-logo > a > img');
    }
  }