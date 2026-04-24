# Comandos utiles para este apartado

```bash
# Ejecutar solo este tema
npx playwright test 03-test-cli

# Filtrar por titulo
npx playwright test -g "filtro por titulo"

# Debug interactivo
npx playwright test 03-test-cli --debug

# Modo UI
npx playwright test 03-test-cli --ui

# Capitulo de anotaciones en ambos navegadores base
npx playwright test 02-test-annotations/annotations.spec.ts

# Solo Chromium
npx playwright test 02-test-annotations/annotations.spec.ts --project=chromium

# Solo Firefox
npx playwright test 02-test-annotations/annotations.spec.ts --project=firefox
```
