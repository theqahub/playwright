// filepath: 01-test-agents/generated/ux-basicos.spec.ts
// spec: 01-test-agents/test-plan.md
// seed: 01-test-agents/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('UX y Accesibilidad', () => {
  test('Casos de UX básicos [PRIORIDAD: MEDIA] [RIESGO: Importante para accesibilidad y experiencia de usuario]', async ({ page }) => {
    // 1. Navegar a https://demo.playwright.dev/todomvc/#/ y verificar que el campo de texto es visible
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    const input = page.getByPlaceholder('What needs to be done?');
    await expect(input).toBeVisible();

    // 2. Verificar que el campo de texto está habilitado
    await expect(input).toBeEnabled();

    // 3. Verificar que el heading 'todos' está presente en la página
    await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
  });
});