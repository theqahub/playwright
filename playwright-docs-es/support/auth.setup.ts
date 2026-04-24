import { test as setup, expect } from '@playwright/test';

setup('auth setup: guardar storage state', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/\/secure/);
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

  await page.context().storageState({ path: './.auth/user.json' });
});
