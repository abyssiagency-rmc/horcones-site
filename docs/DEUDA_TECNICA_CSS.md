# Deuda técnica CSS · post Entrega 1

## Estado

- **Documentado, no ejecutado.**
- No se modificó CSS ni componentes en esta rebanada.
- Rama: `diseno/dashboard-revision`
- Commit base: `f1774dc`
- Fecha: 2026-11-18
- Ejecutar después de la Entrega 1.

## Hallazgo

`global.css` creció por acumulación de parches al final del archivo.

Métricas actuales:

```
Líneas:        3.302
Reglas:        ~742
Tamaño:        82,7 KB
Bloques CSS:   27
```

El archivo mezcla:

- tokens;
- reset;
- tipografía;
- header;
- hero;
- secciones de la Home;
- páginas internas;
- shells;
- footer;
- utilidades;
- correcciones posteriores que pisan reglas anteriores.

## Evidencia

### Footer duplicado

Hay cinco bloques de footer:

```
2141  /* Footer */
2526  /* Footer editorial */
2690  /* Footer final: grilla 3/6/3 */
2877  /* Ajustes de footer: marca centrada, links equiespaciados, RRSS con peso */
2916  /* Footer: tres bloques separados */
```

El resultado visual actual depende de la cascada entre esos bloques. Limpiar sin pruebas de paridad puede romper el footer.

### Componente huérfano

`site/src/components/FixtureExtension.astro` no tiene referencias de importación.

### Estilos legacy

- `.placeholder` quedó del template dinámico anterior.
- Hay estilos de “Extensión de fixture” y “Nueva estructura” que se superponen.
- Persisten reglas de estados y variantes que ya no tienen markup.

### Fuentes

Los `@font-face` duplicados de Inter Tight, Antonio y Roboto Condensed ya fueron consolidados en el commit `394c65c`.

No forman parte de la deuda pendiente.

## Impacto

- Difícil saber qué regla gobierna cada elemento.
- Cada ajuste visual agrega una nueva regla al final.
- Mayor riesgo de regresiones en responsive.
- Difícil eliminar código muerto con seguridad.
- Más tokens y tiempo en cada iteración.
- El archivo no escala para el contenido y las páginas que faltan.

## Decisión

**No refactorizar antes de la Entrega 1.**

Antes de la entrega:

- congelar diseño;
- no mover CSS;
- no renombrar clases;
- no eliminar selectores;
- solo corregir bugs bloqueantes.

El refactor se ejecuta después, con baseline visual y pruebas de paridad.

## Plan post Entrega 1

### Fase 0 · Baseline

- Capturas de las 16 rutas en 1440 px y 390 px.
- Captura específica del footer.
- Registro de posiciones, tamaños, colores y fuentes computadas.
- Build y crawl de enlaces.

### Fase 1 · Separar por dominio

Estructura objetivo:

```
src/styles/
  tokens.css
  base.css
  header.css
  hero.css
  match.css
  news.css
  teams.css
  videos.css
  join.css
  partners.css
  shop.css
  partidos.css
  access.css
  shells.css
  footer.css
  utilities.css
```

Reglas:

- `Layout.astro` importa en orden explícito.
- Mantener el orden de cascada actual en la primera pasada.
- No cambiar valores ni nombres de clases.
- Validar paridad visual antes de seguir.

### Fase 2 · Eliminar duplicados

- Dejar un solo bloque de footer.
- Eliminar `FixtureExtension.astro` y sus estilos.
- Eliminar `.placeholder` si ninguna ruta lo usa.
- Eliminar reglas de fixture antiguas.
- Eliminar selectores sin markup.
- Revisar que no queden `@font-face` repetidos.

### Fase 3 · Aislar componentes

- Estilos propios de `Header.astro`, `Footer.astro` y `Hero.astro`.
- CSS scoped de Astro donde no haya colisiones.
- Reglas compartidas en `base.css`.
- No migrar todo a CSS Modules de golpe.

### Fase 4 · Guardrails

- `stylelint` para selectores duplicados.
- Capturas de regresión visual.
- Límite blando por archivo: 600 líneas.
- Build y crawl obligatorios en CI.
- Checklist de paridad visual por página.

## Criterios de aceptación

- Un solo bloque de footer.
- `global.css` deja de ser el archivo de trabajo.
- Ningún archivo de estilos supera 600 líneas sin justificación.
- No hay selectores duplicados para un mismo componente.
- Las 16 rutas siguen respondiendo `200`.
- 0 errores de consola.
- Paridad visual en 1440 px y 390 px.
- Documento de rollback actualizado.

## Rollback

El refactor debe hacerse en un commit aislado.

```powershell
git revert <commit-refactor>
```

No usar `git reset --hard` sobre la rama compartida.

Conservar el commit base:

```
f1774dc
```

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Cambio visual por orden de cascada | Capturas antes/después |
| Pérdida de reglas responsive | Probar 1440, 1024, 760 y 390 |
| Romper footer | Comparar estilos computados |
| Borrar una regla aún usada | Buscar selectores en todo `src` |
| Refactor demasiado grande | Fases con commits separados |

## Próximo paso

Después de la Entrega 1:

1. Aprobar Fase 0 y Fase 1.
2. Crear rama `refactor/css-structure`.
3. Ejecutar split sin cambios visuales.
4. Validar paridad.
5. Recién entonces eliminar duplicados.
