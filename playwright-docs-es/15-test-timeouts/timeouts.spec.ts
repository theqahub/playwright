import { test, expect } from '@playwright/test';

test('timeout por test ampliado', async ({ page }) => {
  test.setTimeout(90_000);
  await page.goto('/exports');
  await expect(page.getByText('Completado')).toBeVisible();
});

test('expect timeout personalizado', async ({ page }) => {
  await page.goto('/exports');
  await expect(page.getByText('Completado')).toBeVisible({ timeout: 7_000 });
});
