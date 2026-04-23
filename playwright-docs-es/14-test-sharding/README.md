# 14 - Sharding

## Definicion
Sharding divide la suite en partes para ejecutarlas en paralelo en distintas maquinas de CI.

## Uso desde CLI
```bash
# Shard 1 de 3
npx playwright test --shard=1/3

# Shard 2 de 3
npx playwright test --shard=2/3
```

## Cuadro mental
- `workers`: paralelismo dentro de una maquina.
- `shard`: paralelismo entre maquinas.

## Estrategia de CI
1. Lanzar N jobs con shard distinto.
2. Guardar artefactos de cada job.
3. Fusionar resultados/reportes al final.

## Buenas practicas
- Mantener tests independientes.
- Balancear duracion entre shards.
- Combinar con reporter `blob` cuando convenga.

## Checklist
- [ ] Pipeline reparte shards correctamente.
- [ ] Hay merge de resultados multi-job.
