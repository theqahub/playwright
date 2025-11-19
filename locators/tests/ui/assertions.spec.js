const { test, expect } = require('@playwright/test');

test.describe('Assertions útiles en Playwright', () => {
  test('Assertions sobre elementos y página', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    await expect(page).toHaveTitle(/TodoMVC/);
    await expect(page).toHaveURL(/todomvc/);

    const input = page.getByPlaceholder('What needs to be done?');
    await input.fill('Nueva tarea');
    await page.keyboard.press('Enter');

    const item = page.getByText('Nueva tarea');
    await expect(item).toBeVisible();
    await expect(item).toContainText('tarea');

    const count = page.locator('.todo-count');
    await expect(count).toHaveText(/1 item left/);
  });

  test('Assertions avanzadas con timeouts y soft', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const input = page.getByPlaceholder('What needs to be done?');
    await input.fill('Tarea temporal');
    await page.keyboard.press('Enter');

    await expect.soft(page.getByText('Tarea temporal')).toBeVisible();
    await expect(page.locator('.todo-list li')).toHaveCount(1, { timeout: 3000 });
  });
});
