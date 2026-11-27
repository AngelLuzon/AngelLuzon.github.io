# Portfolio de Ángel Luzón Balanzá

Web personal hecha a mano con HTML, CSS y JavaScript, sin frameworks ni dependencias.
Publicada con GitHub Pages en <https://angelluzon.github.io>.

## Qué incluye

- Una sola página con scroll: Sobre mí, Preguntas y respuestas, Trayectoria, Competencias, Aptitudes, Proyectos y Contacto.
- Tema oscuro (por defecto) y claro, y español e inglés. Se recuerdan las preferencias.
- Bienvenida con foto, una vez por visita (se cierra sola, con Esc o con el botón).
- Avatar animado opcional: dice frases cortas con boca sincronizada, parpadea y sigue el cursor con la mirada. Con voz del sistema o con voz propia.
- Preguntas y respuestas en desplegables, agrupadas en Perfil, Técnico, Personal y Trabajo.
- Proyectos: fichas de caso (Problema, Qué construí, Cómo funciona, Resultado) y repositorios públicos de GitHub cargados solos.
- Paleta de comandos (`Ctrl/Cmd + K`), barra de progreso, impresión como CV y 404 propia.
- SEO (metadatos, JSON-LD, `sitemap.xml`, `robots.txt`) y accesibilidad (navegación por teclado, `prefers-reduced-motion`, revisado con axe-core).

## Cómo trabajar en local

```bash
python -m http.server 8000
```

Abre <http://localhost:8000>. Para saltarte la bienvenida: <http://localhost:8000/?sinintro>.

> Tras cambiar `style.css`, `script.js` o `frases.js`, sube el número de `?v=` en las etiquetas de `index.html`. Así los navegadores no usan una copia antigua, que mezclada con archivos nuevos hace que la web falle a medias.

## Cómo editar el contenido

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos de la web (español e inglés) | `traducciones` en [`script.js`](script.js), y el mismo texto como valor por defecto en `index.html` (`data-i18n`) |
| Preguntas y respuestas | [`frases.js`](frases.js), lista `PREGUNTAS` (campos `g` grupo, `p` pregunta, `r` respuesta) |
| Frases cortas del avatar | [`frases.js`](frases.js), lista `FRASES` |
| Competencias (chips) | array `competencias` en [`script.js`](script.js) |
| Proyectos propios | sección `#proyectos` de `index.html` y claves `caso_*` / `proy_*` en `traducciones` |
| Colores y tema | variables CSS al principio de [`style.css`](style.css) |

Cada texto nuevo necesita su versión en español **y** en inglés.

## Configuración opcional

Al principio de [`script.js`](script.js) hay tres constantes. Con cada una vacía, esa función permanece oculta:

| Constante | Qué activa | Ejemplo |
| --- | --- | --- |
| `CV_PDF` | Botones de descargar CV (cabecera, contacto y paleta) | `"cv.pdf"` (con el archivo en la raíz) |
| `LINKEDIN` | Enlace a LinkedIn en cabecera, contacto y paleta | `"https://www.linkedin.com/in/..."` |
| `GOATCOUNTER` | Estadísticas de visitas sin cookies | `"angelluzon"` |

## Voz propia del avatar (opcional)

1. Sirve la carpeta en local (`python -m http.server 8000`).
2. Abre <http://localhost:8000/grabar.html>, graba las frases y descarga los WAV.
3. Guárdalos en una carpeta `audio/` en la raíz (`es-1.wav`, `en-1.wav`…).

Sin grabaciones, el avatar usa la voz del sistema. La voz se activa con el botón "Voz". Ahora solo se usa para las frases cortas del avatar; las respuestas de Preguntas y respuestas son texto (los `es-rN.wav` ya no se reproducen).

## Estructura

- `index.html`, `style.css`, `script.js`: la web.
- `frases.js`: frases del avatar y preguntas y respuestas.
- `grabar.html`, `grabar.js`: grabadora de voz (se puede borrar cuando ya no haga falta).
- `fonts/`: Inter y JetBrains Mono alojadas en local.
- `img/`, `og.png`: avatar, iconos e imagen para compartir el enlace.
- `404.html`, `sitemap.xml`, `robots.txt`.

## Próximos pasos

- [ ] Fichas de caso para otros 2 o 3 proyectos, con un dato real en "Resultado".
- [ ] Tres datos verdaderos en la cabecera (hero).
- [ ] Filtros de proyectos por categoría (Automatización, Web, Móvil, IA).
- [ ] Cuadrícula de cursos y certificados.
- [ ] Subir el CV (`CV_PDF`) y poner el enlace de LinkedIn (`LINKEDIN`).
- [ ] Revisar niveles de C# y TypeScript en las competencias (siguen como "inicial").
- [ ] Testimonios, cuando haya quien quiera recomendarte.
- [ ] Decidir si se vuelve a poner un cursor personalizado (ahora usa el del sistema; la función `iniciarCursor` está desactivada).
