// filepath: 01-test-agents/generated/crear-tarea.spec.ts
// spec: 01-test-agents/test-plan.md
// seed: 01-test-agents/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Add/Remove Elements', () => {
  test('Crear un elemento [PRIORIDAD: ALTA] [RIESGO: Acción principal de la demo]', async ({ page }) => {
    await page.goto('/add_remove_elements/');
    const addButton = page.getByRole('button', { name: 'Add Element' });
    await expect(addButton).toBeVisible();

    await addButton.click();
    await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
  });
});
