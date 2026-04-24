import { test, expect } from '@playwright/test';

test('CLI demo: smoke home', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/The Internet/);
});

test('CLI demo: filtro por titulo', async ({ page }) => {
  await page.goto('/dropdown');
  await expect(page.getByRole('heading', { name: 'Dropdown List' })).toBeVisible();
});
