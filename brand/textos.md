# Textos clave de Mentoor

Copiados textualmente del código el 3 de octubre de 2026, con el archivo de origen de cada uno. Nada está reescrito.

## Frases de marca

Fuente: `public/landing.html` (la página de presentación, `mentoor.cl`).

| Frase | Dónde aparece |
|---|---|
| **Decidir qué estudiar no debería ser un problema.** | Titular principal; también el `<title>` de la página |
| Te acompañamos a ver dónde puedes llegar —en la universidad, en un CFT o en un instituto profesional— con los datos reales de cada carrera y sin letra chica. | Bajada del titular |
| Admisión 2027 · gratis | Etiqueta sobre el titular |
| **Tranquilo/a, vamos paso a paso.** | Bloque de cierre del recorrido |
| Estés donde estés en el camino, hay algo que puedes hacer hoy. | Bajo la frase anterior |
| Tu futuro se construye paso a paso. | Título de sección |
| No empieza el día que postulas: empieza con las notas de este semestre. | Bajada de esa sección |
| Desde 1° medio hasta la matrícula | Etiqueta de esa sección |
| Decide con calma | Paso "Postulación" |
| Compara tus opciones lado a lado y no se te pasa ninguna fecha del proceso. | Bajada de "Decide con calma" |
| Todo lo que necesitas, en un solo lugar | Título de sección |
| Cuatro herramientas que trabajan juntas para que decidas con información y no con rumores. | Bajada |
| Toda la educación superior, comparable. | Título de sección |
| Instálala en tu teléfono en 10 segundos | Título de sección |
| No necesitas la App Store. Funciona como una app de verdad. | Bajada |
| Tu futuro parte por saber dónde puedes llegar. | Cierre |

Dentro de la app (`src/app/features/auth/auth.component.html`, pantalla de entrada):

| Frase | Dónde |
|---|---|
| Calcula tu puntaje, explora universidades y descubre todas las vías de ingreso. | Bajo el logo, antes de "Comenzar" |
| Tu futuro te espera | Título de la pantalla de inicio de sesión |
| Ingresa a tu cuenta para continuar donde lo dejaste. | Bajada del inicio de sesión |

## Secciones

**Menú de escritorio** — `src/app/app.ts`, `navItems`:

Inicio · Calculadora · Carreras · Universidades · Institutos y CFT · Beneficios del Estado · Calendario · Mi perfil

**Barra inferior del celular** — `src/app/app.ts`, `tabsMobile`:

Inicio · Calendario · **Explorar** (botón central) · Calculadora · Perfil

**Hoja "Explorar"** — `src/app/app.html`:

> **Explorar**
> Descubre tu camino después del colegio

| Grupo | Secciones |
|---|---|
| Tu camino | Carreras · Universidades · Institutos y CFT · Fuerzas Armadas *(Pronto)* |
| Financia tus estudios | Beneficios del Estado · Internacional *(Pronto)* |
| Oportunidades | Empleo y prácticas *(Pronto)* |

"Fuerzas Armadas" está construida pero oculta del menú mientras se termina su diseño.

**Otras secciones con nombre propio**

| Nombre | Archivo |
|---|---|
| Mi Progreso | `src/app/app.ts`, `TITULOS` |
| Ruta Lectora — "Competencia Lectora PAES" | `src/app/features/ruta-lectora/` (sub-marca, aún no publicada) |

## Inicio

`src/app/features/inicio/inicio.component.html`

| Texto | Elemento |
|---|---|
| Calendario PAES · Regular / Invierno | Rótulo del contador |
| días · horas · min | Unidades del contador |
| Herramienta destacada | Etiqueta de la tarjeta en degradado |
| Calculadora | Título de la tarjeta destacada |
| Ingresa tus notas y puntajes para ver tu puntaje ponderado al instante. | Bajada |
| **Calcular ahora** | Botón |
| De dónde salen los datos | Recuadro de fuentes al pie |

Barra lateral de escritorio (`src/app/app.html`): **PAES EN** · días · hrs · min · *Admisión 2027* · **Ayúdanos a mejorar** · Personalizar tema · Cerrar sesión · *Datos oficiales: MINEDUC, DEMRE y las instituciones*

## Llamados a la acción

| Texto | Dónde | Archivo |
|---|---|---|
| **Instalar gratis →** | Botón principal de la página | `public/landing.html` |
| Ver cómo funciona | Botón secundario de la página | `public/landing.html` |
| **Instala App Mentoor →** | Sección de instalación | `public/landing.html` |
| Mentoor Web | Enlace a la versión web | `public/landing.html` |
| **Comenzar** | Pantalla de entrada a la app | `auth.component.html` |
| ¿No tienes cuenta? Regístrate | Pantalla de entrada | `auth.component.html` |
| **Continuar** | Iniciar sesión | `auth.component.html` |
| ¿Olvidaste tu contraseña? | Iniciar sesión | `auth.component.html` |
| **Calcular ahora** | Inicio, tarjeta destacada | `inicio.component.html` |
| **Calcular mi puntaje** | Ficha de carrera, dentro de una universidad | `universidad-ficha.component.html` |
| Comparar · Alternativas | Resultado de la calculadora | `calc-resultados.component.html` |
| Ver resultados → | Calculadora, último paso | `calc-paso3.component.html` |
| **¿Cuáles me sirven?** — Son pocas preguntas | Beneficios del Estado | `beneficios-list.component.html` |
| Ver los 19 — Todos juntos | Beneficios del Estado | `beneficios-list.component.html` |
| Ver ficha de la universidad › · Ver ficha del instituto › | Buscador de carreras | `carreras-uni-tab.component.html`, `carreras-inst-tab.component.html` |
| Ver calendario → | Escritorio | `src/app/app.html` |
| Ayúdanos a mejorar | Buzón de sugerencias | `src/app/app.html` |

## Cómo se nombran las categorías de becas

`src/app/features/beneficios/arco.utils.ts`. Cada categoría oficial lleva un nombre corto y una línea que explica de qué se trata, porque el nombre solo no basta para quien nunca pagó un arancel.

| Nombre corto | Explicación | Categoría oficial |
|---|---|---|
| Arancel | Pagan la carrera | Becas de arancel (mérito / socioeconómico) |
| Mérito | Por tus notas o tu situación | Becas de mérito / situación especial |
| Mantención | Comida, pasajes y dónde vivir | Beneficios de mantención / apoyo complementario |
| Créditos | Gratis o a crédito | Créditos y gratuidad |
| Admisión | Otra forma de entrar | Vía de admisión especial |

## Mensajes de ayuda y error (ejemplos del estilo)

`src/app/features/auth/auth.component.ts` — dicen qué hacer, no qué falló por dentro.

- Escribe un correo válido.
- El código tiene 6 números. Revisa el correo que te mandamos.
- Las dos contraseñas no coinciden.
- El código no es correcto o ya venció. Revisa que esté bien escrito, o pide uno nuevo.
- Hiciste varios intentos seguidos. Espera un minuto y vuelve a probar.
- Revisa también la carpeta de spam o promociones.

*Nota:* estos mensajes son de la recuperación de contraseña con código, que todavía no está publicada.
