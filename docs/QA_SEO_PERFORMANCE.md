# QA, SEO y performance · registro de rebanada

## Estado

- Rama: `diseno/dashboard-revision`
- Commit base: `c5eaf82`
- Commit de esta rebanada: `394c65c`
- Fecha: 2026-11-18
- Alcance: QA técnico, SEO base, 404, sitemap, robots, fuentes y metadatos sociales.
- Sin deploy ni cambios de contenido.

## Cambios realizados

### 1. Un solo H1 en Home

- El hero tenía 5 `<h1>`, uno por slide.
- Se agregó un H1 único y oculto:
  ```
  Horcones RC · Rugby, comunidad y pertenencia
  ```
- Los títulos de los slides pasaron a `<h2>`.
- Se actualizaron los selectores CSS de `.hero h1` a `.hero-slide h2`.

### 2. Metadatos SEO

En `src/layouts/Layout.astro`:

- canonical;
- Open Graph;
- Twitter Card;
- `og:image` 1200 × 630;
- JSON-LD `SportsClub`;
- `noindex` opcional para páginas que no deben indexarse.

### 3. Imagen social

- Archivo: `public/images/og-horcones.jpg`
- Tamaño: 1200 × 630.
- Origen: recorte de `hero-night.jpg`.
- `[VERIFICAR]` reemplazar por una imagen institucional definitiva antes de publicar.

### 4. Página 404

- Archivo: `src/pages/404.astro`.
- Devuelve HTTP 404.
- Tiene `noindex, nofollow`.

### 5. Sitemap y robots

- `src/pages/sitemap.xml.ts`
- `public/robots.txt`
- Dominio usado: `https://horconesrc.cl`.
- Si cambia el dominio, actualizar:
  - `astro.config.mjs`
  - `public/robots.txt`
  - `src/pages/sitemap.xml.ts`

### 6. Fuentes

Se reemplazaron tres TTF de Roboto Condensed por un WOFF2 variable:

```
Antes: 338.380 bytes
Ahora:  51.412 bytes
Reducción: ~85 %
```

- Archivo nuevo: `public/fonts/roboto-condensed-latin.woff2`
- Eliminados:
  - `roboto-condensed-400.ttf`
  - `roboto-condensed-500.ttf`
  - `roboto-condensed-700.ttf`
- Se eliminaron declaraciones `@font-face` duplicadas de Inter Tight y Antonio.

## QA ejecutado

Rutas probadas:

```
/
/tienda
/partidos
/sumate
/auspicios
/club
/equipos
/eventos
/noticias
/comunidad
/videos
/tickets
/privacidad
/terminos
/devoluciones
```

Resultado:

- 15/15 rutas responden `200`.
- 0 enlaces internos roto.
- 0 formularios.
- 0 enlaces vacíos.
- 0 IDs duplicados.
- 0 imágenes sin `alt`.
- 0 errores de consola.
- 1 solo H1 por página.
- Títulos únicos.
- `/404` responde `404`.
- `/sitemap.xml` responde `200` con `application/xml`.
- `/robots.txt` responde `200`.

Evidencia local:

```
artifacts/qa-final.json
```

## Build

```powershell
cd "C:\000 - aaa\app_horcones\site"
npm run build
```

Resultado:

```
16 pages built
Complete!
```

## Rollback

### Recomendado: revertir el commit completo

```powershell
git revert 394c65c
```

Esto crea un commit inverso y conserva la trazabilidad.

### Revertir solo las fuentes

```powershell
git checkout 394c65c^ -- site/public/fonts/roboto-condensed-400.ttf site/public/fonts/roboto-condensed-500.ttf site/public/fonts/roboto-condensed-700.ttf
Remove-Item site/public/fonts/roboto-condensed-latin.woff2
```

Luego restaurar manualmente los `@font-face` de `src/styles/global.css`.

### Revertir solo SEO

```powershell
git checkout 394c65c^ -- site/src/layouts/Layout.astro site/src/components/Hero.astro site/src/styles/global.css
Remove-Item site/src/pages/404.astro
Remove-Item site/src/pages/sitemap.xml.ts
Remove-Item site/public/robots.txt
Remove-Item site/public/images/og-horcones.jpg
```

No usar `git reset --hard` sobre la rama compartida.

## Pendientes

- Reemplazar la imagen OG por una definitiva.
- Revisar el dominio final antes de publicar.
- Optimizar imágenes grandes de hero/noticias a AVIF/WebP.
- Limpiar CSS duplicado del footer.
- Añadir `lastmod` al sitemap si se conecta CMS.
- Completar contenido real de las cáscaras.
- Validar contraste de metadatos pequeños.
- Medir Lighthouse en un entorno de producción.
