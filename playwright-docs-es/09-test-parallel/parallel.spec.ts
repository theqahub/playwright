import { test, expect } from '@playwright/test';

test.describe('grupo paralelo', () => {
  test.describe.configure({ mode: 'parallel' });

  test('paralelo A', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Laboratorio Playwright' })).toBeVisible();
  });

  test('paralelo B', async ({ page }) => {
    await page.goto('/todos');
    await expect(page.getByRole('heading', { name: 'Todos' })).toBeVisible();
  });
});

test.describe('grupo serial', () => {
  test.describe.configure({ mode: 'serial' });

  test('serial 1', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  test('serial 2', async ({ page }) => {
    await page.goto('/exports');
    await expect(page.getByText('Completado')).toBeVisible();
  });
});
