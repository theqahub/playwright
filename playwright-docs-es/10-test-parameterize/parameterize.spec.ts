import { test, expect } from '@playwright/test';

const statusCodes = [
  { code: '200', path: '/status_codes/200' },
  { code: '301', path: '/status_codes/301' },
  { code: '404', path: '/status_codes/404' },
  { code: '500', path: '/status_codes/500' },
];

for (const item of statusCodes) {
  test(`status code ${item.code} visible`, async ({ page }) => {
    await page.goto(item.path);
    await expect(page.locator('#content')).toContainText(item.code);
  });
}
