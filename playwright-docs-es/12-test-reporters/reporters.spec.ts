import { test, expect } from '@playwright/test';

test('reporters: caso con steps', async ({ page }) => {
  await test.step('Abrir home', async () => {
    await page.goto('/');
  });

  await test.step('Verificar heading principal', async () => {
    await expect(page.getByRole('heading', { name: 'Laboratorio Playwright' })).toBeVisible();
  });
});
