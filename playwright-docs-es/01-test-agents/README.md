# 01 - Test Agents

## Que es
Playwright incorpora agentes para acelerar el ciclo de testing asistido por IA:
- `planner`: explora y crea un plan de pruebas en Markdown.
- `generator`: convierte el plan en tests ejecutables.
- `healer`: repara tests fallidos cuando es posible.

## Flujo recomendado
1. Preparar un `seed test` con fixtures reales del proyecto.
2. Generar plan con `planner`.
3. Generar specs con `generator`.
4. Ejecutar y ajustar con `healer`.

## Comandos base
```bash
# Desde la raiz del laboratorio, no desde /PLAYWRIGHT
cd playwright-docs-es

# Inicializa definiciones de agentes para tu loop
npx playwright init-agents --loop=vscode
```

Si ya estas dentro de `playwright-docs-es/01-test-agents`, sube un nivel antes:

```bash
cd ..
npx playwright init-agents --loop=vscode
```

## Ejemplo de seed test (comentado)
```ts
import { test, expect } from '@playwright/test';

test('seed', async ({ page }) => {
  // Punto de entrada estable para el agente
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Verificacion minima de salud de la app
  await expect(page.getByRole('textbox')).toBeVisible();
});
```

## Buenas practicas
- Mantener el `seed` pequeno y estable.
- Versionar los planes en `specs/` para auditoria.
- Regenerar definiciones de agentes tras upgrades de Playwright.

## Errores comunes
- Pedir al generador que cree tests sin contexto de dominio.
- No revisar manualmente los asserts propuestos por IA.

## Checklist
- [ ] Existe `seed.spec` utilizable.
- [ ] Plan Markdown validado por humano.
- [ ] Tests generados pasan o tienen plan de correccion.
