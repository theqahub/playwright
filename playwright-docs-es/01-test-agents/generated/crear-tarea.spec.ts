// filepath: 01-test-agents/generated/crear-tarea.spec.ts
// spec: 01-test-agents/test-plan.md
// seed: 01-test-agents/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Gestión de Tareas', () => {
  test('Crear una tarea [PRIORIDAD: ALTA] [RIESGO: Funcionalidad crítica - si falla, no se pueden crear tareas]', async ({ page }) => {
    // 1. Navegar a https://demo.playwright.dev/todomvc/#/ y verificar que el campo de texto es visible
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    const input = page.getByPlaceholder('What needs to be done?');
    await expect(input).toBeVisible();

    // 2. Escribir 'Comprar leche' en el campo de texto, presionar Enter, y verificar que la tarea aparece en la lista
    await input.fill('Comprar leche');
    await input.press('Enter');
    await expect(page.locator('ul li').filter({ hasText: 'Comprar leche' })).toBeVisible();

    // 3. Verificar que el campo de texto está vacío después de agregar la tarea
    await expect(input).toHaveValue('');
  });
});