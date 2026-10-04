# Kit de marca de Mentoor

Extraído del código de `mentoor-frontend` el 3 de octubre de 2026. **Ningún valor es inventado**: cada uno indica el archivo del que salió. Donde el código no define algo, se dice; donde el código se contradice, también.

| Archivo | Qué tiene |
|---|---|
| `tokens.css` | Colores de los 4 temas, éxito y error, sombras, radios, espaciados y tipografía |
| `logo/` | El cuadrado "M", la firma "Mentoor by QUANTTUM", el ícono de la app y el logo de QUANTTUM |
| `textos.md` | Nombres de secciones, llamados a la acción y frases de marca |

---

## Antes de usarlo: cuatro cosas que el código no tiene resueltas

Estas no son recomendaciones: son diferencias que **existen hoy** en la app. Quien diseñe con este kit tiene que saber que están ahí.

**1. La app y la página de presentación usan tipografías distintas.**
La app usa la fuente del sistema (San Francisco en iPhone, Roboto en Android, Segoe UI en Windows). La página de presentación (`mentoor.cl`) carga **Inter** desde Google Fonts. Un mismo texto se ve distinto en una y otra.

**2. Hay tres versiones del logo "M", y no coinciden.**

| Dónde | Degradado | Letra | Archivo de origen |
|---|---|---|---|
| Pantalla de acceso y barra lateral de escritorio | `#FACC15 → #F97316`, fijo | `#1A1208` (casi negra) | `src/styles.css`, `.logo-splash` y `.sidebar-logo-bg` |
| Cabecera del celular | `--accent-gradient`: **cambia con el tema** | `--on-accent` | `src/styles.css`, `.mobile-logo` |
| Ícono instalado en el teléfono | aprox. `#FDED16 → #FC6900` | **hueco transparente** | `public/icons/icon-*.png` |

Consecuencias: si un alumno elige el tema "Oscuro · menta", el logo de su cabecera se vuelve verde. Y la "M" del ícono no es blanca: es un hueco, así que muestra lo que haya detrás (en iPhone, negro).
Los colores del ícono se midieron leyendo los píxeles del PNG; son aproximados porque el degradado empieza en la esquina redondeada, que es transparente.

**3. Éxito y error no son variables.** Están escritos a mano en cada componente. En `tokens.css` van los más repetidos (`#22c55e` 26 veces, `#ef4444` 23 veces), pero en el código conviven con otros tonos parecidos.

**4. Las pantallas de acceso tienen su propia paleta, fuera del sistema de temas.** `src/styles.css` (`.auth-input`, `.auth-label`, `.auth-link`): campos `#1A1A24` con borde `#222230`, rótulos `#A1A1AA`, texto `#F4F4F5` y un ámbar **`#FFB01F`** para el foco y los enlaces — distinto del ámbar de la app, `#F59E0B`.

---

## Color

La marca es el tema **Oscuro · ámbar** (`dark-amber`): es el que ve todo alumno que no eligió otro (`src/app/core/tema.service.ts`, `TEMAS[0]`). Los otros tres temas (Oscuro · menta, Claro · índigo, Claro · coral) existen para que el alumno personalice la app, no como colores de marca.

| Rol | Valor | Uso en el código |
|---|---|---|
| Fondo | `#0B0B0F` | `--bg`, fondo de toda la app |
| Tarjeta | `#16161C` | `--surface`, `.m-card` y `.inst-card` |
| Tarjeta interior | `#1F1F27` | `--surface-2`, chips, campos, bloques dentro de tarjetas |
| Tercer nivel | `#2A2A35` | `--surface-3`, borde al pasar el mouse |
| Texto | `#FFFFFF` | `--text` |
| Texto secundario | `#8A8A93` | `--text-muted`, rótulos y descripciones |
| Borde | `#2A2A33` | `--border` |
| Acento | `#F59E0B` | `--accent`: cifras, enlaces, elemento activo |
| Degradado ámbar | `#FBBF24 → #F59E0B → #D97706`, 135° | `--accent-gradient` |
| Texto sobre ámbar | `#1A1208` | `--on-accent` |

Detalle: el degradado de `src/styles.css` reparte los tres colores parejo (0 %, 50 %, 100 %); la muestra del selector de temas en `tema.service.ts` usa 0 %, 55 %, 100 %. Lo que se ve en pantalla es el de `styles.css`.

## Cuándo usar el degradado ámbar

