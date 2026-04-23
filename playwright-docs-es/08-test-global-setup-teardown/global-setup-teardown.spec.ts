import { test, expect } from '@playwright/test';

test('global setup ejecuto correctamente', async ({ page }) => {
  expect(process.env.PW_DOCS_GLOBAL_SETUP).toBe('ok');
  await page.goto('/');
  await expect(page.getByText('Servidor local para ejemplos de la serie.')).toBeVisible();
});
