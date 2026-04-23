# Plan de Pruebas - TodoMVC

## Application Overview

Plan de pruebas para la mini app de tareas existente en https://demo.playwright.dev/todomvc/#/. La aplicación permite crear, visualizar y gestionar tareas pendientes.

## Test Scenarios

### 1. Gestión de Tareas

**Seed:** `01-test-agents/seed.spec.ts`

#### 1.1. Crear una tarea [PRIORIDAD: ALTA] [RIESGO: Funcionalidad crítica - si falla, no se pueden crear tareas]

**File:** `01-test-agents/generated/crear-tarea.spec.ts`

**Steps:**
  1. Navegar a http://127.0.0.1:3100/todos y verificar que el campo de texto 'Nueva tarea' y el botón 'Agregar' son visibles y accesibles
    - expect: El campo de texto está visible y habilitado
    - expect: El botón 'Agregar' está visible y habilitado
  2. Escribir 'Comprar leche' en el campo de texto, hacer clic en el botón 'Agregar' o presionar Enter, y verificar que la tarea aparece en la lista
    - expect: La tarea 'Comprar leche' aparece en la lista de tareas
  3. Verificar que el campo de texto está vacío después de agregar la tarea
    - expect: El campo de texto se limpia después de agregar la tarea

#### 1.2. Crear varias tareas [PRIORIDAD: ALTA] [RIESGO: Verifica que el sistema maneja múltiples tareas correctamente]

**File:** `01-test-agents/generated/crear-varias-tareas.spec.ts`

**Steps:**
  1. Agregar tres tareas ('Tarea uno', 'Tarea dos', 'Tarea tres') y verificar que las 3 aparecen en la lista
    - expect: Todas las tareas aparecen en la lista
  2. Verificar que 'Tarea uno' aparece primero y 'Tarea tres' aparece última
    - expect: Las tareas mantienen su orden de creación

#### 1.3. Validar que no agrega tareas vacías [PRIORIDAD: MEDIA] [RIESGO: Validación importante para evitar datos corruptos]

**File:** `01-test-agents/generated/tareas-vacias.spec.ts`

**Steps:**
  1. Limpiar el campo de texto, intentar agregar una tarea vacía (solo espacios), y verificar que la lista de tareas no cambia
    - expect: No se agrega ninguna tarea
  2. Verificar que el campo de texto está vacío después del intento
    - expect: El campo de texto permanece vacío
  3. Verificar que no hay mensajes de error visibles
    - expect: No se muestra mensaje de error

#### 1.4. Verificar comportamiento tras recarga [PRIORIDAD: BAJA] [RIESGO: La aplicación NO persiste datos - comportamiento esperado]

**File:** `01-test-agents/generated/persistencia.spec.ts`

**Steps:**
  1. Navegar a http://127.0.0.1:3100/todos, agregar una tarea de prueba, y recargar la página
    - expect: La página carga correctamente
  2. Verificar que las tareas agregadas siguen visibles. NOTA: Las tareas NO persisten tras recarga (sin localStorage)
    - expect: Las tareas persisten después de la recarga
  3. Verificar que el campo de texto está visible y habilitado después de la recarga
    - expect: El estado de la aplicación es correcto

### 2. UX y Accesibilidad

**Seed:** `01-test-agents/seed.spec.ts`

#### 2.1. Casos de UX básicos [PRIORIDAD: MEDIA] [RIESGO: Importante para accesibilidad y experiencia de usuario]

**File:** `01-test-agents/generated/ux-basicos.spec.ts`

**Steps:**
  1. Navegar a http://127.0.0.1:3100/todos y verificar que el campo de texto 'Nueva tarea' tiene offsetParent no nulo
    - expect: El campo de texto es visible
  2. Verificar que el campo de texto no está deshabilitado (disabled: false)
    - expect: El campo de texto está habilitado
  3. Verificar que el botón existe, es visible y no está deshabilitado
    - expect: El botón 'Agregar' es accesible
  4. Verificar que el heading 'Todos' está presente en la página
    - expect: El título 'Todos' es visible
