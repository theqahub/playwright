import { test as base, expect, type Page } from '@playwright/test';

type DemoFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<DemoFixtures>({
  authenticatedPage: async ({ page }, use) => {
    // Fixture reusable: deja la pagina autenticada para tests.
    await page.goto('/login');
    await page.getByLabel('Email').fill('qa@example.com');
    await page.getByLabel('Password').fill('secret');
    await page.getByRole('button', { name: 'Entrar' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    await use(page);

    await page.context().clearCookies();
  },
});

export { expect };
