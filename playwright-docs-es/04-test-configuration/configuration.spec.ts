import { test, expect } from '@playwright/test';

test('usa baseURL definida en config', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
});
