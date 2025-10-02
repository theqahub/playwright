# ![Licencia](https://img.shields.io/badge/licencia-TheQAHub-green)
![Playwright](https://img.shields.io/badge/playwright-v1.55.1-blue)
![Versión](https://img.shields.io/badge/version-Octubre_2025-yellowgreen)

# 🌐 Playwright – Curso desde cero | TheQAHub

Este repositorio contiene todos los archivos y ejemplos utilizados en los vídeos del canal [TheQAHub](https://www.youtube.com/@theqahub_es) sobre **Playwright**, uno de los frameworks de testing end-to-end más potentes y modernos para aplicaciones web.

---

## 📁 Estructura del Proyecto

```bash
/primerVideo/
 ├── node_modules/          # Dependencias instaladas con npm
 ├── playwright-report/     # Reportes HTML generados tras la ejecución
 ├── test-results/          # Archivos temporales y trazas de ejecución
 ├── tests/                 # Carpeta de pruebas
 │   ├── example.spec.js
 │   └── testGrabadoCodegen.spec.js
 ├── package-lock.json
 ├── package.json
 ├── playwright.config.js   # Configuración principal de Playwright
 └── README.md
```

---

## 📌 Contenido de los Ejemplos

- **`example.spec.js`** – Ejemplo inicial de prueba con Playwright Test.  
- **`testGrabadoCodegen.spec.js`** – Prueba generada automáticamente con el recorder de Playwright.  

Cada archivo está explicado en los vídeos del canal, mostrando buenas prácticas de automatización, configuración y reportes.

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
# Ejecutar todos los tests
npx playwright test

# Ejecutar un archivo específico
npx playwright test tests/example.spec.js

# Generar reporte HTML
npx playwright show-report
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