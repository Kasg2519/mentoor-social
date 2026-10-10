# Horarios de publicación (editar aquí)

Zona horaria: America/Santiago (hora de Chile). Cambia solo los valores de la tabla; el recordatorio diario los lee de este archivo.

| Qué | Hora | Nota |
|---|---|---|
| Aviso diario a Karina (pieza + caption listos) | 09:30 | Rutina "Recordatorio de publicación diaria", hasta el 6 nov 2026 |
| Hora sugerida para subir: post y carrusel | 19:00 | Ventana 18:00 a 21:00, como en el proyecto anterior |
| Hora sugerida para subir: reel | 19:00 | Karina le pone la canción antes de subirlo |
| Hora sugerida para subir: story | 12:30 | Por definir con Karina |

Los horarios de subida son valores iniciales tomados del proyecto anterior (viernes 9 de octubre se publicó a las 19:01). Karina puede cambiarlos cuando quiera.

## Flujo (heredado del proyecto anterior)
1. 09:30: el recordatorio dice qué pieza toca, formato, redes, hora sugerida y caption listo para pegar.
2. Karina sube a mano (IG, FB, TikTok) o responde "publícalo" en el hilo.
3. Solo con ese "publícalo" explícito se publica por API con `tools/publicar-instagram.sh`, `tools/publicar-facebook.sh` o `tools/publicar-reel.sh`. Nunca sin confirmación.
4. Tras publicar: se envía el enlace de cada red y se marca la pieza como Publicada en el calendario de Notion.
5. Si la fecha de una pieza cambia (por ejemplo "51 días"), se recalcula y regenera antes de publicar.
