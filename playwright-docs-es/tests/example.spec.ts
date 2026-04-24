import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle(/The Internet/);
});

test('add remove elements example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
});
