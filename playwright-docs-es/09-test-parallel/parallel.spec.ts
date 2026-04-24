import { test, expect } from '@playwright/test';

test.describe('grupo paralelo', () => {
  test.describe.configure({ mode: 'parallel' });

  test('paralelo A', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
  });

  test('paralelo B', async ({ page }) => {
    await page.goto('/dropdown');
    await expect(page.getByRole('heading', { name: 'Dropdown List' })).toBeVisible();
  });
});

test.describe('grupo serial', () => {
  test.describe.configure({ mode: 'serial' });

  test('serial 1', async ({ page }) => {
    await page.goto('/secure');
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
  });

  test('serial 2', async ({ page }) => {
    await page.goto('/dynamic_loading/2');
    await page.getByRole('button', { name: 'Start' }).click();
    await expect(page.getByText('Hello World!')).toBeVisible();
  });
});
