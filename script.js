const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const puntero_fino = window.matchMedia("(pointer: fine)").matches && !reducirMovimiento;

const CORREO = "angel.luzon.job@gmail.com";

// Opcionales: rellena estas constantes para activarlos.
// Tu perfil de LinkedIn (https://www.linkedin.com/in/...): muestra el enlace en la cabecera, en Contacto y en la paleta.
const LINKEDIN = "";
// Tu código de GoatCounter (por ejemplo "angelluzon" si tu panel es angelluzon.goatcounter.com): activa las estadísticas de visitas sin cookies.
const GOATCOUNTER = "";
// Ruta de tu currículum en PDF (por ejemplo "cv.pdf" si subes el archivo a la raíz): muestra los botones de descarga.
const CV_PDF = "";

const traducciones = {
  es: {
    titulo: "Ángel Luzón Balanzá | Portfolio",
    etiqueta: "Portfolio",
    rol: "Desarrollador full stack junior · IA y automatización",
    scroll: "Explorar",
    qa_titulo: "Preguntas y respuestas",
    qa_intro: "Lo que suelen preguntarme, con respuestas directas. Elige un tema y abre la pregunta.",
    tab_sobre: "Sobre mí",
    tab_preguntas: "Preguntas",
    tab_competencias: "Competencias",
    tab_aptitudes: "Aptitudes",
    tab_proyectos: "Proyectos",
    tab_contacto: "Contacto",
    sobre_titulo: "Sobre mí",
    ficha_rol_label: "Rol",
    ficha_rol: "Desarrollador full stack junior",
    ficha_ubicacion_label: "Ubicación",
    ficha_ubicacion: "Zaragoza, España",
    ficha_formacion_label: "Formación",
    ficha_formacion: "Grado en Desarrollo de Aplicaciones Multiplataforma, con cursos de IA, Big Data, Cloud y Machine Learning",
    ficha_experiencia_label: "Experiencia",
    ficha_experiencia: "Desarrollador software junior: Azure y DevOps, OCR, bots, apps móviles con MAUI y automatizaciones",
    ficha_intereses_label: "Intereses",
    ficha_intereses: "IA, automatización, arquitectura de software y agentes inteligentes",
    frases: FRASES.es,
    sobre_1: "¡Hola! Soy Ángel. Me gusta construir cosas que funcionan y que, sobre todo, sirven para algo. Me muevo entre la web, la automatización y la IA, y disfruto cuando algo que parecía complicado se vuelve sencillo.",
    sobre_2: "Si buscas a alguien que aprenda rápido, pregunte lo necesario y se implique desde el primer día, creo que podemos entendernos.",
    competencias_titulo: "Competencias",
    filtro_todas: "Todas",
    filtro_lenguajes: "Lenguajes",
    filtro_frameworks: "Frameworks y datos",
    filtro_herramientas: "Herramientas",
    nivel_intermedio: "intermedio",
    nivel_inicial: "inicial",
    aptitudes_titulo: "Aptitudes",
    hint_libro: "Pulsa para abrir",
    aptitudes: [
      { nombre: "Compromiso", cita: "La perfección no se puede alcanzar, pero si persigues la perfección puedes alcanzar la excelencia.", autor: "Vince Lombardi" },
      { nombre: "Trabajo en equipo", cita: "Juntarse es un comienzo, mantenerse juntos es un progreso, trabajar juntos es un éxito.", autor: "Henry Ford" },
      { nombre: "Resolutivo", cita: "No he fracasado. Solo he encontrado 10.000 formas que no funcionan.", autor: "Thomas Edison" },
      { nombre: "Simpático", cita: "La gente olvidará lo que dijiste y lo que hiciste, pero nunca olvidará cómo la hiciste sentir.", autor: "Maya Angelou" },
      { nombre: "Proactivo", cita: "Fallas el 100% de los tiros que no intentas.", autor: "Wayne Gretzky" },
      { nombre: "Atento", cita: "La atención es la forma más rara y pura de generosidad.", autor: "Simone Weil" }
    ],
    proyectos_titulo: "Proyectos",
    contacto_titulo: "Contacto",
    correo_label: "Correo",
    copiar: "Copiar",
    copiado: "¡Copiado! ✅",
    copiar_error: "No se pudo copiar ❌",
    contacto_nota: "Si el enlace del correo no abre tu programa de correo, usa el botón Copiar.",
    contacto_intro: "¿Tienes una oferta, una idea o simplemente quieres saludar? Escríbeme.",
    cv: "Descargar CV",
    cv_label: "Currículum",
    hablemos: "Hablemos",
    pie: "Hecho a mano con HTML, CSS y JavaScript",
    tema_claro: "Cambiar a tema claro",
    tema_oscuro: "Cambiar a tema oscuro",
    menu_abrir: "Abrir menú",
    menu_cerrar: "Cerrar menú",
    tab_trayectoria: "Trayectoria",
    trayectoria_titulo: "Trayectoria",
    tl_tipo_exp: "Experiencia",
    tl_tipo_form: "Formación",
    tl_1_titulo: "Desarrollador software junior",
    tl_1_desc: "Azure y DevOps, Logic Apps, OCR, bots con y sin IA, apps móviles con MAUI y automatizaciones con n8n y Make.",
    tl_2_titulo: "Grado en Desarrollo de Aplicaciones Multiplataforma",
    tl_2_desc: "Desarrollo de aplicaciones para web, móvil y escritorio.",
    tl_3_titulo: "Cursos de especialización",
    tl_3_desc: "IA, Big Data, Cloud y Machine Learning, y un curso de liderazgo.",
    avatar_dibujo: "Avatar animado",
    avatar_voz: "Voz",
    avatar_alt_foto: "Foto de Ángel Luzón Balanzá",
    avatar_alt_dibujo: "Avatar de dibujo animado de Ángel, que habla con las frases del bocadillo",
    saltar: "Saltar al contenido",
    paleta_abrir: "Abrir la paleta de comandos",
    paleta_titulo: "Paleta de comandos",
    paleta_placeholder: "Escribe un comando o busca…",
    paleta_vacio: "Sin resultados",
    paleta_pie: "↑ ↓ moverse · Enter ejecutar · Esc cerrar",
    paleta_ir: "Ir a",
    paleta_acciones: "Acciones",
    paleta_preguntar: "Preguntar al avatar",
    cmd_idioma: "Cambiar idioma a English",
    cmd_avatar_on: "Activar el avatar animado",
    cmd_avatar_off: "Volver a mi foto",
    cmd_copiar: "Copiar el correo",
    cmd_github: "Abrir GitHub",
    cmd_linkedin: "Abrir LinkedIn",
    cmd_cv: "Descargar CV",
    subir: "Volver arriba",
    preguntas_titulo: "Pregúntame algo",
    proyecto_destacado: "Destacado",
    proy_portfolio_titulo: "Este portfolio",
    proy_portfolio_desc: "Mi web personal, hecha a mano y sin frameworks: tema claro y oscuro, español e inglés, y un avatar animado que habla y responde a tus preguntas.",
    proy_codigo: "Ver código",
    proy_avatar: "Probar el avatar",
    repos_cargando: "Cargando más proyectos de GitHub…",
    repos_vacio: "Pronto habrá más proyectos aquí.",
    repos_error: "No he podido cargar mis repositorios ahora mismo.",
    repos_github: "Ver mi GitHub",
    repo_sin_desc: "Sin descripción todavía.",
    repo_actualizado: "Actualizado",
    aviso_copiado: "Correo copiado ✅",
    ficha_idiomas_label: "Idiomas",
    ficha_idiomas: "Español · Inglés B2 (preparando el C1)",
    grupo_perfil: "Perfil",
    grupo_tecnico: "Técnico",
    grupo_personal: "Personal",
    grupo_trabajo: "Trabajo"
  },
  en: {
    titulo: "Ángel Luzón Balanzá | Portfolio",
    etiqueta: "Portfolio",
    rol: "Junior full stack developer · AI and automation",
    scroll: "Explore",
    qa_titulo: "Questions & answers",
    qa_intro: "What people usually ask me, with straight answers. Pick a topic and open a question.",
    tab_sobre: "About me",
    tab_preguntas: "Q&A",
    tab_competencias: "Skills",
    tab_aptitudes: "Soft skills",
    tab_proyectos: "Projects",
    tab_contacto: "Contact",
    sobre_titulo: "About me",
    ficha_rol_label: "Role",
    ficha_rol: "Junior full stack developer",
    ficha_ubicacion_label: "Location",
    ficha_ubicacion: "Zaragoza, Spain",
    ficha_formacion_label: "Education",
    ficha_formacion: "Degree in Multiplatform Application Development, plus courses in AI, Big Data, Cloud and Machine Learning",
    ficha_experiencia_label: "Experience",
    ficha_experiencia: "Junior software developer: Azure and DevOps, OCR, bots, mobile apps with MAUI and automation",
    ficha_intereses_label: "Interests",
    ficha_intereses: "AI, automation, software architecture and intelligent agents",
    frases: FRASES.en,
    sobre_1: "Hi! I'm Ángel. I like building things that work and, above all, that are useful. I move between the web, automation and AI, and I enjoy when something that seemed complicated turns out to be simple.",
    sobre_2: "If you're looking for someone who learns fast, asks the right questions and gets involved from day one, I think we could work well together.",
    competencias_titulo: "Skills",
    filtro_todas: "All",
    filtro_lenguajes: "Languages",
    filtro_frameworks: "Frameworks and data",
    filtro_herramientas: "Tools",
    nivel_intermedio: "intermediate",
    nivel_inicial: "beginner",
    aptitudes_titulo: "Soft skills",
    hint_libro: "Click to open",
    aptitudes: [
      { nombre: "Commitment", cita: "Perfection is not attainable, but if we chase perfection we can catch excellence.", autor: "Vince Lombardi" },
      { nombre: "Teamwork", cita: "Coming together is a beginning, keeping together is progress, working together is success.", autor: "Henry Ford" },
      { nombre: "Problem solver", cita: "I have not failed. I've just found 10,000 ways that won't work.", autor: "Thomas Edison" },
      { nombre: "Friendly", cita: "People will forget what you said and what you did, but they will never forget how you made them feel.", autor: "Maya Angelou" },
      { nombre: "Proactive", cita: "You miss 100% of the shots you don't take.", autor: "Wayne Gretzky" },
      { nombre: "Attentive", cita: "Attention is the rarest and purest form of generosity.", autor: "Simone Weil" }
    ],
    proyectos_titulo: "Projects",
    contacto_titulo: "Contact",
    correo_label: "Email",
    copiar: "Copy",
    copiado: "Copied! ✅",
    copiar_error: "Copy failed ❌",
    contacto_nota: "If the email link doesn't open your mail app, use the Copy button.",
    contacto_intro: "Got an offer, an idea or just want to say hi? Drop me a line.",
    cv: "Download CV",
    cv_label: "Résumé",
    hablemos: "Let's talk",
    pie: "Handmade with HTML, CSS and JavaScript",
    tema_claro: "Switch to light theme",
    tema_oscuro: "Switch to dark theme",
    menu_abrir: "Open menu",
    menu_cerrar: "Close menu",
    tab_trayectoria: "Journey",
    trayectoria_titulo: "Journey",
    tl_tipo_exp: "Experience",
    tl_tipo_form: "Education",
    tl_1_titulo: "Junior software developer",
    tl_1_desc: "Azure and DevOps, Logic Apps, OCR, bots with and without AI, mobile apps with MAUI and automation with n8n and Make.",
    tl_2_titulo: "Degree in Multiplatform Application Development",
    tl_2_desc: "Application development for web, mobile and desktop.",
    tl_3_titulo: "Specialization courses",
    tl_3_desc: "AI, Big Data, Cloud and Machine Learning, and a leadership course.",
    avatar_dibujo: "Animated avatar",
    avatar_voz: "Voice",
    avatar_alt_foto: "Photo of Ángel Luzón Balanzá",
    avatar_alt_dibujo: "Cartoon avatar of Ángel, speaking the phrases shown in the speech bubble",
    saltar: "Skip to content",
    paleta_abrir: "Open the command palette",
    paleta_titulo: "Command palette",
    paleta_placeholder: "Type a command or search…",
    paleta_vacio: "No results",
    paleta_pie: "↑ ↓ move · Enter run · Esc close",
    paleta_ir: "Go to",
    paleta_acciones: "Actions",
    paleta_preguntar: "Ask the avatar",
    cmd_idioma: "Switch language to Español",
    cmd_avatar_on: "Turn on the animated avatar",
    cmd_avatar_off: "Back to my photo",
    cmd_copiar: "Copy email",
    cmd_github: "Open GitHub",
    cmd_linkedin: "Open LinkedIn",
    cmd_cv: "Download CV",
    subir: "Back to top",
    preguntas_titulo: "Ask me something",
    proyecto_destacado: "Featured",
    proy_portfolio_titulo: "This portfolio",
    proy_portfolio_desc: "My personal website, handmade without frameworks: light and dark theme, Spanish and English, and an animated avatar that speaks and answers your questions.",
    proy_codigo: "View code",
    proy_avatar: "Try the avatar",
    repos_cargando: "Loading more projects from GitHub…",
    repos_vacio: "More projects will appear here soon.",
    repos_error: "I couldn't load my repositories right now.",
    repos_github: "See my GitHub",
    repo_sin_desc: "No description yet.",
    repo_actualizado: "Updated",
    aviso_copiado: "Email copied ✅",
    ficha_idiomas_label: "Languages",
    ficha_idiomas: "Spanish · English B2 (working towards C1)",
    grupo_perfil: "Profile",
    grupo_tecnico: "Technical",
    grupo_personal: "Personal",
    grupo_trabajo: "Work"
  }
};

