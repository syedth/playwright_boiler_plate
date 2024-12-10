import { test, expect } from '@playwright/test';
import {login} from '../configuration/common'
import {DashBoardPage} from '../configuration/po'


test('Navigate to Login Page', async ({ page }) => {
  const dashBoardPage = new DashBoardPage(page);
  await login(page);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toHaveText('Dashboard');
  await expect(dashBoardPage.maxisTimeLogo).toBeVisible(); 
});
