# Ángel Luzón Balanzá · Portfolio

Portfolio personal construido con HTML, CSS y JavaScript nativos, sin frameworks, sin dependencias y sin paso de compilación. Publicado con GitHub Pages.

🔗 **Ver en vivo:** <https://angelluzon.github.io>

![Captura del portfolio](docs/captura.png)

## Aspectos destacados

- **Cero dependencias.** Todo el código es propio. Las fuentes (Inter y JetBrains Mono) se alojan en local.
- **Bilingüe y con dos temas.** Español e inglés, y tema oscuro o claro. Las preferencias se recuerdan entre visitas.
- **Accesible.** Se navega por teclado, respeta `prefers-reduced-motion` y está revisado con axe-core.
- **Optimizado para buscadores.** Incluye metadatos, datos estructurados JSON-LD, `sitemap.xml`, `robots.txt` e imagen Open Graph.
- **Interactivo sin sacrificar rendimiento:**
  - Paleta de comandos (`Ctrl/Cmd + K`) y barra de progreso de lectura.
  - Avatar animado con boca sincronizada, parpadeo y mirada que sigue al cursor. Habla con la voz del sistema o con grabaciones propias.
- **Proyectos documentados como casos.** Cada ficha recoge Problema, Qué construí, Cómo funciona y Resultado.
- **Repositorios automáticos.** Los repositorios públicos se cargan desde la API de GitHub.
- **Imprimible como CV** desde el propio navegador, y con página 404 propia.

## Secciones

Sobre mí · Preguntas y respuestas (Perfil, Técnico, Personal, Trabajo) · Trayectoria · Competencias · Aptitudes · Proyectos · Contacto

## Tecnologías

HTML5 · CSS3 (variables, temas) · JavaScript ES6+ · Web Speech API · GitHub REST API · GitHub Pages · GoatCounter (opcional, sin cookies)

## Puesta en marcha

```bash
git clone https://github.com/angelluzon/angelluzon.github.io.git
cd angelluzon.github.io
python -m http.server 8000
```

Abre <http://localhost:8000>. Para saltar la bienvenida, usa <http://localhost:8000/?sinintro>.

## Estructura

```text
├── index.html          # Estructura y textos por defecto (data-i18n)
├── style.css           # Estilos y variables de tema
├── script.js           # Lógica, traducciones y configuración
├── frases.js           # Frases del avatar y preguntas y respuestas
├── grabar.html / .js   # Grabadora de voz para el avatar (herramienta local)
├── fonts/              # Inter y JetBrains Mono
├── img/  og.png        # Avatar, iconos e imagen para redes
├── audio/              # (Opcional) grabaciones del avatar
└── 404.html  sitemap.xml  robots.txt
```

## Editar el contenido

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos de la web | `traducciones` en [`script.js`](script.js), y el mismo texto por defecto en `index.html` (`data-i18n`) |
| Preguntas y respuestas | [`frases.js`](frases.js), lista `PREGUNTAS` (`g` grupo, `p` pregunta, `r` respuesta) |
| Frases del avatar | [`frases.js`](frases.js), lista `FRASES` |
| Competencias | array `competencias` en [`script.js`](script.js) |
| Proyectos | sección `#proyectos` de `index.html` y claves `caso_*` / `proy_*` en `traducciones` |
| Colores y tema | variables CSS al principio de [`style.css`](style.css) |

Cada texto nuevo necesita su versión en español **y** en inglés.

## Configuración opcional

Las tres constantes están al principio de [`script.js`](script.js). Si una está vacía, su función queda oculta.

| Constante | Qué activa | Ejemplo |
| --- | --- | --- |
| `CV_PDF` | Botón de descarga del CV (cabecera, contacto y paleta) | `"cv.pdf"` |
| `LINKEDIN` | Enlace a LinkedIn (cabecera, contacto y paleta) | `"https://www.linkedin.com/in/..."` |
| `GOATCOUNTER` | Estadísticas de visitas sin cookies | `"angelluzon"` |

## Voz propia del avatar

1. Sirve la carpeta en local y abre <http://localhost:8000/grabar.html>.
2. Graba las frases y descarga los WAV.
3. Guárdalos en `audio/` con los nombres `es-1.wav`, `en-1.wav`, etc.

Sin grabaciones, el avatar usa la voz del sistema. La voz se activa con el botón «Voz» y solo se aplica a las frases cortas del avatar.

## Publicar cambios

La web se despliega automáticamente con GitHub Pages al subir cambios a la rama publicada. Antes de cada subida:

- [ ] Si cambiaste `style.css`, `script.js` o `frases.js`, sube el número `?v=` de sus etiquetas en `index.html`. Así se evita que el navegador mezcle archivos antiguos y nuevos.
- [ ] Revisa la web en español y en inglés, y en tema claro y oscuro.
- [ ] Pasa axe-core (o Lighthouse) si tocaste estructura o estilos.

## Hoja de ruta

Las mejoras previstas están en [ROADMAP.md](ROADMAP.md).

## Autor

Ángel Luzón Balanzá · [angelluzon.github.io](https://angelluzon.github.io) · [GitHub](https://github.com/AngelLuzon)