// Competencias técnicas: para añadir una, basta con añadir un objeto a este array.
// "nivel" es opcional; solo se incluye donde está confirmado.
const competencias = [
  { nombre: "JavaScript", categoria: "lenguajes", nivel: "intermedio" },
  { nombre: "TypeScript", categoria: "lenguajes", nivel: "inicial" },
  { nombre: "C#", categoria: "lenguajes", nivel: "inicial" },
  { nombre: "HTML", categoria: "lenguajes" },
  { nombre: "CSS", categoria: "lenguajes" },
  { nombre: ".NET", categoria: "frameworks" },
  { nombre: "MongoDB", categoria: "frameworks" },
  { nombre: "eXist-DB", categoria: "frameworks" },
  { nombre: "Odoo", categoria: "frameworks" },
  { nombre: "Angular", categoria: "frameworks" },
  { nombre: "Radzen Blazor", categoria: "frameworks" },
  { nombre: ".NET MAUI", categoria: "frameworks" },
  { nombre: "Azure Logic Apps", categoria: "herramientas" },
  { nombre: "Azure DevOps", categoria: "herramientas" },
  { nombre: "n8n", categoria: "herramientas" },
  { nombre: "Make", categoria: "herramientas" },
  { nombre: "OCR", categoria: "herramientas" },
  { nombre: "Visual Studio Code", categoria: "herramientas" },
  { nombre: "Visual Studio", categoria: "herramientas" },
  { nombre: "NetBeans", categoria: "herramientas" },
  { nombre: "Android Studio", categoria: "herramientas" },
  { nombre: "Git / GitHub", categoria: "herramientas" }
];


