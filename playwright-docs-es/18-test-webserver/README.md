# 18 - Web Server

## Objetivo
Levantar automaticamente tu app antes de tests y apagarla al terminar.

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

## Campos importantes
- `command`: comando para levantar app.
- `url`: endpoint de salud esperado.
- `reuseExistingServer`: reutiliza servidor local.
- `timeout`: tiempo maximo para esperar arranque.

## Buenas practicas
- Usar endpoint fiable de readiness.
- Aumentar timeout solo si el build lo requiere.
- Evitar puertos aleatorios no controlados.

## Checklist
- [ ] Tests esperan a servidor listo.
- [ ] Config local y CI coherente.
