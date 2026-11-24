# Portfolio de Ángel Luzón Balanzá

Web personal hecha a mano con HTML, CSS y JavaScript, sin frameworks ni dependencias.
Publicada con GitHub Pages en <https://angelluzon.github.io>.

## Qué incluye

- Tema oscuro y claro, español e inglés (se recuerdan las preferencias).
- Avatar animado opcional que habla con frases y respuestas (bocadillo, boca sincronizada y voz).
- Paleta de comandos (`Ctrl/Cmd + K`), progreso de scroll, impresión como CV y 404 propia.
- Sección de proyectos que se rellena sola con los repositorios públicos de GitHub.

## Configuración opcional

Al principio de [`script.js`](script.js) hay tres constantes. Con cada una vacía, esa función permanece oculta:

| Constante | Qué activa | Ejemplo |
| --- | --- | --- |
| `CV_PDF` | Botones de descargar CV (cabecera, contacto y paleta) | `"cv.pdf"` (con el archivo en la raíz) |
| `LINKEDIN` | Enlace a LinkedIn en cabecera, contacto y paleta | `"https://www.linkedin.com/in/..."` |
| `GOATCOUNTER` | Estadísticas de visitas sin cookies | `"angelluzon"` |

## Voz propia del avatar

1. Sirve la carpeta en local: `python -m http.server 8000`.
2. Abre <http://localhost:8000/grabar.html>, graba las frases y descarga los WAV.
3. Guárdalos en una carpeta `audio/` en la raíz (`es-1.wav`, `es-r1.wav`, `en-1.wav`…).

Si no hay grabaciones, el avatar usa la voz del sistema. Las frases y las respuestas se editan en [`frases.js`](frases.js); si cambias un texto, vuelve a grabarlo.

## Estructura

- `index.html`, `style.css`, `script.js`: la web.
- `frases.js`: frases y preguntas del avatar (también las usa `grabar.html`).
- `grabar.html`, `grabar.js`: grabadora de voz (se puede borrar cuando ya no haga falta).
- `fonts/`: Inter y JetBrains Mono alojadas en local.
- `img/`, `og.png`: avatar, iconos e imagen para compartir el enlace.
