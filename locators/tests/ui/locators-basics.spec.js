const { test, expect } = require('@playwright/test');

test.describe('Playwright Locators básicos', () => {
  test('Usando distintos tipos de localizadores', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    // getByPlaceholder
    const input = page.getByPlaceholder('What needs to be done?');
    await input.fill('Aprender Playwright');
    await page.keyboard.press('Enter');

    // getByText
    await expect(page.getByText('Aprender Playwright')).toBeVisible();

    // getByRole
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'All' }).click();

    // locator chaining
    const list = page.locator('.todo-list');
    const firstItem = list.locator('li').first();
    await expect(firstItem).toContainText('Aprender Playwright');
  });
});
