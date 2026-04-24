// filepath: 01-test-agents/generated/crear-varias-tareas.spec.ts
// spec: 01-test-agents/test-plan.md
// seed: 01-test-agents/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Add/Remove Elements', () => {
  test('Crear varios elementos [PRIORIDAD: ALTA] [RIESGO: Verifica repeticiones de la accion principal]', async ({ page }) => {
    await page.goto('/add_remove_elements/');
    const addButton = page.getByRole('button', { name: 'Add Element' });

    await addButton.click();
    await addButton.click();
    await addButton.click();

    const deleteButtons = page.getByRole('button', { name: 'Delete' });
    await expect(deleteButtons).toHaveCount(3);
    await expect(deleteButtons.first()).toBeVisible();
    await expect(deleteButtons.last()).toBeVisible();
  });
});