const raiz = document.documentElement;
const elementoRol = document.getElementById("rol");
const elementoFrase = document.getElementById("frase");
const botonIdioma = document.getElementById("idioma");
const botonTema = document.getElementById("tema");
const botonMenu = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");
const barra = document.getElementById("barra");
const listaCompetencias = document.getElementById("lista-competencias");
const listaAptitudes = document.getElementById("lista-aptitudes");
const botonesFiltro = document.querySelectorAll(".filtro");
const enlacesMenu = document.querySelectorAll(".menu-enlace");
const botonCopiar = document.getElementById("copiar");

// Guardado seguro (localStorage puede no estar disponible)
function leer(clave) {
  try {
    return localStorage.getItem(clave);
  } catch {
    return null;
  }
}

function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, valor);
  } catch {
    // Si no se puede guardar, solo se pierde la preferencia
  }
}

// Idioma inicial: guardado > idioma del navegador > español
function idiomaInicial() {
  const guardado = leer("idioma");
  if (guardado === "es" || guardado === "en") return guardado;
  return navigator.language?.startsWith("en") ? "en" : "es";
}

let idioma = idiomaInicial();
let filtroActual = "todas";
let timerRol = null;
let timerFrases = null;
let timerFraseSalida = null;
let indiceFrase = 0;
let timerCopiar = null;

// ---------- Tema claro / oscuro ----------
function temaActual() {
  return raiz.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function actualizarBotonTema() {
  const t = traducciones[idioma];
  const oscuro = temaActual() === "dark";
  botonTema.setAttribute("aria-label", oscuro ? t.tema_claro : t.tema_oscuro);
  const meta = document.querySelector("meta[name=theme-color]");
  if (meta) meta.setAttribute("content", oscuro ? "#07080f" : "#f7f8fc");
}

botonTema.addEventListener("click", () => {
  const nuevo = temaActual() === "dark" ? "light" : "dark";
  raiz.setAttribute("data-theme", nuevo);
  guardar("tema", nuevo);
  actualizarBotonTema();
});

// ---------- Efecto de escritura en el rol ----------
function escribirTexto(elemento, texto, velocidad = 35) {
  clearInterval(timerRol);

  if (reducirMovimiento) {
    elemento.textContent = texto;
    return;
  }

  elemento.textContent = "";
  let i = 0;
  timerRol = setInterval(() => {
    elemento.textContent += texto.charAt(i);
    i++;
    if (i >= texto.length) clearInterval(timerRol);
  }, velocidad);
}

// ---------- Frases de Sobre mí que rotan ----------
function iniciarFrases(lang) {
  clearInterval(timerFrases);
  clearTimeout(timerFraseSalida);
  elementoFrase.classList.remove("salida");

  // En modo dibujo, el avatar es quien "dice" las frases (en un bocadillo)
  detenerHabla();
  const dibujo = modoAvatar === "dibujo";
  elementoFrase.classList.toggle("burbuja", dibujo);
  elementoFrase.setAttribute("aria-live", dibujo ? "off" : "polite");
  if (dibujo && !reducirMovimiento) {
    iniciarHabla();
    return;
  }

  const frases = traducciones[lang].frases;
  indiceFrase = 0;
  elementoFrase.textContent = frases[0];

  if (reducirMovimiento) return;

  timerFrases = setInterval(() => {
    elementoFrase.classList.add("salida");
    timerFraseSalida = setTimeout(() => {
      indiceFrase = (indiceFrase + 1) % frases.length;
      elementoFrase.textContent = frases[indiceFrase];
      elementoFrase.classList.remove("salida");
    }, 400);
  }, 4500);
}

// ---------- Competencias técnicas según filtro e idioma ----------
function renderCompetencias(lang) {
  const t = traducciones[lang];
  listaCompetencias.textContent = "";

  competencias
    .filter((c) => filtroActual === "todas" || c.categoria === filtroActual)
    .forEach((c, i) => {
      const li = document.createElement("li");
      li.className = "chip";
      li.dataset.categoria = c.categoria;
      li.style.animationDelay = `${i * 35}ms`;

      const nombre = document.createElement("span");
      nombre.className = "chip-nombre";
      nombre.textContent = c.nombre;
      li.appendChild(nombre);

      if (c.nivel) {
        const nivel = document.createElement("small");
        nivel.textContent = t[`nivel_${c.nivel}`];
        li.appendChild(nivel);
      }

      listaCompetencias.appendChild(li);
    });
}

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    filtroActual = boton.dataset.filtro;
    botonesFiltro.forEach((b) => {
      const activo = b === boton;
      b.classList.toggle("activo", activo);
      b.setAttribute("aria-pressed", String(activo));
    });
    renderCompetencias(idioma);
  });
});

// ---------- Aptitudes como libros: la tapa se abre y deja ver la cita ----------
function renderAptitudes(lang) {
  const t = traducciones[lang];
  listaAptitudes.textContent = "";

  t.aptitudes.forEach((apt) => {
    const li = document.createElement("li");
    li.className = "libro-item";

    const libro = document.createElement("div");
    libro.className = "libro";
    libro.tabIndex = 0;
    libro.setAttribute("role", "button");
    libro.setAttribute("aria-expanded", "false");
    libro.setAttribute("aria-label", apt.nombre);

    const pagina = document.createElement("div");
    pagina.className = "pagina";

    const cita = document.createElement("p");
    cita.className = "cita";
    cita.textContent = `"${apt.cita}"`;

    const autor = document.createElement("span");
    autor.className = "autor";
    autor.textContent = `— ${apt.autor}`;

    pagina.append(cita, autor);

    const tapa = document.createElement("div");
    tapa.className = "tapa";

    const titulo = document.createElement("span");
    titulo.className = "titulo";
    titulo.textContent = apt.nombre;

    tapa.appendChild(titulo);
    libro.append(pagina, tapa);

    const alternar = () => {
      const abierto = libro.classList.toggle("abierto");
      libro.setAttribute("aria-expanded", String(abierto));
    };

    libro.addEventListener("click", alternar);
    libro.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        alternar();
      }
    });

    const hint = document.createElement("span");
    hint.className = "hint";
    hint.textContent = t.hint_libro;

    li.append(libro, hint);
    listaAptitudes.appendChild(li);
  });
}

