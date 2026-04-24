// filepath: 01-test-agents/generated/persistencia.spec.ts
// spec: 01-test-agents/test-plan.md
// seed: 01-test-agents/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Add/Remove Elements', () => {
  test('Verificar comportamiento tras recarga [PRIORIDAD: BAJA] [RIESGO: La demo no persiste estado entre recargas]', async ({ page }) => {
    await page.goto('/add_remove_elements/');
    await page.getByRole('button', { name: 'Add Element' }).click();
    await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(1);

    await page.reload();
    await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Add Element' })).toBeVisible();
  });
});
