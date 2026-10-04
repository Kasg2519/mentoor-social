# Uso en redes (decisiones de diseño para las piezas)
Los valores salen de `tokens.css` y `README.md` (oficiales). Lo de aquí es criterio para redes:
- Fuente: **Inter** (la de mentoor.cl). Títulos 900/800, texto 400/500. Cifras grandes en `--accent` plano.
- Degradado ámbar solo en lo destacado (logo, botón/CTA, una tarjeta por pieza). Texto sobre ámbar: `--on-accent`.
- Logo "M": degradado fijo `--logo-gradient` con letra `--logo-letra`. "by QUANTTUM" permitido (confirmado por Karina).
- Voz: tú (nunca voseo), "Tranquilo/a, vamos paso a paso", sin urgencia. Datos de ejemplo siempre "ilustrativo".
- Formato carrusel/post: 1080×1350.
- Fecha PAES Regular según el código de la app: 30-nov-2026 15:00 (verificar en demre.cl antes de publicarla).

## Excepción autorizada: fondo degradado ámbar (Karina, 4-oct-2026)
En la app el degradado ámbar no se usa como fondo de secciones; en REDES sí se permite, en ~1 de cada 3 publicaciones, para variar el tono oscuro.
Reglas: degradado oficial (#FBBF24 → #F59E0B → #D97706, 135°); TODO el texto en #1A1208 (nunca blanco); tarjetas en oscuro translúcido o sólido #1A1208 con texto ámbar/blanco;
usar en consejos, cifras grandes y piezas de energía; las piezas informativas densas van en oscuro. Clase `.amb` en templates/.