// ---------- Copiar el correo con confirmación visual ----------
async function copiarCorreo() {
  clearTimeout(timerCopiar);

  try {
    await navigator.clipboard.writeText(CORREO);
    botonCopiar.textContent = traducciones[idioma].copiado;
    mostrarAviso(traducciones[idioma].aviso_copiado);
  } catch {
    botonCopiar.textContent = traducciones[idioma].copiar_error;
  }

  timerCopiar = setTimeout(() => {
    botonCopiar.textContent = traducciones[idioma].copiar;
  }, 2000);
}

botonCopiar.addEventListener("click", copiarCorreo);

// ---------- Idioma ----------
function aplicarIdioma(lang) {
  const t = traducciones[lang];

  raiz.lang = lang;
  document.title = t.titulo;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el === elementoRol) return;
    const texto = t[el.dataset.i18n];
    if (typeof texto === "string") el.textContent = texto;
  });

  escribirTexto(elementoRol, t.rol);
  iniciarFrases(lang);
  renderCompetencias(lang);
  renderAptitudes(lang);
  actualizarBotonTema();
  actualizarBotonMenu();
  actualizarTextosAvatar();
  preguntaActiva = -1;
  renderPreguntas(lang);
  renderRepos(lang);
  actualizarAtributosI18n(t);

  botonIdioma.textContent = lang === "es" ? "EN" : "ES";
  botonIdioma.setAttribute("aria-label", lang === "es" ? "Change language to English" : "Cambiar idioma a español");
}

botonIdioma.addEventListener("click", () => {
  idioma = idioma === "es" ? "en" : "es";
  guardar("idioma", idioma);
  aplicarIdioma(idioma);
});

// ---------- Menú móvil ----------
function actualizarBotonMenu() {
  const abierto = menu.classList.contains("abierto");
  const t = traducciones[idioma];
  botonMenu.setAttribute("aria-expanded", String(abierto));
  botonMenu.setAttribute("aria-label", abierto ? t.menu_cerrar : t.menu_abrir);
}

function cerrarMenu() {
  menu.classList.remove("abierto");
  actualizarBotonMenu();
}

botonMenu.addEventListener("click", () => {
  menu.classList.toggle("abierto");
  actualizarBotonMenu();
});

enlacesMenu.forEach((a) => a.addEventListener("click", cerrarMenu));

document.addEventListener("click", (e) => {
  if (!barra.contains(e.target)) cerrarMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarMenu();
});

// ---------- Barra con fondo al hacer scroll ----------
function actualizarBarra() {
  barra.classList.toggle("con-scroll", window.scrollY > 20);
}
window.addEventListener("scroll", actualizarBarra, { passive: true });
actualizarBarra();

// ---------- Resalta en el menú la sección visible ----------
function marcarEnlace(id) {
  enlacesMenu.forEach((a) => {
    const activo = id !== null && a.getAttribute("href") === `#${id}`;
    a.classList.toggle("activo", activo);
    if (activo) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });
}

function iniciarScrollspy() {
  if (!("IntersectionObserver" in window)) return;

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        // Al volver al hero, ninguna sección queda marcada
        marcarEnlace(entrada.target.id === "inicio" ? null : entrada.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  document.querySelectorAll("#inicio, main .seccion").forEach((s) => observador.observe(s));
}

// ---------- Elementos que aparecen al hacer scroll ----------
function iniciarRevelado() {
  if (reducirMovimiento || !("IntersectionObserver" in window)) return;

  raiz.classList.add("js-revelar");

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".revelar").forEach((el) => observador.observe(el));
}

// ---------- CV: los enlaces se muestran cuando CV_PDF tiene la ruta del archivo ----------
function configurarCV() {
  if (!CV_PDF) return;
  cvDisponible = true;
  document.querySelectorAll(".enlace-cv").forEach((a) => {
    a.href = CV_PDF;
  });
  document.querySelectorAll(".enlace-cv, .enlace-cv-item").forEach((el) => {
    el.hidden = false;
  });
}

// ---------- Cursor: punto que sigue al ratón y anillo con retardo ----------
function iniciarCursor() {
  // Cursor personalizado desactivado: se usa el puntero normal del sistema.
  // Para volver a activarlo, quita la línea siguiente.
  return;
  if (!puntero_fino) return;

  raiz.classList.add("puntero-fino");

  const punto = document.getElementById("cursor-punto");
  const anillo = document.getElementById("cursor-anillo");

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let ax = x;
  let ay = y;

  window.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    punto.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  });

  function seguirAnillo() {
    ax += (x - ax) * 0.18;
    ay += (y - ay) * 0.18;
    anillo.style.transform = `translate(${ax}px, ${ay}px) translate(-50%, -50%)`;
    requestAnimationFrame(seguirAnillo);
  }
  seguirAnillo();

  const interactivos = "a, button, .libro, .chip, .contacto-item";

  document.addEventListener("mouseover", (e) => {
    anillo.classList.toggle("hover", Boolean(e.target.closest(interactivos)));
  });

  raiz.addEventListener("mouseleave", () => {
    punto.style.opacity = "0";
    anillo.style.opacity = "0";
  });

  raiz.addEventListener("mouseenter", () => {
    punto.style.opacity = "1";
    anillo.style.opacity = "";
  });
}

