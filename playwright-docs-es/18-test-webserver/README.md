# 18 - Web Server

## Objetivo
Levantar automaticamente tu app antes de los tests y apagarla al terminar.

## Importante en este laboratorio

La suite de `playwright-docs-es` ya no arranca una app propia porque toda la serie usa `https://the-internet.herokuapp.com/` como AUT comun. Aun asi, la caracteristica `webServer` sigue siendo clave cuando tu proyecto necesita iniciar frontend o backend antes de correr Playwright.

## Configuracion ejemplo
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://127.0.0.1:4173',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
```

## Como encaja aqui

En esta serie el ejemplo ejecutable del apartado valida disponibilidad de una web remota. Si quisieras volver a una app local, este seria el mecanismo correcto para integrarla con Playwright sin arrancarla a mano.
