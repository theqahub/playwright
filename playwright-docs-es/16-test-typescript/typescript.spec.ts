import { test, expect, type Page } from '@playwright/test';

async function abrirYValidar(page: Page, path: string, title: RegExp) {
  await page.goto(path);
  await expect(page).toHaveTitle(title);
}

test('helper tipado en TypeScript', async ({ page }) => {
  await abrirYValidar(page, '/', /Playwright Docs ES/);
});