// ---------- Inclinación sutil de las competencias al pasar el ratón ----------
function iniciarInclinacion() {
  if (!puntero_fino) return;

  let activa = null;

  document.addEventListener("mousemove", (e) => {
    const el = e.target.closest?.(".chip");

    if (activa && activa !== el) activa.style.transform = "";
    activa = el;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${-py * 8}deg) rotateY(${px * 8}deg) translateY(-2px)`;
  });
}

// ---------- Avatar de dibujo animado (opción extra) ----------
const zonaAvatar = document.getElementById("avatar-zona");
const dibujoAvatar = document.getElementById("avatar-dibujo");
const imgAvatar = zonaAvatar.querySelector("img");
const botonDibujo = document.getElementById("modo-dibujo");
const botonVoz = document.getElementById("voz");
const sintetizador =
  "speechSynthesis" in window && "SpeechSynthesisUtterance" in window ? window.speechSynthesis : null;

let modoAvatar = leer("avatar") === "dibujo" ? "dibujo" : "foto";
let vozActiva = false;
let avatarVisible = true;
let pestanaVisible = !document.hidden;
let tokenHabla = 0;
let timerHabla = null;
let timerBoca = null;
let audioActual = null;

const cacheVoz = new Map();

// Forma de la boca según la letra: a abierta, o/u redonda, e/i media, b/m/p y signos cerrada
function visema(ch) {
  const c = ch.toLowerCase();
  if ("aáàä".includes(c)) return "a";
  if ("oóòöuúùü".includes(c)) return "o";
  if ("eéèëiíìï".includes(c)) return "m";
  if ("bmp".includes(c) || !/\p{L}/u.test(c)) return "c";
  return "m";
}

function setBoca(forma) {
  dibujoAvatar.dataset.boca = forma;
}

// ---------- Gestos humanos del avatar: sonrisa, cejas, parpadeo y mirada ----------
let timerSonrisa = null;
let timerCeja = null;
let ultimoPuntero = 0; // momento del último movimiento del ratón

// Al acabar de hablar sonríe un instante antes de cerrar la boca
function sonreir() {
  setBoca("s");
  clearTimeout(timerSonrisa);
  timerSonrisa = setTimeout(() => {
    if (dibujoAvatar.dataset.boca === "s") setBoca("c");
  }, 1400);
}

function levantarCeja(ms = 500) {
  dibujoAvatar.dataset.ceja = "arriba";
  clearTimeout(timerCeja);
  timerCeja = setTimeout(() => {
    delete dibujoAvatar.dataset.ceja;
  }, ms);
}

// Parpadea a intervalos irregulares, y a veces dos veces seguidas
function iniciarParpadeo() {
  if (reducirMovimiento) return;

  const parpadear = () => {
    if (modoAvatar === "dibujo" && avatarVisible && pestanaVisible) {
      dibujoAvatar.classList.add("parpadeando");
      setTimeout(() => dibujoAvatar.classList.remove("parpadeando"), 200);
    }
    setTimeout(parpadear, Math.random() < 0.2 ? 320 : 2200 + Math.random() * 3600);
  };
  setTimeout(parpadear, 1800);
}

// ax y ay van de -1 a 1: hacia dónde mira (los ojos se mueven más que la cabeza)
function mirar(ax, ay) {
  const estilo = dibujoAvatar.style;
  estilo.setProperty("--mx", `${(ax * 2.4).toFixed(2)}px`);
  estilo.setProperty("--my", `${(ay * 1.5).toFixed(2)}px`);
  estilo.setProperty("--giro", `${(ax * 2.2).toFixed(2)}deg`);
  estilo.setProperty("--cabeceo", `${(ay * 1.1).toFixed(2)}px`);
}

// Sigue el cursor con la mirada y, si no hay ratón en movimiento, mira a su alrededor de vez en cuando
function iniciarMirada() {
  if (reducirMovimiento) return;

  if (puntero_fino) {
    let pendiente = false;
    let ultimo = null;

    const seguir = () => {
      pendiente = false;
      if (modoAvatar !== "dibujo" || !avatarVisible || !ultimo) return;
      const r = dibujoAvatar.getBoundingClientRect();
      const dx = (ultimo.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
      const dy = (ultimo.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
      mirar(Math.max(-1, Math.min(1, dx)), Math.max(-1, Math.min(1, dy)));
    };

    window.addEventListener(
      "pointermove",
      (e) => {
        ultimo = e;
        ultimoPuntero = performance.now();
        if (!pendiente) {
          pendiente = true;
          requestAnimationFrame(seguir);
        }
      },
      { passive: true }
    );

    document.documentElement.addEventListener("mouseleave", () => mirar(0, 0));
  }

  const suelta = () => {
    if (modoAvatar === "dibujo" && avatarVisible && pestanaVisible && performance.now() - ultimoPuntero > 2500) {
      mirar((Math.random() * 2 - 1) * 0.8, (Math.random() * 2 - 1) * 0.5);
      setTimeout(() => {
        if (performance.now() - ultimoPuntero > 1500) mirar(0, 0);
      }, 900 + Math.random() * 900);
    }
    setTimeout(suelta, 2500 + Math.random() * 3500);
  };
  setTimeout(suelta, 3000);
}

function esperar(ms) {
  return new Promise((resolve) => {
    timerHabla = setTimeout(resolve, ms);
  });
}

// Voz propia: audio/es-1.wav, audio/es-2.wav... (se generan con grabar.html).
// Devuelve el audio listo, o null si no existe ese archivo.
function cargarAudio(lang, n) {
  const clave = `${lang}-${n}`;
  if (!cacheVoz.has(clave)) {
    cacheVoz.set(
      clave,
      new Promise((resolve) => {
        const audio = new Audio();
        audio.preload = "auto";
        const fin = (valido) => {
          clearTimeout(limite);
          resolve(valido ? audio : null);
        };
        const limite = setTimeout(() => fin(false), 3000);
        audio.addEventListener(
          "loadedmetadata",
          () => fin(Number.isFinite(audio.duration) && audio.duration > 0),
          { once: true }
        );
        audio.addEventListener("error", () => fin(false), { once: true });
        audio.src = `audio/${clave}.wav`;
      })
    );
  }
  return cacheVoz.get(clave);
}

// Si falta la primera grabación del idioma, se asume que no hay voz propia y no se piden las demás
async function vozGrabada(lang, n) {
  if (n !== "1" && (await cargarAudio(lang, "1")) === null) return null;
  return cargarAudio(lang, n);
}

function elegirVoz(lang) {
  const voces = sintetizador.getVoices().filter((v) => v.lang.toLowerCase().startsWith(lang));
  return voces.find((v) => v.localService) || voces[0] || null;
}

// Para la voz propia y la del sistema
function silenciar() {
  if (sintetizador) sintetizador.cancel();
  if (audioActual) {
    const audio = audioActual;
    audioActual = null;
    audio.pause();
    audio.dispatchEvent(new Event("ended"));
  }
}

function detenerHabla() {
  tokenHabla++;
  // La rotación de frases del modo foto no debe pisar lo que dice el avatar
  clearInterval(timerFrases);
  clearTimeout(timerFraseSalida);
  elementoFrase.classList.remove("salida");
  clearTimeout(timerHabla);
  clearInterval(timerBoca);
  silenciar();
  setBoca("c");
  dibujoAvatar.classList.remove("hablando");
  elementoFrase.classList.remove("escribiendo");
}

// Escribe el texto en el bocadillo letra a letra, moviendo la boca.
// Con la voz activa habla con tu grabación (si existe) o con la voz del sistema.
async function decir(texto, token, clave, etiqueta = "") {
  const grabada = vozActiva ? await vozGrabada(idioma, clave) : null;
  if (token !== tokenHabla) return;

  return new Promise((resolve) => {
    const visible = document.createElement("span");
    visible.className = "frase-visible";
    visible.setAttribute("aria-hidden", "true");

    // Reserva el espacio final para que el bocadillo no cambie de tamaño al escribir
    const reserva = document.createElement("span");
    reserva.className = "frase-reserva";
    reserva.setAttribute("aria-hidden", "true");
    reserva.textContent = texto;

    const lector = document.createElement("span");
    lector.className = "sr-only";
    lector.textContent = etiqueta ? `${etiqueta} ${texto}` : texto;

    const piezas = [visible, reserva, lector];
    if (etiqueta) {
      const rotulo = document.createElement("span");
      rotulo.className = "frase-etiqueta";
      rotulo.setAttribute("aria-hidden", "true");
      rotulo.textContent = `› ${etiqueta}`;
      piezas.unshift(rotulo);
    }
    elementoFrase.replaceChildren(...piezas);
    elementoFrase.classList.add("escribiendo");
    dibujoAvatar.classList.add("hablando");
    levantarCeja(650);

    let tecleoFin = false;
    let vozFin = !(vozActiva && (grabada || sintetizador));

    const terminar = () => {
      if (token !== tokenHabla) return resolve();
      if (!tecleoFin || !vozFin) return;
      clearInterval(timerBoca);
      sonreir();
      dibujoAvatar.classList.remove("hablando");
      elementoFrase.classList.remove("escribiendo");
      resolve();
    };

    if (!vozFin) {
      let duracionMs = texto.length * 130;

      if (grabada) {
        duracionMs = grabada.duration * 1000;
        audioActual = grabada;
        grabada.currentTime = 0;
        grabada.onended = () => {
          if (audioActual === grabada) audioActual = null;
          grabada.onended = null;
          vozFin = true;
          terminar();
        };
        grabada.play().catch(() => {
          vozFin = true;
          terminar();
        });
      } else {
        const u = new SpeechSynthesisUtterance(texto);
        u.lang = idioma === "es" ? "es-ES" : "en-US";
        const voz = elegirVoz(idioma);
        if (voz) u.voice = voz;
        u.pitch = 1.15;
        u.onend = u.onerror = () => {
          vozFin = true;
          terminar();
        };
        sintetizador.speak(u);
      }

      // Red de seguridad por si el navegador nunca avisa del final de la voz
      setTimeout(() => {
        vozFin = true;
        terminar();
      }, duracionMs + 4000);
    }

    // Con voz grabada, el texto se escribe al ritmo real de tu voz
    const pausas = [...texto].filter((c) => ".,;:!?".includes(c)).length;
    const velocidad = grabada
      ? Math.max(25, (grabada.duration * 1000 * 0.95 - pausas * 180) / texto.length)
      : 62;

    let i = 0;
    const paso = () => {
      if (token !== tokenHabla) return resolve();

      // Si no se ve el avatar o la pestaña, se pausa
      if (!avatarVisible || !pestanaVisible) {
        timerHabla = setTimeout(paso, 300);
        return;
      }

      if (i >= texto.length) {
        tecleoFin = true;
        // Si la voz sigue hablando, la boca sigue moviéndose
        if (!vozFin) {
          clearInterval(timerBoca);
          timerBoca = setInterval(() => setBoca("mao"[Math.floor(Math.random() * 3)]), 130);
        }
        terminar();
        return;
      }

      const ch = texto[i++];
      visible.textContent += ch;
      setBoca(visema(ch));
      if (ch === "?" || ch === "!") levantarCeja(500);
      timerHabla = setTimeout(paso, ".,;:!?".includes(ch) ? velocidad + 180 : velocidad);
    };
    paso();
  });
}

async function bucleHabla(token) {
  const frases = traducciones[idioma].frases;
  let i = 0;
  while (token === tokenHabla) {
    const posicion = i % frases.length;
    await decir(frases[posicion], token, String(posicion + 1));
    if (token !== tokenHabla) return;
    await esperar(2400);
    i++;
  }
}

function iniciarHabla() {
  const token = tokenHabla;
  // Pequeña espera: algunos navegadores ignoran speak() justo después de cancel()
  timerHabla = setTimeout(() => bucleHabla(token), 150);
}

function actualizarTextosAvatar() {
  const t = traducciones[idioma];
  imgAvatar.alt = t.avatar_alt_foto;
  dibujoAvatar.setAttribute("aria-label", t.avatar_alt_dibujo);
}

function aplicarModoAvatar() {
  const dibujo = modoAvatar === "dibujo";
  zonaAvatar.dataset.avatar = modoAvatar;
  botonDibujo.setAttribute("aria-pressed", String(dibujo));
  imgAvatar.setAttribute("aria-hidden", String(dibujo));
  dibujoAvatar.setAttribute("aria-hidden", String(!dibujo));
  botonVoz.hidden = !(dibujo && !reducirMovimiento);
  if (!dibujo) {
    vozActiva = false;
    botonVoz.setAttribute("aria-pressed", "false");
  }
}

botonDibujo.addEventListener("click", () => {
  modoAvatar = modoAvatar === "dibujo" ? "foto" : "dibujo";
  guardar("avatar", modoAvatar);
  aplicarModoAvatar();
  iniciarFrases(idioma);
});

// La voz solo se activa con un clic (los navegadores no permiten sonar solos)
botonVoz.addEventListener("click", () => {
  vozActiva = !vozActiva;
  botonVoz.setAttribute("aria-pressed", String(vozActiva));
  iniciarFrases(idioma);
});

// Deja de hablar si el avatar sale de pantalla o se cambia de pestaña
const zonaTexto = document.querySelector(".sobre-texto");
if ("IntersectionObserver" in window) {
  new IntersectionObserver(
    ([entrada]) => {
      avatarVisible = entrada.isIntersecting;
      if (!avatarVisible) silenciar();
    },
    { threshold: 0.1 }
  ).observe(zonaTexto);
}

document.addEventListener("visibilitychange", () => {
  pestanaVisible = !document.hidden;
  if (document.hidden) silenciar();
});

window.addEventListener("pagehide", silenciar);

// ---------- Extras: preguntas al avatar, proyectos de GitHub, paleta de comandos y detalles ----------
const listaPreguntas = document.getElementById("lista-preguntas");
const tabsPreguntas = document.getElementById("tabs-preguntas");
const gridProyectos = document.getElementById("lista-proyectos");
const estadoRepos = document.getElementById("repos-estado");
const barraProgreso = document.getElementById("progreso");
const botonSubir = document.getElementById("subir");
const avisoFlotante = document.getElementById("aviso");

const USUARIO_GITHUB = "AngelLuzon";
const REPO_PORTFOLIO = "AngelLuzon.github.io";

let cvDisponible = false;
let repos = null; // null = cargando, "error" = fallo, o lista de repositorios
let timerAviso = null;

// Atributos traducibles (aria-label y placeholder)
function actualizarAtributosI18n(t) {
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t[el.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t[el.dataset.i18nPlaceholder];
  });
}

// ---------- Aviso flotante ----------
function mostrarAviso(texto) {
  clearTimeout(timerAviso);
  avisoFlotante.textContent = texto;
  avisoFlotante.classList.add("visible");
  timerAviso = setTimeout(() => avisoFlotante.classList.remove("visible"), 2200);
}

// ---------- Preguntas al avatar ----------
const GRUPOS_PREGUNTAS = ["perfil", "tecnico", "personal", "trabajo"];
let grupoPreguntas = "perfil";
let preguntaActiva = -1;

function renderPreguntas(lang) {
  const t = traducciones[lang];

  tabsPreguntas.textContent = "";
  GRUPOS_PREGUNTAS.forEach((g) => {
    const activo = g === grupoPreguntas;
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = activo ? "filtro activo" : "filtro";
    tab.setAttribute("aria-pressed", String(activo));
    tab.textContent = t[`grupo_${g}`];
    tab.addEventListener("click", () => {
      grupoPreguntas = g;
      preguntaActiva = -1;
      renderPreguntas(idioma);
    });
    tabsPreguntas.appendChild(tab);
  });

  // Cada pregunta es un desplegable con su propia respuesta
  listaPreguntas.textContent = "";
  PREGUNTAS[lang].forEach((q, i) => {
    if (q.g !== grupoPreguntas) return;
    const abierta = i === preguntaActiva;

    const item = document.createElement("div");
    item.className = "qa-item" + (abierta ? " abierta" : "");
    item.dataset.indice = String(i);

    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "qa-pregunta";
    boton.id = `qa-p-${i}`;
    boton.setAttribute("aria-expanded", String(abierta));
    boton.setAttribute("aria-controls", `qa-r-${i}`);
    const texto = document.createElement("span");
    texto.textContent = q.p;
    const icono = document.createElement("span");
    icono.className = "qa-icono";
    icono.setAttribute("aria-hidden", "true");
    boton.append(texto, icono);
    boton.addEventListener("click", () => abrirPregunta(preguntaActiva === i ? -1 : i));

    const panel = document.createElement("div");
    panel.className = "qa-respuesta";
    panel.id = `qa-r-${i}`;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", boton.id);
    const cuerpo = document.createElement("p");
    cuerpo.textContent = q.r;
    const interior = document.createElement("div");
    interior.appendChild(cuerpo);
    panel.appendChild(interior);

    item.append(boton, panel);
    listaPreguntas.appendChild(item);
  });
}

// Abre una pregunta (o cierra todas con -1) sin volver a pintar la lista
function abrirPregunta(indice) {
  preguntaActiva = indice;
  listaPreguntas.querySelectorAll(".qa-item").forEach((item) => {
    const abierta = Number(item.dataset.indice) === indice;
    item.classList.toggle("abierta", abierta);
    item.querySelector(".qa-pregunta").setAttribute("aria-expanded", String(abierta));
  });
}

// Desde la paleta de comandos: va a la sección, cambia de tema y abre la pregunta
function preguntar(indice, desdePaleta = false) {
  const q = PREGUNTAS[idioma][indice];
  if (!q) return;

  if (q.g !== grupoPreguntas) {
    grupoPreguntas = q.g;
    renderPreguntas(idioma);
  }
  abrirPregunta(indice);

  const destino = desdePaleta ? document.getElementById(`qa-p-${indice}`) : null;
  if (destino) destino.scrollIntoView({ behavior: reducirMovimiento ? "auto" : "smooth", block: "center" });
}

// ---------- Proyectos: ficha propia + repositorios de GitHub ----------
const COLORES_LENGUAJE = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  "C#": "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572a5",
  Java: "#b07219",
  Kotlin: "#a97bff"
};

async function cargarRepos() {
  try {
    let datos = null;

    // Caché de sesión para no gastar el límite de peticiones de GitHub
    try {
      const guardado = JSON.parse(sessionStorage.getItem("repos") || "null");
      if (guardado && Date.now() - guardado.hora < 10 * 60 * 1000) datos = guardado.datos;
    } catch {
      // sin sessionStorage, se pide siempre
    }

    if (!datos) {
      const respuesta = await fetch(`https://api.github.com/users/${USUARIO_GITHUB}/repos?per_page=100&sort=updated`, {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!respuesta.ok) throw new Error(String(respuesta.status));
      datos = await respuesta.json();
      try {
        sessionStorage.setItem("repos", JSON.stringify({ hora: Date.now(), datos }));
      } catch {
        // no pasa nada si no se puede guardar
      }
    }

    repos = datos
      .filter((r) => !r.fork && !r.archived && r.name !== REPO_PORTFOLIO)
      .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at));
  } catch {
    repos = "error";
  }

  renderRepos(idioma);
}

