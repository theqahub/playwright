![Licencia](https://img.shields.io/badge/licencia-TheQAHub-green)
![Playwright](https://img.shields.io/badge/playwright-v1.55.1-blue)
![Versión](https://img.shields.io/badge/version-Octubre_2025-yellowgreen)

# 🌐 Playwright – Curso desde cero | TheQAHub

Este repositorio contiene todos los archivos y ejemplos utilizados en los vídeos del canal [TheQAHub](https://www.youtube.com/@theqahub_es) sobre **Playwright**, uno de los frameworks de testing end-to-end más potentes y modernos para aplicaciones web.

---

## 📁 Estructura del Proyecto

```bash
/locators/                  # Ejemplos de localizadores, UI y e2e
/playwright-docs-es/        # Laboratorio por apartados oficiales de Playwright Docs
/primerVideo/               # Material histórico de la serie (no documentado aquí)
/README.md
```

---

## 📌 Contenido de los Ejemplos

- **`locators/`**: ejemplos prácticos de selectores, interacciones y assertions.
- **`playwright-docs-es/`**: contenido estructurado por secciones oficiales (configuración, fixtures, retries, sharding, reporters, UI mode, etc.).
- Incluye ejemplos ejecutables tanto por terminal como en interfaz gráfica de Playwright.

---

## 🎬 Videos del Curso

Cada carpeta y archivo corresponde a una lección del canal [TheQAHub](https://www.youtube.com/@theqahub_es), donde explicamos cómo usar Playwright de forma clara y práctica.  
Suscríbete y activa la campanita 🔔 para no perderte nuevas lecciones.

---

## 🧪 Requisitos

- Tener **Node.js** instalado.
- Instalar Playwright como dependencia de desarrollo:

```bash
npm init playwright@latest
```

---

## 🚀 Cómo ejecutar los tests

Desde la raíz del proyecto:

```bash
# Ejemplo: ejecutar el bloque de locators
cd locators
npm install
npx playwright test

# Ejemplo: ejecutar el laboratorio por apartados docs
cd ../playwright-docs-es
npm install
npx playwright install
npx playwright test
npx playwright test --ui
```

---

## 🎯 Objetivo del Curso

- Aprender Playwright desde cero.  
- Dominar los comandos esenciales de automatización.  
- Escribir pruebas claras, rápidas y mantenibles.  
- Aplicar buenas prácticas en testing frontend.  

---

## 📚 Licencia

MIT – Libre para usar, compartir y mejorar.  
Si reutilizas este contenido, menciona o enlaza a TheQAHub como fuente.

---

## 💬 Autor

Creado por Diego – [TheQAHub](https://www.theqahub.es/)  
Encuéntrame en Instagram, YouTube y más, compartiendo contenido sobre Testing y QA.
