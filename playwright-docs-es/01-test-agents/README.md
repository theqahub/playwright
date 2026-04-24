# 01 - Test Agents

## Que es
Playwright incorpora agentes para acelerar el ciclo de testing asistido por IA:
- `planner`: explora y crea un plan de pruebas en Markdown.
- `generator`: convierte el plan en tests ejecutables.
- `healer`: repara tests fallidos cuando es posible.

## Contexto de este laboratorio

En esta serie usamos `https://the-internet.herokuapp.com/` como AUT compartida.

Para agentes, el seed y el plan se apoyan en la pagina `Add/Remove Elements`, porque es una pantalla pequena, muy estable y perfecta para enseñar exploracion, generacion y healing de tests.

## Flujo recomendado
1. Preparar un `seed test` con un flujo pequeno y robusto.
2. Generar plan con `planner`.
3. Generar specs con `generator`.
4. Ejecutar y ajustar con `healer`.

## Comandos base
```bash
cd playwright-docs-es
npx playwright init-agents --loop=vscode
```

## Seed de ejemplo
```ts
import { test, expect } from '@playwright/test';

test('seed', async ({ page }) => {
  await page.goto('/add_remove_elements/');
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
});
```

## Buenas practicas
- Mantener el `seed` pequeno y estable.
- Dar a los agentes una pagina con poco ruido.
- Revisar manualmente los asserts sugeridos por IA.

## Checklist
- [ ] Existe `seed.spec.ts` reutilizable.
- [ ] El plan en Markdown refleja el dominio real.
- [ ] Los tests generados siguen usando `the-internet.herokuapp.com`.
