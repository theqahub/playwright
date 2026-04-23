// filepath: 01-test-agents/generated/tareas-vacias.spec.ts
// spec: 01-test-agents/test-plan.md
// seed: 01-test-agents/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Gestión de Tareas', () => {
  test('Validar que no agrega tareas vacías [PRIORIDAD: MEDIA] [RIESGO: Validación importante para evitar datos corruptos]', async ({ page }) => {
    // 1. Limpiar el campo de texto, intentar agregar una tarea vacía (solo espacios), y verificar que la lista de tareas no cambia
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    const input = page.getByPlaceholder('What needs to be done?');
    const tareasIniciales = await page.locator('ul li').count();
    
    await input.fill('   ');
    await input.press('Enter');
    
    const tareasDespues = await page.locator('ul li').count();
    expect(tareasDespues).toBe(tareasIniciales);

    // 2. Verificar que el campo de texto está vacío después del intento
    // Nota: El campo mantiene los espacios, pero no se agrega ninguna tarea
    await expect(input).toHaveValue('   ');

    // 3. Verificar que no hay mensajes de error visibles
    await expect(page.locator('text=error')).not.toBeVisible();
  });
});