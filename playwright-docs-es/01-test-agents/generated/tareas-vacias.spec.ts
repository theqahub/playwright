// filepath: 01-test-agents/generated/tareas-vacias.spec.ts
// spec: 01-test-agents/test-plan.md
// seed: 01-test-agents/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Add/Remove Elements', () => {
  test('Estado inicial sin elementos [PRIORIDAD: MEDIA] [RIESGO: Valida que la pagina empieza limpia]', async ({ page }) => {
    await page.goto('/add_remove_elements/');
    await expect(page.getByRole('button', { name: 'Add Element' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(0);
  });
});
