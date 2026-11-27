# Horcones · Sitio público

Sitio estático Astro del club Horcones RC.

## Desarrollo

```powershell
npm ci
npm run dev
```

Build:

```powershell
npm run build
npm run preview
```

Salida:

```text
dist/
```

## Ramas

```text
main      → producción       horconesrc.cl
staging   → revisión cliente demo.horconesrc.cl
feat/*    → preview Cloudflare
fix/*     → preview Cloudflare
```

Nadie trabaja directamente sobre `main`.

## Flujo

```text
feat/* → PR a staging → revisión → PR a main → producción
```

## Cloudflare Pages

Producción:

```text
Production branch: main
Build command:     npm ci && npm run build
Output directory:  dist
Node:              20
```

Staging:

```text
Production branch: staging
Build command:     npm ci && npm run build
Output directory:  dist
Node:              20
```

Ver `docs/DEPLOY.md`.

## Alcance

Incluye:

- Home;
- partidos;
- tienda;
- páginas institucionales;
- productos;
- imágenes, iconos y navegación.

No incluye:

- backend;
- base de datos;
- pagos;
- carrito;
- creación de productos;
- autenticación.

## Repositorio relacionado

La aplicación interna y el backend viven en `app_horcones`.
