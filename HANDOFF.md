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
6759233 feat(site): footer con logo centrado, RRSS, stubs legales y tokens consolidados
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
- Footer: logo centrado, 3 grupos de enlaces, RRSS y correo destacado.

### Footer (cerrado en esta rebanada)

- Logo centrado, sin borde ni fondo, enlace al inicio.
- Enlaces: Club (El Club, Equipos, Eventos), Sitio (Partidos, Noticias,
  Videos, Tienda), Participa (Comunidad, Súmate, Auspicios, Tickets).
- Derecha: iconos de Instagram, TikTok y YouTube **sin enlace todavía**
  (`data-pendiente="url"`) y correo destacado sin rojo.
- Abajo: copyright y enlaces reales a Privacidad, Términos y Devoluciones.
- Sin formularios, sin redes inventadas, sin efectos de borde.

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

Stubs legales (nuevos, reutilizan la plantilla de sección en construcción):

```
/privacidad
/terminos
/devoluciones
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
--red-hover:  #ff4967
--red-dark:   #a80f2b
--red-deep:   #8d0b24
--separator:  #b51f3b
--red-soft:   #ff9eb1
--red-tint:   #ffccd6
--black:      #111
--ink:        #111318
--ink-700:    #161616
--ink-800:    #121419
--ink-900:    #0d0e12
--paper:      #fefdfc
--paper-2:    #e9e6de
--paper-3:    #efede7
--white:      #ffffff
```

Los hex sueltos de rojo, tinta y papel ya no se usan fuera de `:root`;
todo consume tokens. El footer usa además `--footer-*` (blanco con alfa).

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

1. **RRSS**
   - Conectar Instagram, TikTok y YouTube cuando existan URLs oficiales.
   - Hoy los iconos existen en el footer sin `href` (`data-pendiente="url"`).

2. **Assets reales**
   - Reemplazar fotos de jugadores de Wikimedia por fotos propias autorizadas.
   - Reemplazar nombres `Jugador 01–05`.
   - Reemplazar auspiciadores placeholder por logos reales.
   - Reemplazar imágenes de noticias/hero por fotos propias.
   - Vectorizar el escudo; hoy es PNG de baja resolución.

3. **Contenido**
   - Redactar y validar Privacidad, Términos y Devoluciones (hoy stubs).
   - Confirmar tabla ARUMET y fecha de actualización.
   - Confirmar precios y tallas de tienda.
   - Confirmar fixture real.
   - Completar páginas `/sumate`, `/auspicios` y `/videos`.

### P1 · Calidad

1. Añadir estilos `:focus-visible` al resto del sitio (el footer ya los tiene).
2. Revisar contraste de metadatos pequeños fuera del footer
   (`#73777f`, `#777b83` y `#858990` quedan bajo AA sobre `#fefdfc`).
3. Mejorar affordance de tabla en móvil.
4. Limpiar CSS y componentes sin uso (`FixtureExtension`).

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

- Build: OK (15 páginas).
- Dev server: activo en `4321`.
- Home: intacta, con diff de píxeles 0 respecto de la versión aprobada.
- Footer: completo, con logo centrado, 3 grupos de enlaces, RRSS sin URL
  y legal enlazado a stubs.
- Paleta: consolidada en tokens, sin cambio visual.
- Páginas internas: pendientes, salvo los tres stubs legales.
- Contenido: placeholders en varios puntos; RRSS esperando URLs oficiales.

Si algo no coincide con el código, el código manda.