En el código, el degradado aparece **solo en lo que se toca para avanzar o en lo que se destaca una vez por pantalla**:

| Elemento | Archivo / clase |
|---|---|
| Botón principal | `.btn-primary` |
| Chip de filtro activo | `.inst-chip.on` |
| Tarjeta de herramienta destacada en Inicio | `.m-destacado` |
| Botón central "Explorar" cuando está activo | `.tab-fab.activo .fab-circle` |
| Logo "M" de la cabecera | `.mobile-logo` |
| Botón del cuestionario en Beneficios | `beneficios-list.component.html` |

Reglas que se desprenden de ese uso:

- **El texto encima va siempre en `--on-accent` (`#1A1208`)**, nunca en blanco.
- **Va acompañado de su brillo**, `--accent-glow` (`0 12px 40px -8px rgba(245,158,11,0.35)`). Se apaga cuando el botón está deshabilitado (`.btn-primary:disabled`).
- **No se usa para texto corrido ni para fondos de secciones.** Las cifras y enlaces van en `--accent` plano.

## Tarjetas

| Tipo | Valores | Archivo |
|---|---|---|
| Tarjeta principal | fondo `--surface`, borde 1px `--border`, radio **20px**, separación 16px | `.m-card` |
| Tarjeta de lista | fondo `--surface`, borde 1px `--border`, radio **16px**, padding y separación interna 13px, 9px entre tarjetas | `.inst-card` |
| Bloque dentro de tarjeta | fondo `--surface-2`, radio 12–14px | `.sidebar-widget`, campos |

Al presionar, la tarjeta de lista se achica levemente (`scale(.99)`); con mouse, su borde pasa a `--surface-3`.

## Botones

| Tipo | Cómo es | Archivo |
|---|---|---|
| Principal | ancho completo, degradado ámbar, texto `--on-accent` 15px peso 700, radio 14px, padding 15×24px, con brillo | `.btn-primary` |
| Secundario | fondo `--surface-2`, borde 1px `--border`, texto `--text` | "Ver los 19" en Beneficios |
| Chip | radio 99px, 12,5px peso 700, padding 8×14px; activo en degradado | `.inst-chip` |
| Enlace | texto `--accent`, peso 600, sin fondo | `.auth-link`, enlaces de fichas |

Estados del principal: con mouse baja a 92 % de opacidad; al presionar se achica a `scale(0.98)`; deshabilitado queda en 55 % y sin brillo.
Área táctil: los botones nuevos usan un mínimo de **44px** de alto.

## El contador de días

Es la cuenta regresiva a la PAES. Aparece en Inicio (celular) y en la barra lateral (escritorio).

**Fechas** (`src/app/features/inicio/inicio.component.ts`): PAES Regular `2026-11-30 15:00 (-03:00)`; PAES de Invierno `2026-06-15 08:00 (-04:00)`.

**Celular** (`.m-countdown` en `src/styles.css`):

| Parte | Valor |
|---|---|
| Rótulo "CALENDARIO PAES · REGULAR" | 11px, peso 700, mayúsculas, interletrado 2px, `--text-muted` |
| Punto que late | 6px, `--accent`, animación `pulse-dot` de 2s |
| Números | **34px, peso 900, `--accent`**, cifras tabulares, interletrado −1px |
| Separador ":" | 28px, peso 900, color `--border` |
| "días / horas / min" | 9px, peso 600, mayúsculas, `--text-muted` |

**Escritorio** (`src/app/app.html`, barra lateral): rótulo "PAES EN", números de 24px peso 900 en `--accent`, unidades "días / hrs / min" y al pie "Admisión 2027", dentro de un `.sidebar-widget`.

Los números siempre en el color de acento y nunca en el degradado: el degradado es para lo que se toca, y el contador solo se lee.

## Tipografía