function crearTarjetaRepo(r, t, lang) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "proyecto tarjeta repo";

  const titulo = document.createElement("h3");
  const enlace = document.createElement("a");
  enlace.href = r.html_url;
  enlace.target = "_blank";
  enlace.rel = "noopener";
  enlace.textContent = r.name;
  titulo.appendChild(enlace);

  const descripcion = document.createElement("p");
  if (r.description) {
    descripcion.textContent = r.description;
  } else {
    descripcion.className = "proyecto-sin-desc";
    descripcion.textContent = t.repo_sin_desc;
  }

  tarjeta.append(titulo, descripcion);

  if (Array.isArray(r.topics) && r.topics.length) {
    const temas = document.createElement("ul");
    temas.className = "tecnologias";
    r.topics.slice(0, 5).forEach((tema) => {
      const li = document.createElement("li");
      li.textContent = tema;
      temas.appendChild(li);
    });
    tarjeta.appendChild(temas);
  }

  const meta = document.createElement("div");
  meta.className = "proyecto-meta";

  if (r.language) {
    const lenguaje = document.createElement("span");
    lenguaje.className = "lenguaje";
    lenguaje.style.setProperty("--color-lenguaje", COLORES_LENGUAJE[r.language] || "var(--acento)");
    lenguaje.textContent = r.language;
    meta.appendChild(lenguaje);
  }

  if (r.stargazers_count > 0) {
    const estrellas = document.createElement("span");
    estrellas.textContent = `★ ${r.stargazers_count}`;
    meta.appendChild(estrellas);
  }

  if (r.pushed_at) {
    const fecha = document.createElement("span");
    const formato = new Intl.DateTimeFormat(lang, { year: "numeric", month: "short" });
    fecha.textContent = `${t.repo_actualizado} ${formato.format(new Date(r.pushed_at))}`;
    meta.appendChild(fecha);
  }

  tarjeta.appendChild(meta);
  return tarjeta;
}

