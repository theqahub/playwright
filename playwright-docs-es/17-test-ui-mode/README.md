# 17 - UI Mode

## Que aporta
UI Mode ofrece interfaz visual para correr, filtrar y depurar tests rapidamente.

## Comando
```bash
npx playwright test --ui
```

## Casos de uso
- Ejecutar un solo test mientras editas.
- Repetir flujo tras cada ajuste.
- Abrir trace/screenshot desde interfaz.

## Flujo recomendado de debugging
1. Ejecutar test fallido en UI mode.
2. Revisar pasos, logs y trace.
3. Ajustar selector/espera.
4. Re-ejecutar al instante.

## Buenas practicas
- Usarlo para desarrollo local.
- Mantener CI con CLI no interactiva.

## Checklist
- [ ] Equipo conoce UI mode para debug rapido.
- [ ] Se combina con traces para analisis profundo.