**App** — fuente del sistema (`src/styles.css`, `--font-sans`):
`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
**No hay archivos de fuente de Mentoor en el proyecto.**

**Página de presentación** — **Inter** desde Google Fonts, pesos 400 a 900 (`public/landing.html`, línea 31). Tampoco hay archivos locales: se descarga de Google.

Pesos en uso en la app (contados en `src/`, css y html):

| Peso | Usos | Para qué |
|---|---|---|
| 400 | 6 | casi no se usa |
| 500 | 34 | texto secundario |
| 600 | 82 | rótulos, enlaces |
| 700 | 221 | **el más usado**: botones, chips, títulos de tarjeta |
| 800 | 143 | títulos de pantalla, nombre "Mentoor" |
| 900 | 52 | la "M" del logo y las cifras grandes |

Tamaños de referencia (`src/styles.css`): nombre "Mentoor" en la cabecera 17px/800; saludo de Inicio 28px/800; botones 15px/700; rótulos en mayúsculas 10–11px/700 con interletrado.

*Aparte:* la sección Ruta Lectora sí trae fuentes propias (Bricolage Grotesque, Instrument Sans, JetBrains Mono, en `public/ruta-lectora/fonts/`). Son de esa sub-marca, no de Mentoor.

## Logo

| Archivo | Qué es | Origen |
|---|---|---|
| `logo/m-cuadrado.svg` | La "M" fija, 76×76, radio 22 | Convertido a SVG desde `.logo-splash` |
| `logo/m-cuadrado-movil.svg` | La "M" de la cabecera, 36×36, radio 10, con el tema por defecto | Convertido desde `.mobile-logo` |
| `logo/mentoor-by-quanttum-fondo-oscuro.svg` | La firma completa, tal como aparece en la cabecera | Convertido desde la cabecera de `src/app/app.html` |
| `logo/icono-app-512.png` | El ícono que se instala en el teléfono | Copia de `public/icons/icon-512x512.png` |
| `logo/quanttum.jpg` | El logo de QUANTTUM | Copia de `public/icons/quanttum-logo.jpg` |

Sobre los SVG:

- En el proyecto **no existe ningún logo en SVG**: la "M" está hecha con HTML y CSS. Los SVG de esta carpeta reproducen exactamente esos valores (tamaño, radio, degradado, peso y color de la letra).
- La "M" se escribe con la fuente del sistema, igual que en la app. Por eso **se ve levemente distinta en cada dispositivo**, igual que en la app. Para una pieza impresa o un logo definitivo conviene convertirla a trazos con una tipografía elegida.
- La sombra (`0 8px 32px rgba(249,115,22,.40)` en `.logo-splash`) no va dentro del SVG: es parte de cómo la app lo muestra, no del logo.

Sobre QUANTTUM:

- **No existe en vector en el proyecto**: es un JPG de 1333×166, letras blancas sobre fondo negro. No se redibujó. Para una versión en SVG hay que pedirle el original a QUANTTUM.
- En la app se muestra a **12px de alto**. En temas oscuros se funde con `mix-blend-mode: screen` (el negro desaparece); en temas claros se invierte con `filter: invert(1)` y `multiply` (`src/styles.css`, `.brand-quanttum`).
- Por eso la firma `mentoor-by-quanttum-fondo-oscuro.svg` **solo sirve sobre fondo oscuro** y trae el fondo `#0B0B0F` incluido. El ancho de la palabra "by" depende de la fuente, así que la posición del logo QUANTTUM puede variar ±2px.

Medidas de la firma (`src/styles.css`): cuadrado 36px · 10px de separación · "Mentoor" 17px/800 · "by" 11px/500 en `--text-muted` · 5px · QUANTTUM a 12px de alto.

## Tono de voz

La frase de marca existe en el código, en la página de presentación (`public/landing.html`, línea 463):

> **Tranquilo/a, vamos paso a paso.**
> Estés donde estés en el camino, hay algo que puedes hacer hoy.

Lo que se repite en los textos reales de la app y de la página:

- **Calma antes que urgencia.** "Decide con calma", "Tu futuro se construye paso a paso", "No empieza el día que postulas: empieza con las notas de este semestre" (`public/landing.html`).
- **Tú, en español de Chile. Nunca voseo** ("tienes", nunca "tenés"). Es una regla explícita de Karina para todo el texto de la app.
- **Lenguaje inclusivo con barra**: "Tranquilo/a".
- **Sin letra chica y con datos reales.** "Con los datos reales de cada carrera y sin letra chica" (`public/landing.html`).
- **Los errores dicen qué hacer, no qué falló por dentro.** Ejemplo real (`src/app/features/auth/auth.component.ts`): *"El código no es correcto o ya venció. Revisa que esté bien escrito, o pide uno nuevo."*
- **Lo que no está confirmado se dice.** Ejemplo real: la sección Fuerzas Armadas avisa *"Donde no se pudo confirmar un dato para 2027, la ficha lo dice explícitamente en vez de inventarlo"*.

Frases y llamados a la acción completos en `textos.md`.
