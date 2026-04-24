# Plan de Pruebas - Add/Remove Elements

## Application Overview

Plan de pruebas para `https://the-internet.herokuapp.com/add_remove_elements/`. La pagina permite crear botones `Delete` de forma dinamica y eliminarlos.

## Test Scenarios

### 1. Gestion basica de elementos

**Seed:** `01-test-agents/seed.spec.ts`

#### 1.1. Crear un elemento [PRIORIDAD: ALTA] [RIESGO: Funcionalidad principal]

**File:** `01-test-agents/generated/crear-tarea.spec.ts`

**Steps:**
1. Navegar a `/add_remove_elements/` y verificar que `Add Element` es visible
2. Hacer click en `Add Element`
3. Verificar que aparece un boton `Delete`

#### 1.2. Crear varios elementos [PRIORIDAD: ALTA] [RIESGO: Repeticion de la accion principal]

**File:** `01-test-agents/generated/crear-varias-tareas.spec.ts`

**Steps:**
1. Pulsar `Add Element` tres veces
2. Verificar que existen tres botones `Delete`

#### 1.3. Estado inicial sin elementos [PRIORIDAD: MEDIA] [RIESGO: Estado base incorrecto]

**File:** `01-test-agents/generated/tareas-vacias.spec.ts`

**Steps:**
1. Navegar a `/add_remove_elements/`
2. Verificar que no existe ningun boton `Delete`

#### 1.4. Comportamiento tras recarga [PRIORIDAD: BAJA] [RIESGO: Aclarar persistencia]

**File:** `01-test-agents/generated/persistencia.spec.ts`

**Steps:**
1. Crear un elemento
2. Recargar la pagina
3. Verificar que el estado vuelve a estar limpio

### 2. UX basica

**Seed:** `01-test-agents/seed.spec.ts`

#### 2.1. Visibilidad y accesibilidad del CTA [PRIORIDAD: MEDIA] [RIESGO: Mala señal de salud de la pagina]

**File:** `01-test-agents/generated/ux-basicos.spec.ts`

**Steps:**
1. Verificar que `Add Element` es visible
2. Verificar que `Add Element` esta habilitado
3. Verificar que el heading `Add/Remove Elements` es visible
