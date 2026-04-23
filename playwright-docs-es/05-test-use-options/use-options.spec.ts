import { test, expect } from '@playwright/test';

test('locale y timezone vienen de use global', async ({ page }) => {
  await page.goto('/');

  const locale = await page.evaluate(() => navigator.language);
  expect(locale.toLowerCase()).toContain('es');

  const tz = await page.evaluate(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
  );
  expect(tz).toBe('Europe/Madrid');
});

test.describe('override local de use options', () => {
  test.use({ locale: 'en-US' });

  test('override locale a en-US', async ({ page }) => {
    await page.goto('/');
    const locale = await page.evaluate(() => navigator.language);
    expect(locale.toLowerCase()).toContain('en');
  });
});
