# HANDOFF · Sitio Horcones RC

> Documento de traspaso para continuar en un hilo nuevo sin arrastrar todo el historial.
> Lee este archivo antes de modificar código.

## 1. Contexto

Proyecto: **Horcones RC**.
Rama: `diseno/dashboard-revision`.
No fusionar a `main`.

Hay dos productos:

1. PWA interna de gestión del club, ya validada para Entrega 1.
2. Sitio público del club, en construcción.

Este handoff cubre el **sitio público**, ubicado en:

```
C:\000 - aaa\app_horcones\site
```

## 2. Estado actual

- Astro 5, sitio estático.
- Sin VPS ni despliegue.
- Preview local en:
  ```
  http://127.0.0.1:4321/
  ```
- Servidor de desarrollo activo.
- `astro.config.mjs` tiene el Dev Toolbar desactivado.
- `npm run build` pasa correctamente.
- No hay suite de tests del sitio; se valida con Playwright y revisión visual.
- Capturas de evidencia en `artifacts/` (no commitear).

Último commit:

```
b5db29d fix(site): restaurar CTA calendario y fondo auspiciadores
```

## 3. Secciones de la Home

Orden actual:

1. Hero
2. Próximo partido + 2 próximos partidos + tabla reducida
3. Últimas noticias
4. Equipos + jugadores destacados
5. Videos
6. Tienda
7. Súmate / Auspicios
8. Auspiciadores
9. Footer

### Hero

- Header de 3 capas.
- Título en 3 líneas.
- Fondo fotográfico de referencia.
- Dots solamente; sin botón de pausa.
- Autoplay cada 4,5 s.
- El autoplay se detiene al interactuar con dots, swipe o teclado.
- Respeta `prefers-reduced-motion`.
- CTAs transparentes; “Tickets” y “Ver calendario” con borde blanco.
- Si el usuario tiene `reduce motion: true`, no hay animación.

### Próximo partido

- Tarjeta vertical oscura para el partido promocionado.
- Dos tarjetas claras, con grano, estructura distinta y `border-radius: 25px`.
- Las tarjetas claras llevan línea roja abajo.
- Solo dos próximos partidos.
- Tabla del Home: posiciones 3, 4 y 5.
- Tabla completa en `/partidos`.

### Resto

- Noticias: nota grande + 2 secundarias.
- Equipos: plantel + 5 jugadores destacados.
- Videos: 1 grande + 6 secundarios.
- Tienda: 3 camisetas SVG transparentes.
- Súmate/Auspicios: dos tarjetas.
- Auspiciadores: 6 placeholders.
- Footer: contacto por correo.

## 4. Páginas existentes

Reales:

```
/
/tienda
/partidos
```

Stubs dinámicos:

```
/club
/equipos
/eventos
/noticias
/comunidad
/videos
/auspicios
/sumate
```

## 5. Sistema visual

Fuentes:

```
Inter Tight 900   → títulos
Inter Tight 600   → navegación y botones
Antonio           → kickers, fechas y números
Roboto Condensed  → cuerpo
```

No usar Integral CF ni F37 Judge: se eliminaron del sitio por licencias.

Colores principales:

```
--red:        #cf1739
--red-bright: #f6264d
--red-dark:   #a80f2b
--red-deep:   #8d0b24
--separator:  #b51f3b
--ink:        #111318
--paper:      #fefdfc
--white:      #ffffff
```

Cambios recientes:

- `#f4f1eb` fue reemplazado por `#fefdfc` en todo el sitio.
- El fondo de Auspiciadores también usa `#fefdfc`.
- No quedan ocurrencias de `#f4f1eb` en el sitio.

## 6. Archivos clave

