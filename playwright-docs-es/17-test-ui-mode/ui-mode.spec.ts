import { test, expect } from '@playwright/test';

test('ideal para depurar en UI mode', async ({ page }) => {
  await page.goto('/add_remove_elements/');
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
});
