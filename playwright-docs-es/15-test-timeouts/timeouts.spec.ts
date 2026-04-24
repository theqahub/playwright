import { test, expect } from '@playwright/test';

test('timeout por test ampliado', async ({ page }) => {
  test.setTimeout(90_000);
  await page.goto('/dynamic_loading/2');
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.getByText('Hello World!')).toBeVisible();
});

test('expect timeout personalizado', async ({ page }) => {
  await page.goto('/dynamic_loading/2');
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.getByText('Hello World!')).toBeVisible({ timeout: 7_000 });
});
