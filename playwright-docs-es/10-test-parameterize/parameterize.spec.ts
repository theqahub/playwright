import { test, expect } from '@playwright/test';

const roles = [
  { role: 'admin', path: '/admin' },
  { role: 'editor', path: '/editor' },
  { role: 'viewer', path: '/viewer' },
];

for (const item of roles) {
  test(`acceso correcto para rol ${item.role}`, async ({ page }) => {
    await page.goto(item.path);
    await expect(page.getByRole('heading', { name: item.role })).toBeVisible();
  });
}
