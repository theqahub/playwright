import { test, expect } from '@playwright/test';

// Seed test pensado para usar con agentes (planner/generator/healer).
test('seed: flujo base de todos', async ({ page }) => {
  await page.goto('/todos');
  await page.getByLabel('Nueva tarea').fill('grabar episodio de Playwright');
  await page.getByRole('button', { name: 'Agregar' }).click();
  await expect(page.getByText('grabar episodio de Playwright')).toBeVisible();
});
