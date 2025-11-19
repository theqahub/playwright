const { test, expect } = require('@playwright/test');

test.describe('Interacciones reales con Playwright', () => {
  test('Añadir, completar y filtrar tareas', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const input = page.getByPlaceholder('What needs to be done?');
    await input.fill('Tarea 1');
    await page.keyboard.press('Enter');
    await input.fill('Tarea 2');
    await page.keyboard.press('Enter');
    await input.fill('Tarea 3');
    await page.keyboard.press('Enter');

    const items = page.locator('.todo-list li');
    await expect(items).toHaveCount(3);

    // Completar "Tarea 2"
    const tarea2 = items.filter({ hasText: 'Tarea 2' });
    await tarea2.locator('.toggle').check();
    await expect(tarea2).toHaveClass(/completed/);

    // Hover en "Tarea 3" y eliminarla
    const tarea3 = items.filter({ hasText: 'Tarea 3' });
    await tarea3.hover();
    await tarea3.locator('.destroy').click({ force: true });

    await expect(items).toHaveCount(2);
  });
});
