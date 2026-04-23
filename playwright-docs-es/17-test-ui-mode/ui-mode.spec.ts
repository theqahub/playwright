import { test, expect } from '@playwright/test';

test('ideal para depurar en UI mode', async ({ page }) => {
  await page.goto('/todos');
  await page.getByLabel('Nueva tarea').fill('probar UI mode');
  await page.getByRole('button', { name: 'Agregar' }).click();
  await expect(page.getByText('probar UI mode')).toBeVisible();
});