function renderRepos(lang) {
  const t = traducciones[lang];
  gridProyectos.querySelectorAll(".repo").forEach((el) => el.remove());
  estadoRepos.textContent = "";

  if (repos === null) {
    estadoRepos.textContent = t.repos_cargando;
    return;
  }

  if (Array.isArray(repos) && repos.length) {
    repos.forEach((r) => gridProyectos.appendChild(crearTarjetaRepo(r, t, lang)));
    return;
  }

  estadoRepos.textContent = `${repos === "error" ? t.repos_error : t.repos_vacio} `;
  const enlace = document.createElement("a");
  enlace.href = `https://github.com/${USUARIO_GITHUB}`;
  enlace.target = "_blank";
  enlace.rel = "noopener";
  enlace.textContent = t.repos_github;
  estadoRepos.appendChild(enlace);
}

// ---------- Paleta de comandos (Ctrl/Cmd + K) ----------
const dialogoPaleta = document.getElementById("paleta");
const entradaPaleta = document.getElementById("paleta-entrada");
const listaPaleta = document.getElementById("paleta-lista");
const botonPaleta = document.getElementById("paleta-abrir");

let opcionesPaleta = [];

function sinAcentos(texto) {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function irA(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: reducirMovimiento ? "auto" : "smooth", block: "start" });
}

