# Brief de diseño · Footer Horcones RC

## 1. Objetivo

Rediseñar la estructura interna del footer para que tenga:

- una grilla clara y proporcional;
- una relación coherente entre logo, navegación y contacto;
- iconos de redes sociales visibles, aunque todavía no existan URLs;
- el mismo lenguaje visual del resto del sitio;
- buen comportamiento en desktop, tablet y móvil.

No se debe rediseñar la Home ni las demás secciones.

## 2. Punto de partida

Archivos:

```
site/src/components/Footer.astro
site/src/styles/global.css
```

Capturas actuales:

```
artifacts/footer-final-desktop.png
artifacts/footer-final-mobile.png
```

Problemas detectados:

1. El logo queda demasiado cerca del borde izquierdo.
2. Entre el logo y la navegación hay un vacío irregular.
3. Las tres zonas no tienen proporciones equivalentes ni gaps consistentes.
4. Los enlaces internos se ven comprimidos.
5. Falta la zona de redes sociales.
6. El correo debe quedar completo en una línea.

## 3. Estructura propuesta

### Desktop

Usar una grilla de 12 columnas:

```
┌──────────────────────┬──────────────────────────────┬──────────────────────┐
│ Marca                │ Navegación                   │ Contacto / RRSS      │
│ 3 columnas · 25 %    │ 6 columnas · 50 %            │ 3 columnas · 25 %    │
│                      │ Club · Sitio · Participa     │                      │
└──────────────────────┴──────────────────────────────┴──────────────────────┘
```

Reglas:

- Contenedor máximo: `1280 px`.
- Padding lateral: `32 px`.
- Gap entre zonas: `32–40 px`.
- Logo: `96–104 px`, alineado al inicio de su columna, nunca pegado al viewport.
- Firma debajo del logo.
- Navegación: 3 subcolumnas iguales dentro del 50 %.
- Contacto: alineado al inicio de su columna, sin empujarlo al borde.
- Correo completo en una línea.
- Iconos sociales en la zona derecha, sobre el bloque de contacto.

### Tablet

- 2 columnas:
  - marca + navegación;
  - contacto debajo, ocupando el ancho.
- Navegación puede mantener 3 subcolumnas.
- Gap de `28–32 px`.

### Móvil

- Una columna.
- Orden:
  1. logo;
  2. firma;
  3. navegación en 2 columnas;
  4. redes sociales;
  5. contacto;
  6. legales.
- Logo `88–96 px`.
- Sin espacios muertos entre bloques.

## 4. Redes sociales

Deben existir visualmente:

- Instagram.
- TikTok.
- YouTube.

Como todavía no hay URLs oficiales:

- mostrar los iconos en estado **no interactivo**;
- no usar `<a href="#">` ni enlaces vacíos;
- usar `span` con `role="img"` y `aria-label`;
- estado visual atenuado;
- cuando existan URLs, convertir cada icono en enlace real.

Especificación:

```
Tamaño del icono: 20–22 px
Área táctil si es enlace: 40 × 40 px
Separación: 16–20 px
Color base: rgba(255,255,255,.62)
Hover/focus: blanco
No usar fondo de tarjeta
```

## 5. Navegación

Agrupar así:

```
CLUB
El Club
Equipos
Partidos
Eventos
Comunidad

SITIO
Noticias
Videos
Tienda
Tickets

PARTICIPA
Súmate
Auspicios
```

Reglas:

- Títulos de grupo en Antonio 600, 11 px, mayúsculas, tracking amplio.
- Enlaces en Roboto Condensed 500, 15 px.
- Separación vertical entre enlaces: 6–8 px.
- Todos los grupos con el mismo ancho y alineación.
- No dejar columnas de distinto ancho por contenido.

## 6. Contacto

- Título `CONTACTO` igual a los demás grupos.
- Correo destacado, completo, en una línea.
- Icono de sobre alineado.
- Mantener `mailto:`.
- Texto secundario:
  ```
  Auspicios · Prensa · Postulaciones
  ```
- Sin formulario.

## 7. Jerarquía visual

1. Logo y firma.
2. Navegación.
3. Contacto.
4. Redes sociales.
5. Legales.

El footer no debe competir con la Home. Es un cierre, no una sección protagonista.

## 8. Paleta

Usar los tokens existentes:

```
Fondo:        var(--ink-800)
Texto:        var(--white)
Enlaces:      var(--footer-link)
Labels:       var(--footer-label)
Metadatos:    var(--footer-meta)
Líneas:       var(--footer-line)
Hover:        var(--white)
```

No introducir nuevos colores.

## 9. Responsive y accesibilidad

- Todos los enlaces deben tener `:focus-visible`.
- El logo debe ser un enlace al inicio y tener `aria-label`.
- La navegación debe tener `aria-label`.
- Los iconos sociales desactivados no deben recibir foco.
- El correo debe seguir siendo un enlace `mailto:`.
- No usar texto gris demasiado claro sobre fondo oscuro.
- Verificar contraste de labels pequeños.

## 10. Entregables

El equipo de diseño debe entregar:

1. Wireframe desktop.
2. Wireframe móvil.
3. Especificación de grid con porcentajes y gaps.
4. Especificaciones de iconos sociales.
5. Estados hover/focus/disabled.
6. Lista de enlaces.
7. Capturas o prototipo navegable.

## 11. Criterios de aceptación

- El logo no está pegado al borde.
- Las tres zonas tienen proporciones claras.
- La navegación tiene columnas iguales.
- Los gaps son consistentes.
- Las redes sociales están presentes y no son enlaces vacíos.
- El correo se lee completo.
- El footer se ve correcto en 1440, 1024 y 390 px.
- No se modifica la Home.
- No se agregan formularios.
- No se agregan URLs sociales inventadas.

## 12. Prompt corto para el Agente de Diseño

```text
Lee este brief y rediseña únicamente el footer de Horcones RC.

No toques la Home ni otras secciones.

Entrega:
1. wireframe desktop y móvil;
2. grilla con porcentajes y gaps;
3. especificación de RRSS;
4. estados hover/focus/disabled;
5. criterios de responsive.

No implementes código todavía.
No inventes URLs sociales.
No agregues formularios.
```
