const { test, expect } = require('@playwright/test');

test.describe('E2E Todo App con Playwright', () => {
  test('Flujo completo de gestión de tareas', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const input = page.getByPlaceholder('What needs to be done?');

    // Añadir tareas
    for (const task of ['Tarea 1', 'Tarea 2', 'Tarea 3']) {
      await input.fill(task);
      await page.keyboard.press('Enter');
    }

    const items = page.locator('.todo-list li');
    await expect(items).toHaveCount(3);

    // Completar "Tarea 2"
    const tarea2 = items.filter({ hasText: 'Tarea 2' });
    await tarea2.locator('.toggle').check();
    await expect(tarea2).toHaveClass(/completed/);

    // Verificar contador (2 pendientes)
    const counter = page.locator('.todo-count');
    await expect(counter).toHaveText(/2 items left/i);

    // Filtrar completadas
    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(items).toHaveCount(1);
    await expect(items).toContainText(['Tarea 2']);

    // Borrar completadas
    const clearBtn = page.getByRole('button', { name: 'Clear completed' });
    await clearBtn.click();

    // Volver a All y verificar que quedan 2
    await page.getByRole('link', { name: 'All' }).click();
    await expect(page.locator('.todo-list li')).toHaveCount(2);
  });
});
