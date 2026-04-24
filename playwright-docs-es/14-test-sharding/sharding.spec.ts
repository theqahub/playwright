import { test, expect } from '@playwright/test';

for (let i = 1; i <= 8; i += 1) {
  test(`shard demo caso ${i}`, async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
  });
}
