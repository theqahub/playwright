import { test, expect } from '@playwright/test';

test('ejemplo de retry controlado', async ({ page }, testInfo) => {
  await page.goto('/');

  if (testInfo.retry === 0) {
    expect(false, 'Fallo intencional en primer intento').toBe(true);
  }

  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
});
