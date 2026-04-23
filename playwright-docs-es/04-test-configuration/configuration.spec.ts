import { test, expect } from '@playwright/test';

test('usa baseURL definida en config', async ({ page }) => {
  // Si baseURL funciona, esta ruta relativa se resuelve sola.
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Laboratorio Playwright' })).toBeVisible();
});
