import { test, expect } from '@playwright/test';

test('webServer levanta app antes de ejecutar', async ({ request, page }) => {
  const health = await request.get('/health');
  expect(health.ok()).toBeTruthy();

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Laboratorio Playwright' })).toBeVisible();
});
