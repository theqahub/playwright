import { test, expect } from '@playwright/test';

test('sitio remoto accesible antes de ejecutar', async ({ request, page }) => {
  const home = await request.get('/');
  expect(home.ok()).toBeTruthy();

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
});
