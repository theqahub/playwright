# 12 - Reporters

## Objetivo
Los reporters transforman resultados de ejecucion en salidas utiles para local y CI.

## Reporters comunes
- `list` (legible en consola)
- `dot` (compacto)
- `html` (explorable)
- `json` (integraciones)
- `junit` (CI enterprise)
- `blob` (merge de shards)

## Configuracion ejemplo
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],
});
```

## Custom reporter (idea)
Puedes crear uno propio para enviar metricas a Slack, DataDog o dashboard interno.

## Buenas practicas
- En local: `list` + `html`.
- En CI: `dot/list` + `junit` + artefactos trace/video.

## Checklist
- [ ] CI publica reporte interpretable.
- [ ] Fallos incluyen artefactos para debug.
