// filepath: 01-test-agents/generated/ux-basicos.spec.ts
// spec: 01-test-agents/test-plan.md
// seed: 01-test-agents/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('UX y Accesibilidad', () => {
  test('Casos de UX basicos [PRIORIDAD: MEDIA] [RIESGO: Importante para accesibilidad y feedback visual]', async ({ page }) => {
    await page.goto('/add_remove_elements/');
    const addButton = page.getByRole('button', { name: 'Add Element' });

    await expect(addButton).toBeVisible();
    await expect(addButton).toBeEnabled();
    await expect(page.getByRole('heading', { name: 'Add/Remove Elements' })).toBeVisible();
  });
});
