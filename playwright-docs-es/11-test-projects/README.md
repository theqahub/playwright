# 11 - Projects

## Que son
`projects` permite ejecutar la misma suite con diferentes configuraciones:
- navegadores,
- dispositivos,
- entornos,
- estados autenticados.

## Ejemplo multi-browser
```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
```

## Dependencias entre proyectos
Muy util para tener un proyecto `setup` que prepara auth y luego proyectos de prueba que dependen de el.

## Buenas practicas
- Pocos proyectos pero con alto valor.
- Evitar explosion combinatoria innecesaria.

## Checklist
- [ ] Cubre navegadores objetivo reales.
- [ ] Dependencias de setup definidas cuando aplica.
