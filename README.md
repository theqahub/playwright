![Licencia](https://img.shields.io/badge/licencia-TheQAHub-green)
![Playwright](https://img.shields.io/badge/playwright-v1.55.1-blue)
![Versión](https://img.shields.io/badge/version-Octubre_2025-yellowgreen)

# 🌐 Playwright – Curso desde cero | TheQAHub

Este repositorio contiene todos los archivos, ejemplos y explicaciones usados en los vídeos del canal [TheQAHub](https://www.youtube.com/@theqahub_es) sobre **Playwright**.

Aquí se agrupa todo el material práctico del curso en español, basado en los apartados oficiales de la documentación de Playwright: https://playwright.dev/docs/

---

## 📁 Estructura del Proyecto

```bash
/locators/                  # Ejemplos de selectores, localizadores, UI, pruebas e2e y helpers
/playwright-docs-es/        # Laboratorio completo por apartados oficiales de Playwright Docs
/primerVideo/               # Material histórico y ejemplos iniciales del curso
README.md                   # Guía general del repositorio
```

---

## 📚 Contenido Principal

### `locators/`
- Ejemplos prácticos de **localizadores** y **selectores**.
- Pruebas de **interacción** con la UI y validaciones.
- Estructura de proyecto con `package.json`, `playwright.config.js`, `tests/`, `helpers/test-ids.js` y reportes.
- Diseñado para aprender a identificar los elementos en una aplicación web y automatizar flujos básicos.

### `playwright-docs-es/`
Este es el laboratorio completo del curso, organizado por cada apartado oficial de la documentación de Playwright.

#### Archivos principales en la raíz de `playwright-docs-es/`
- `.gitignore`
- `package.json`
- `package-lock.json`
- `playwright.config.ts`
- `tsconfig.json`
- `README.md`
- `specs/README.md`
- `support/auth.setup.ts`
- `support/dev-server.js`
- `support/fixtures.ts`
- `support/global-setup.ts`
- `support/global-teardown.ts`
- `tests/example.spec.ts`

#### Colección de lecciones y contenidos por carpeta
- `01-test-agents/`
  - `generator-prompt.md`
  - `healer-prompt.md`
  - `planner-prompt.md`
  - `README.md`
  - `seed.spec.ts`
  - `test-plan.md`
  - `generated/crear-tarea.spec.ts`
  - `generated/crear-varias-tareas.spec.ts`
  - `generated/persistencia.spec.ts`
  - `generated/tareas-vacias.spec.ts`
  - `generated/ux-basicos.spec.ts`
- `02-test-annotations/`
  - `annotations.spec.ts`
  - `README.md`
- `03-test-cli/`
  - `cli-smoke.spec.ts`
  - `commands.md`
  - `README.md`
- `04-test-configuration/`
  - `configuration.spec.ts`
  - `README.md`
- `05-test-use-options/`
  - `use-options.spec.ts`
  - `README.md`
- `06-emulation/`
  - `emulation.spec.ts`
  - `README.md`
- `07-test-fixtures/`
  - `fixtures.spec.ts`
  - `README.md`
- `08-test-global-setup-teardown/`
  - `global-setup-teardown.spec.ts`
  - `README.md`
- `09-test-parallel/`
  - `parallel.spec.ts`
  - `README.md`
- `10-test-parameterize/`
  - `parameterize.spec.ts`
  - `README.md`
- `11-test-projects/`
  - `projects.spec.ts`
  - `README.md`
- `12-test-reporters/`
  - `reporters.spec.ts`
  - `README.md`
- `13-test-retries/`
  - `retries.spec.ts`
  - `README.md`
- `14-test-sharding/`
  - `sharding.spec.ts`
  - `README.md`
- `15-test-timeouts/`
  - `timeouts.spec.ts`
  - `README.md`
- `16-test-typescript/`
  - `typescript.spec.ts`
  - `README.md`
- `17-test-ui-mode/`
  - `ui-mode.spec.ts`
  - `README.md`
- `18-test-webserver/`
  - `webserver.spec.ts`
  - `README.md`

#### Archivos adicionales importantes
- `.auth/user.json` — credenciales/configuración de Autenticación de agentes.
- `.codex/` — metadatos locales de Copilot y código generado.
- `.playwright-mcp/` — registros y metadatos de sesiones de Playwright y Copilot.
- `.github/agents/playwright-test-generator.agent.md`
- `.github/agents/playwright-test-healer.agent.md`
- `.github/agents/playwright-test-planner.agent.md`
- `.github/workflows/copilot-setup-steps.yml`
- `.github/workflows/playwright.yml`
- `.vscode/mcp.json`

#### Reportes y resultados
- `playwright-report/index.html`
- `playwright-report/data/*.md`
- `playwright-report/data/*.png`
- `test-results/*` — trazas, capturas y archivos de error generados por la ejecución de las pruebas.

#### Material de apoyo y utilidades de prueba
- `support/dev-server.js` — servidor local para ejemplos de la serie.
- `support/auth.setup.ts` — ejemplo de autenticación y login.
- `support/global-setup.ts` y `support/global-teardown.ts` — setup/teardown global.
- `support/fixtures.ts` — definición de fixtures compartidos.
- `tests/example.spec.ts` — ejemplo básico de prueba Playwright.

Las lecciones cubren:
- `01-test-agents/` — Agentes de prueba y generación de prompts
- `02-test-annotations/` — Anotaciones de prueba y metadatos
- `03-test-cli/` — Uso de la CLI de Playwright
- `04-test-configuration/` — Configuración de Playwright
- `05-test-use-options/` — Uso de opciones `use` en fixtures
- `06-emulation/` — Emulación de dispositivos y viewport
- `07-test-fixtures/` — Fixtures y dependencias de prueba
- `08-test-global-setup-teardown/` — Setup y teardown global
- `09-test-parallel/` — Ejecución en paralelo de tests
- `10-test-parameterize/` — Parametrización de pruebas
- `11-test-projects/` — Proyectos múltiples y configuraciones por entorno
- `12-test-reporters/` — Reporteros y reportes personalizados
- `13-test-retries/` — Reintentos automáticos de pruebas fallidas
- `14-test-sharding/` — Sharding y distribución de tests
- `15-test-timeouts/` — Timeouts de pruebas y estrategias de espera
- `16-test-typescript/` — Uso de TypeScript en Playwright
- `17-test-ui-mode/` — Modo UI interactivo de Playwright
- `18-test-webserver/` — Servidor web integrado y pruebas con backend local

### `primerVideo/`
- Contiene material histórico del curso.
- Ejemplos iniciales y bases conceptuales que sirven como referencia para quién comienza desde cero.

---

## ✅ Cobertura del Curso y Relación con la Documentación Oficial

Este repositorio cubre los principales apartados de la documentación oficial de Playwright:
- **Introducción y configuración**
- **Selectores y localizadores**
- **Acciones de página** (`click`, `fill`, `hover`, etc.)
- **Assertions y expectativas**
- **Fixtures y estados compartidos**
- **Configuración de test runner**
- **Ejecutar tests en paralelo y por proyectos**
- **Reportes, trazas y archivos de resultados**
- **Retries, timeouts y estabilidad de pruebas**
- **Modo UI de Playwright**
- **Emulación de dispositivos y browsers**
- **Servidor web integrado y pruebas e2e completas**

Cada sección del curso se construye con ejemplos reales que complementan la teoría oficial de https://playwright.dev/docs/.

---

## 🚀 Cómo ejecutar los tests

### Ejecutar `locators`

```bash
cd locators
npm install
npx playwright install
npx playwright test
```

### Ejecutar `playwright-docs-es`

```bash
cd playwright-docs-es
npm install
npx playwright install
npx playwright test
npx playwright test --ui
```

### Ejecutar una carpeta específica del laboratorio

```bash
cd playwright-docs-es
npx playwright test 01-test-agents
npx playwright test 12-test-reporters
```

---

## 🧠 Qué aprenderás

- Dominar **Playwright desde cero**.
- Escribir pruebas más **robustas y mantenibles**.
- Aplicar patrones de **fixture**, **setup/teardown**, **retries** y **parallel testing**.
- Usar la interfaz de Playwright `--ui` y configurar reportes profesionales.
- Vincular cada lección con los apartados oficiales de Playwright Docs.

---

## 📝 Archivos clave

- `README.md` principal
- `locators/package.json`
- `locators/playwright.config.js`
- `playwright-docs-es/package.json`
- `playwright-docs-es/playwright.config.ts`
- `playwright-docs-es/tsconfig.json`
- Carpetas `01-test-agents` a `18-test-webserver`
- `playwright-docs-es/support/` y `playwright-docs-es/specs/`

---

## 📌 Recomendaciones

- Sigue las carpetas por orden para aprender de forma progresiva.
- Lee los `README.md` de cada sección del laboratorio para ver notas específicas.
- Usa `npx playwright test --ui` para explorar y depurar pruebas visualmente.

---

## 📚 Licencia

MIT – Libre para usar, compartir y mejorar.  
Si reutilizas este contenido, menciona o enlaza a TheQAHub como fuente.

---

## 💬 Autor

Creado por Diego – [TheQAHub](https://www.theqahub.es/)  
Compartiendo contenido sobre Testing y QA.
