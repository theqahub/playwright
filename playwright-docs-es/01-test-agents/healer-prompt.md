# Prompt sugerido para Healer Agent

El fichero `01-test-agents/generated/crear-varias-tareas.spec.ts` esta fallando porque el agente ha usado un selector demasiado amplio para contar botones `Delete`.

Corrige el test para:
- limitarse a los botones `Delete` reales de la pagina `Add/Remove Elements`,
- evitar selectores globales ambiguos,
- usar locators robustos y faciles de explicar en una demo.
