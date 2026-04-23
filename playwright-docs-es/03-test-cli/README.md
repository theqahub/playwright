# 03 - Test CLI

## Uso diario
La CLI de Playwright es la forma principal de ejecutar, filtrar y depurar tests.

## Comandos clave
```bash
# Ejecutar toda la suite
npx playwright test

# Ejecutar un archivo
npx playwright test tests/e2e/todo-app.spec.js

# Ejecutar por titulo de test
npx playwright test -g "crear tarea"

# Ejecutar en UI mode
npx playwright test --ui

# Reintentos desde CLI
npx playwright test --retries=2

# Ver trace tras fallo
npx playwright show-trace test-results/.../trace.zip
```

## Filtros utiles
- `--project=chromium`
- `--workers=4`
- `--headed`
- `--debug`

## Patron de trabajo recomendado
1. Ejecuta rapido con filtro (`-g`) durante desarrollo.
2. Ejecuta archivo completo antes de commit.
3. Ejecuta suite multi-proyecto en CI.

## Errores comunes
- Usar demasiados `workers` en entorno inestable.
- Ejecutar sin limpiar estado entre corridas.

## Checklist
- [ ] Conoces al menos 5 flags de uso diario.
- [ ] Tienes alias de CLI para productividad.
