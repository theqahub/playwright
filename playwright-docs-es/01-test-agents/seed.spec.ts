import { test, expect } from '@playwright/test';

test('seed: flujo base de add/remove elements', async ({ page }) => {
  await page.goto('/add_remove_elements/');
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
});
