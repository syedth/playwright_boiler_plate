import {Page} from '@playwright/test';
import { LoginPage } from './po';
import {WEB_BASE_URL} from '../configuration/environment.json'


export async function login(page: Page) {
    const loginPage = new LoginPage(page);
    await page.goto(WEB_BASE_URL);
    await page.waitForTimeout(3000);
    await loginPage.userNameInput.fill('superadmin@yopmail.com');
    await loginPage.passwordInput.fill('Test@123');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForTimeout(3000);
}