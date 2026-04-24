import { test, expect } from '@playwright/test';

test('proyecto actual visible en testInfo', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
  expect(testInfo.project.name.length).toBeGreaterThan(0);
});