```
site/src/pages/index.astro
site/src/pages/tienda.astro
site/src/pages/partidos.astro
site/src/pages/[seccion].astro

site/src/components/Header.astro
site/src/components/Hero.astro
site/src/components/MatchCenter.astro
site/src/components/NewsSection.astro
site/src/components/TeamsSection.astro
site/src/components/VideosSection.astro
site/src/components/ShopSection.astro
site/src/components/JoinSection.astro
site/src/components/PartnersSection.astro
site/src/components/Footer.astro

site/src/data/hero.ts
site/src/data/match.ts
site/src/data/products.ts

site/src/styles/global.css
site/public/images/
site/public/fonts/
```

`FixtureExtension.astro` ya no se usa; puede eliminarse en una limpieza posterior.

## 7. Pendientes priorizados

### P0 · Antes de publicar

1. **Footer**
   - Enlazar Partidos, Comunidad, Videos, Súmate y Auspicios.
   - Convertir Privacidad, Términos y Devoluciones en enlaces reales o quitarlos.
   - Hacer el logo clicable al inicio.
   - Añadir redes sociales solo cuando existan URLs oficiales.

2. **Assets reales**
   - Reemplazar fotos de jugadores de Wikimedia por fotos propias autorizadas.
   - Reemplazar nombres `Jugador 01–05`.
   - Reemplazar auspiciadores placeholder por logos reales.
   - Reemplazar imágenes de noticias/hero por fotos propias.
   - Vectorizar el escudo; hoy es PNG de baja resolución.

3. **Contenido**
   - Confirmar tabla ARUMET y fecha de actualización.
   - Confirmar precios y tallas de tienda.
   - Confirmar fixture real.
   - Completar páginas `/sumate`, `/auspicios` y `/videos`.

### P1 · Calidad

1. Consolidar tokens de rojo y negros.
2. Añadir estilos `:focus-visible`.
3. Revisar contraste de metadatos pequeños.
4. Mejorar affordance de tabla en móvil.
5. Limpiar CSS y componentes sin uso (`FixtureExtension`).

### P2 · Producto

1. CMS Directus cuando exista infraestructura.
2. Comercio real y feature flags.
3. Analítica y KPIs.
4. Migración de dominio y PWA.

## 8. Reglas que no se deben romper

- No contratar VPS antes de aprobación de Entrega 1.
- Presupuesto operativo máximo: **USD 20/mes**.
- No hay checkout falso.
- Contacto solo por correo; no formularios.
- No incluir acceso a la PWA en el sitio público.
- No publicar fotos individuales de menores.
- No usar fuentes sin licencia.
- No inventar jugadores, auspiciadores ni resultados.
- No fusionar a `main`.
- No commitear `artifacts/`.
- No leer ni imprimir `.env`, claves o datos reales.

## 9. Cómo levantar el sitio

```powershell
cd "C:\000 - aaa\app_horcones\site"
npm run dev -- --host 127.0.0.1
```

Abrir:

```
http://127.0.0.1:4321/
```

Si el puerto está ocupado, Astro usará otro y lo mostrará en consola.

Build:

```powershell
npm run build
```

## 10. Prompt para el nuevo hilo

Copiar y pegar:

```text
Lee primero C:\000 - aaa\app_horcones\site\HANDOFF.md y continúa desde ahí.

Trabaja en la rama diseno/dashboard-revision. No fusiones a main.
Una tarea por sesión. Antes de modificar, muestra un plan breve.

Siguiente tarea: completar el footer del sitio y consolidar los tokens
de color, sin cambiar el diseño aprobado de la Home.

Reglas:
- No VPS ni deploy todavía.
- No checkout falso ni formularios.
- No fotos de menores.
- No fuentes sin licencia.
- No commitear artifacts/.
- Validar con build y Playwright.
- Entregar estado LISTA PARA VERIFICAR con evidencia.
```

## 11. Último estado conocido

- Build: OK.
- Dev server: activo en `4321`.
- Home: estable y aprobada visualmente.
- Footer: pendiente de completar.
- Paleta: pendiente de consolidación.
- Páginas internas: pendientes.
- Contenido: placeholders en varios puntos.

Si algo no coincide con el código, el código manda.
