# Playwright Docs en Espanol (Guia de estudio + laboratorio ejecutable)

Este directorio combina teoria en espanol y ejemplos ejecutables inspirados en la documentacion oficial de Playwright.

## Aplicacion base del laboratorio

Todo el laboratorio usa `https://the-internet.herokuapp.com/` como aplicacion de referencia.

La razon del cambio es simple:
- es una web publica, conocida y estable para practicar automatizacion,
- evita mantener una app local artificial solo para las demos,
- tiene paginas muy utiles para mostrar conceptos como login, dropdowns, checkboxes, dynamic loading y status codes,
- hace que todas las pildoras trabajen sobre un mismo AUT reconocible.

## Inicio rapido

```bash
cd playwright-docs-es
npm install
npx playwright install
npm run test
```

## Ejecucion para la serie

```bash
# Interfaz grafica (UI mode)
npm run test:ui

# Terminal normal
npm run test

# Solo un apartado
npx playwright test 06-emulation

# Depuracion paso a paso
npm run test:debug

# Abrir codegen contra la web de referencia
npm run pw:codegen
```

## Matriz de proyectos

Por defecto se ejecuta en `chromium` y `firefox`, para que los ejemplos condicionales por navegador tengan sentido visual sin hacer la suite demasiado lenta.

Si quieres ampliar cobertura:

```bash
npm run test:projects
```

Esto activa ademas `webkit` y `mobile-chrome`.

## Estructura tecnica del laboratorio

- `playwright.config.ts`: configuracion central del runner.
- `support/auth.setup.ts`: login en `the-internet` y generacion de `storageState`.
- `support/fixtures.ts`: fixtures compartidas sobre la misma web.
- `support/global-setup.ts` y `support/global-teardown.ts`: hooks globales del laboratorio.

## Mapa de apartados y archivos ejecutables

- `01-test-agents/seed.spec.ts`
- `02-test-annotations/annotations.spec.ts`
- `03-test-cli/cli-smoke.spec.ts`
- `04-test-configuration/configuration.spec.ts`
- `05-test-use-options/use-options.spec.ts`
- `06-emulation/emulation.spec.ts`
- `07-test-fixtures/fixtures.spec.ts`
- `08-test-global-setup-teardown/global-setup-teardown.spec.ts`
- `09-test-parallel/parallel.spec.ts`
- `10-test-parameterize/parameterize.spec.ts`
- `11-test-projects/projects.spec.ts`
- `12-test-reporters/reporters.spec.ts`
- `13-test-retries/retries.spec.ts`
- `14-test-sharding/sharding.spec.ts`
- `15-test-timeouts/timeouts.spec.ts`
- `16-test-typescript/typescript.spec.ts`
- `17-test-ui-mode/ui-mode.spec.ts`
- `18-test-webserver/webserver.spec.ts`

## Nota sobre `webServer`

Este repositorio ya no levanta una app propia. La pildora `18-test-webserver` se mantiene porque el concepto sigue siendo importante, pero el ejemplo ejecutable del repo valida disponibilidad de una web remota y el README del apartado explica como seria la configuracion cuando tu app si necesite arranque local.

## Ruta recomendada de estudio

1. `04-test-configuration`
2. `05-test-use-options`
3. `03-test-cli`
4. `07-test-fixtures`
5. `09-test-parallel`
6. `13-test-retries`
7. `15-test-timeouts`
8. `12-test-reporters`
9. `11-test-projects`
10. `14-test-sharding`
11. `08-test-global-setup-teardown`
12. `18-test-webserver`
13. `10-test-parameterize`
14. `02-test-annotations`
15. `06-emulation`
16. `16-test-typescript`
17. `17-test-ui-mode`
18. `01-test-agents`

## Fuente

Basado en `https://playwright.dev/docs` y aterrizado sobre `https://the-internet.herokuapp.com/` para tener ejemplos visuales y ejecutables coherentes entre si.
