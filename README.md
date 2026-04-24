![Licencia](https://img.shields.io/badge/licencia-TheQAHub-green)
![Playwright](https://img.shields.io/badge/playwright-v1.55.1-blue)
![Versión](https://img.shields.io/badge/version-Octubre_2025-yellowgreen)

# Playwright - Curso desde cero | TheQAHub

Este repositorio contiene los ejemplos y materiales del curso de Playwright del canal [TheQAHub](https://www.youtube.com/@theqahub_es).

## Estructura

```bash
/locators/
/playwright-docs-es/
/primerVideo/
README.md
```

## Foco actual de `playwright-docs-es`

El laboratorio `playwright-docs-es` usa ahora `https://the-internet.herokuapp.com/` como aplicacion base para todas las pildoras.

### Por que usamos esta web

- Es una demo publica y ampliamente conocida en testing.
- Evita mantener una app local artificial para el curso.
- Tiene pantallas muy utiles para enseñar login, dropdowns, checkboxes, dynamic loading, geolocation y status codes.
- Hace que todas las lecciones compartan el mismo contexto funcional.

### Archivos principales de `playwright-docs-es`

- `playwright.config.ts`
- `package.json`
- `support/auth.setup.ts`
- `support/fixtures.ts`
- `support/global-setup.ts`
- `support/global-teardown.ts`
- carpetas `01-test-agents` a `18-test-webserver`

Ya no se usa una app local propia en `playwright-docs-es`; la antigua demo interna se ha retirado para simplificar el laboratorio.

## Ejecutar `playwright-docs-es`

```bash
cd playwright-docs-es
npm install
npx playwright install
npx playwright test
npx playwright test --ui
```

## Ejecutar una carpeta concreta

```bash
cd playwright-docs-es
npx playwright test 02-test-annotations
npx playwright test 18-test-webserver
```

## Que aprenderas

- Configuracion del runner.
- CLI, reporters y UI mode.
- Fixtures, setup, projects y retries.
- Timeouts, sharding, paralelismo y TypeScript.
- Automatizacion real sobre una web publica comun a todo el curso.

## Licencia

MIT.

## Autor

Creado por Diego - [TheQAHub](https://www.theqahub.es/)
