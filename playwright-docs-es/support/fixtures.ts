import { test as base, expect, type Page } from '@playwright/test';

type DemoFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<DemoFixtures>({
  authenticatedPage: async ({ page }, use) => {
    await page.goto('/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/secure/);
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();

    await use(page);

    await page.context().clearCookies();
  },
});

export { expect };
