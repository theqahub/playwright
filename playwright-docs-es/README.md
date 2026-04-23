# Playwright Docs en Espanol (Guia de estudio + laboratorio ejecutable)

Este directorio ahora contiene dos cosas:
1. Material teorico en espanol (README por apartado).
2. Laboratorio de tests ejecutables para grabar la serie sin preparar escenarios extra.

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

# Solo un apartado (ejemplo)
npx playwright test 06-emulation

# Depuracion paso a paso
npm run test:debug
```

## Matriz de proyectos (opcional)

Por defecto se ejecuta en `chromium` para que sea rapido y estable durante grabacion.

Si quieres matriz completa:

```bash
npm run test:projects
```

Esto activa `firefox`, `webkit` y `mobile-chrome`.

## Sharding (opcional CI/demo)

```bash
npm run test:shard:1
npm run test:shard:2
```

## Estructura tecnica del laboratorio

- `playwright.config.ts`: configuracion central (reporters, proyectos, retries, webServer, global setup/teardown).
- `support/dev-server.js`: app local minima para evitar dependencias externas.
- `support/auth.setup.ts`: genera `storageState` para ejemplos de auth.
- `support/fixtures.ts`: fixture reutilizable en espanol para tests de ejemplo.

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

## Ruta recomendada de estudio para videos

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

## Fuentes oficiales

Basado en `https://playwright.dev/docs` (18 apartados de Playwright Test).
