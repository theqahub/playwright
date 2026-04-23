// filepath: 01-test-agents/generated/persistencia.spec.ts
// spec: 01-test-agents/test-plan.md
// seed: 01-test-agents/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Gestión de Tareas', () => {
  test('Verificar comportamiento tras recarga [PRIORIDAD: BAJA] [RIESGO: La aplicación real sí persiste datos en localStorage]', async ({ page }) => {
    // 1. Navegar a https://demo.playwright.dev/todomvc/#/, agregar una tarea de prueba, y recargar la página
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    const input = page.getByPlaceholder('What needs to be done?');
    
    await input.fill('Tarea persistencia');
    await input.press('Enter');
    await expect(page.locator('ul li').filter({ hasText: 'Tarea persistencia' })).toBeVisible();

    // Recargar la página
    await page.reload();

    // 2. Verificar que las tareas persisten después de la recarga
    // La aplicación real de Playwright usa localStorage para persistencia
    await expect(page.locator('ul li').filter({ hasText: 'Tarea persistencia' })).toBeVisible();

    // 3. Verificar que el campo de texto está visible después de la recarga
    await expect(input).toBeVisible();
  });
});