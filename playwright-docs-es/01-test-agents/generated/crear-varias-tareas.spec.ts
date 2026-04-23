// filepath: 01-test-agents/generated/crear-varias-tareas.spec.ts
// spec: 01-test-agents/test-plan.md
// seed: 01-test-agents/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Gestión de Tareas', () => {
  test('Crear varias tareas [PRIORIDAD: ALTA] [RIESGO: Verifica que el sistema maneja múltiples tareas correctamente]', async ({ page }) => {
    // 1. Agregar tres tareas ('Tarea uno', 'Tarea dos', 'Tarea tres') y verificar que las 3 aparecen en la lista
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    const input = page.getByPlaceholder('What needs to be done?');

    await input.fill('Tarea uno');
    await input.press('Enter');
    await input.fill('Tarea dos');
    await input.press('Enter');
    await input.fill('Tarea tres');
    await input.press('Enter');

    // Verificar que las tareas aparecen en la lista
    await expect(page.locator('.todo-list li').filter({ hasText: 'Tarea uno' })).toBeVisible();
    await expect(page.locator('.todo-list li').filter({ hasText: 'Tarea dos' })).toBeVisible();
    await expect(page.locator('.todo-list li').filter({ hasText: 'Tarea tres' })).toBeVisible();

    // 2. Verificar que 'Tarea uno' aparece primero y 'Tarea tres' aparece última
    const listaTareas = page.locator('.todo-list li');
    await expect(listaTareas.first()).toHaveText('Tarea uno');
    await expect(listaTareas.last()).toHaveText('Tarea tres');
  });
});