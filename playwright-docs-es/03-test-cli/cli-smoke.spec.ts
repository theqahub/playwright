import { test, expect } from '@playwright/test';

test('CLI demo: smoke home', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright Docs ES/);
});

test('CLI demo: filtro por titulo', async ({ page }) => {
  await page.goto('/todos');
  await expect(page.getByRole('heading', { name: 'Todos' })).toBeVisible();
});