function comandosPaleta() {
  const t = traducciones[idioma];
  const lista = [];

  [
    ["sobre", "tab_sobre"],
    ["preguntas", "tab_preguntas"],
    ["trayectoria", "tab_trayectoria"],
    ["competencias", "tab_competencias"],
    ["aptitudes", "tab_aptitudes"],
    ["proyectos", "tab_proyectos"],
    ["contacto", "tab_contacto"]
  ].forEach(([id, clave]) => lista.push({ grupo: t.paleta_ir, texto: t[clave], icono: "→", accion: () => irA(id) }));

  const oscuro = temaActual() === "dark";
  lista.push({ grupo: t.paleta_acciones, texto: oscuro ? t.tema_claro : t.tema_oscuro, icono: oscuro ? "☀" : "☾", accion: () => botonTema.click() });
  lista.push({ grupo: t.paleta_acciones, texto: t.cmd_idioma, icono: "文", accion: () => botonIdioma.click() });
  lista.push({
    grupo: t.paleta_acciones,
    texto: modoAvatar === "dibujo" ? t.cmd_avatar_off : t.cmd_avatar_on,
    icono: "✦",
    accion: () => botonDibujo.click()
  });
  lista.push({ grupo: t.paleta_acciones, texto: t.cmd_copiar, icono: "✉", accion: copiarCorreo });
  lista.push({
    grupo: t.paleta_acciones,
    texto: t.cmd_github,
    icono: "↗",
    accion: () => window.open(`https://github.com/${USUARIO_GITHUB}`, "_blank", "noopener")
  });
  if (LINKEDIN) {
    lista.push({ grupo: t.paleta_acciones, texto: t.cmd_linkedin, icono: "↗", accion: () => window.open(LINKEDIN, "_blank", "noopener") });
  }
  if (cvDisponible) {
    lista.push({
      grupo: t.paleta_acciones,
      texto: t.cmd_cv,
      icono: "⬇",
      accion: () => {
        const a = document.createElement("a");
        a.href = CV_PDF;
        a.download = "";
        a.click();
      }
    });
  }

  PREGUNTAS[idioma].forEach((q, i) =>
    lista.push({ grupo: t.paleta_preguntar, texto: q.p, icono: "?", accion: () => preguntar(i, true) })
  );

  return lista;
}

function marcarOpcion(i) {
  opcionesPaleta.forEach((o, j) => o.li.setAttribute("aria-selected", String(j === i)));
  if (opcionesPaleta[i]) {
    entradaPaleta.setAttribute("aria-activedescendant", opcionesPaleta[i].li.id);
    opcionesPaleta[i].li.scrollIntoView({ block: "nearest" });
  }
}

function ejecutarComando(comando) {
  dialogoPaleta.close();
  setTimeout(comando.accion, 60);
}

function pintarPaleta() {
  const t = traducciones[idioma];
  const consulta = sinAcentos(entradaPaleta.value.trim()).split(/\s+/).filter(Boolean);
  const visibles = comandosPaleta().filter((c) => {
    const texto = sinAcentos(`${c.grupo} ${c.texto}`);
    return consulta.every((q) => texto.includes(q));
  });

  listaPaleta.textContent = "";
  opcionesPaleta = [];
  entradaPaleta.removeAttribute("aria-activedescendant");

  if (!visibles.length) {
    const vacio = document.createElement("li");
    vacio.className = "paleta-vacio";
    vacio.setAttribute("role", "presentation");
    vacio.textContent = t.paleta_vacio;
    listaPaleta.appendChild(vacio);
    return;
  }

  let grupoActual = "";
  visibles.forEach((c, i) => {
    if (c.grupo !== grupoActual) {
      grupoActual = c.grupo;
      const cabecera = document.createElement("li");
      cabecera.className = "paleta-grupo";
      cabecera.setAttribute("role", "presentation");
      cabecera.textContent = grupoActual;
      listaPaleta.appendChild(cabecera);
    }

    const li = document.createElement("li");
    li.id = `paleta-op-${i}`;
    li.className = "paleta-opcion";
    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", "false");

    const icono = document.createElement("span");
    icono.className = "paleta-icono";
    icono.setAttribute("aria-hidden", "true");
    icono.textContent = c.icono;

    const texto = document.createElement("span");
    texto.textContent = c.texto;

    li.append(icono, texto);
    li.addEventListener("click", () => ejecutarComando(c));
    li.addEventListener("mousemove", () => marcarOpcion(i));
    listaPaleta.appendChild(li);
    opcionesPaleta.push({ li, comando: c });
  });

  marcarOpcion(0);
}

function alternarPaleta() {
  if (dialogoPaleta.open) {
    dialogoPaleta.close();
    return;
  }
  entradaPaleta.value = "";
  pintarPaleta();
  dialogoPaleta.showModal();
  entradaPaleta.focus();
}

function iniciarPaleta() {
  if (typeof dialogoPaleta.showModal !== "function") {
    botonPaleta.hidden = true;
    return;
  }

  botonPaleta.addEventListener("click", alternarPaleta);
  entradaPaleta.addEventListener("input", pintarPaleta);

  entradaPaleta.addEventListener("keydown", (e) => {
    if (!opcionesPaleta.length) return;
    const actual = opcionesPaleta.findIndex((o) => o.li.getAttribute("aria-selected") === "true");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      marcarOpcion((actual + 1) % opcionesPaleta.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      marcarOpcion((actual - 1 + opcionesPaleta.length) % opcionesPaleta.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (opcionesPaleta[actual]) ejecutarComando(opcionesPaleta[actual].comando);
    }
  });

  // Clic fuera de la caja (en el fondo oscuro) cierra la paleta
  dialogoPaleta.addEventListener("click", (e) => {
    if (e.target === dialogoPaleta) dialogoPaleta.close();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      alternarPaleta();
    }
  });
}

// ---------- Progreso de scroll y botón de volver arriba ----------
function iniciarProgreso() {
  let pendiente = false;

  const actualizar = () => {
    pendiente = false;
    const maximo = document.documentElement.scrollHeight - window.innerHeight;
    const avance = maximo > 0 ? Math.min(1, window.scrollY / maximo) : 0;
    barraProgreso.style.transform = `scaleX(${avance})`;
    botonSubir.hidden = window.scrollY < 700;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!pendiente) {
        pendiente = true;
        requestAnimationFrame(actualizar);
      }
    },
    { passive: true }
  );
  window.addEventListener("resize", actualizar);
  actualizar();

  botonSubir.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducirMovimiento ? "auto" : "smooth" });
  });
}

// ---------- Opcionales que se activan rellenando una constante al principio del archivo ----------
function iniciarOpcionales() {
  if (LINKEDIN) {
    document.querySelectorAll(".enlace-linkedin").forEach((a) => {
      a.href = LINKEDIN;
    });
    document.querySelectorAll(".enlace-linkedin, .enlace-linkedin-item").forEach((el) => {
      el.hidden = false;
    });
  }

  // Estadísticas de visitas sin cookies (GoatCounter); respeta "No rastrear"
  if (GOATCOUNTER && navigator.doNotTrack !== "1") {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://gc.zgo.at/count.js";
    script.dataset.goatcounter = `https://${GOATCOUNTER}.goatcounter.com/count`;
    document.head.appendChild(script);
  }
}

// ---------- Arranque ----------
document.getElementById("anio").textContent = new Date().getFullYear();
iniciarCursor();
iniciarInclinacion();
iniciarScrollspy();
iniciarRevelado();
configurarCV();
aplicarModoAvatar();
iniciarPaleta();
iniciarProgreso();
iniciarOpcionales();
iniciarParpadeo();
iniciarMirada();
aplicarIdioma(idioma);
cargarRepos();
