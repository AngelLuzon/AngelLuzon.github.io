const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const puntero_fino = window.matchMedia("(pointer: fine)").matches && !reducirMovimiento;

const CORREO = "angel.luzon.job@gmail.com";

const traducciones = {
  es: {
    titulo: "Ángel Luzón Balanzá | Portfolio",
    etiqueta: "Portfolio",
    rol: "Desarrollador full stack junior · IA y automatización",
    scroll: "Explorar",
    tab_sobre: "Sobre mí",
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
    ficha_experiencia: "Desarrollador software junior en AIQUBE Labs: IA, OCR, bots y Azure",
    ficha_intereses_label: "Intereses",
    ficha_intereses: "IA, automatización, arquitectura de software y agentes inteligentes",
    frases: [
      "Busco un equipo donde aprender y aportar desde el primer día.",
      "Me motiva ayudar a la gente a estar más conectada.",
      "Me gusta convertir lo repetitivo en automatizaciones.",
      "Creo que el buen código se entiende a la primera."
    ],
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
    proyectos_vacio: "Próximamente.",
    contacto_titulo: "Contacto",
    correo_label: "Correo",
    copiar: "Copiar",
    copiado: "¡Copiado! ✅",
    copiar_error: "No se pudo copiar ❌",
    contacto_nota: "Si el enlace del correo no abre tu programa de correo, usa el botón Copiar.",
    contacto_intro: "¿Tienes una oferta, una idea o simplemente quieres saludar? Escríbeme.",
    proyectos_texto: "Estoy preparando proyectos para enseñar aquí. Mientras tanto, puedes ver mi código en GitHub.",
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
    tl_1_desc: "Trabajo con IA, OCR, bots y servicios de Azure.",
    tl_2_titulo: "Grado en Desarrollo de Aplicaciones Multiplataforma",
    tl_2_desc: "Desarrollo de aplicaciones para web, móvil y escritorio.",
    tl_3_titulo: "Cursos de especialización",
    tl_3_desc: "IA, Big Data, Cloud y Machine Learning.",
    avatar_dibujo: "Avatar animado",
    avatar_voz: "Voz",
    avatar_alt_foto: "Foto de Ángel Luzón Balanzá",
    avatar_alt_dibujo: "Avatar de dibujo animado de Ángel, que habla con las frases del bocadillo"
  },
  en: {
    titulo: "Ángel Luzón Balanzá | Portfolio",
    etiqueta: "Portfolio",
    rol: "Junior full stack developer · AI and automation",
    scroll: "Explore",
    tab_sobre: "About me",
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
    ficha_experiencia: "Junior software developer at AIQUBE Labs: AI, OCR, bots and Azure",
    ficha_intereses_label: "Interests",
    ficha_intereses: "AI, automation, software architecture and intelligent agents",
    frases: [
      "I'm looking for a team where I can learn and contribute from day one.",
      "I'm motivated by helping people stay more connected.",
      "I enjoy turning repetitive work into automation.",
      "I believe good code should be understood at first sight."
    ],
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
    proyectos_vacio: "Coming soon.",
    contacto_titulo: "Contact",
    correo_label: "Email",
    copiar: "Copy",
    copiado: "Copied! ✅",
    copiar_error: "Copy failed ❌",
    contacto_nota: "If the email link doesn't open your mail app, use the Copy button.",
    contacto_intro: "Got an offer, an idea or just want to say hi? Drop me a line.",
    proyectos_texto: "I'm preparing projects to showcase here. In the meantime, you can check out my code on GitHub.",
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
    tl_1_desc: "Working with AI, OCR, bots and Azure services.",
    tl_2_titulo: "Degree in Multiplatform Application Development",
    tl_2_desc: "Application development for web, mobile and desktop.",
    tl_3_titulo: "Specialization courses",
    tl_3_desc: "AI, Big Data, Cloud and Machine Learning.",
    avatar_dibujo: "Animated avatar",
    avatar_voz: "Voice",
    avatar_alt_foto: "Photo of Ángel Luzón Balanzá",
    avatar_alt_dibujo: "Cartoon avatar of Ángel, speaking the phrases shown in the speech bubble"
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
  { nombre: "Azure Logic Apps", categoria: "herramientas" },
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

// ---------- CV: oculta los enlaces si cv.pdf aún no existe ----------
async function comprobarCV() {
  try {
    const respuesta = await fetch("cv.pdf", { method: "HEAD", cache: "no-store" });
    if (respuesta.ok) return;
  } catch {
    // Sin servidor (file://) o sin red: se oculta igualmente
  }
  document.querySelectorAll(".enlace-cv").forEach((el) => {
    (el.closest(".enlace-cv-item") || el).hidden = true;
  });
}

// ---------- Cursor: punto que sigue al ratón y anillo con retardo ----------
function iniciarCursor() {
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

function esperar(ms) {
  return new Promise((resolve) => {
    timerHabla = setTimeout(resolve, ms);
  });
}

function elegirVoz(lang) {
  const voces = sintetizador.getVoices().filter((v) => v.lang.toLowerCase().startsWith(lang));
  return voces.find((v) => v.localService) || voces[0] || null;
}

function detenerHabla() {
  tokenHabla++;
  clearTimeout(timerHabla);
  clearInterval(timerBoca);
  if (sintetizador) sintetizador.cancel();
  setBoca("c");
  dibujoAvatar.classList.remove("hablando");
  elementoFrase.classList.remove("escribiendo");
}

// Escribe el texto en el bocadillo letra a letra, moviendo la boca (y hablando si la voz está activa)
function decir(texto, token) {
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
    lector.textContent = texto;

    elementoFrase.replaceChildren(visible, reserva, lector);
    elementoFrase.classList.add("escribiendo");
    dibujoAvatar.classList.add("hablando");

    let tecleoFin = false;
    let vozFin = !(vozActiva && sintetizador);

    const terminar = () => {
      if (token !== tokenHabla) return resolve();
      if (!tecleoFin || !vozFin) return;
      clearInterval(timerBoca);
      setBoca("c");
      dibujoAvatar.classList.remove("hablando");
      elementoFrase.classList.remove("escribiendo");
      resolve();
    };

    if (!vozFin) {
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
      // Red de seguridad por si el navegador nunca avisa del final de la voz
      setTimeout(() => {
        vozFin = true;
        terminar();
      }, texto.length * 130 + 4000);
    }

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
      timerHabla = setTimeout(paso, ".,;:!?".includes(ch) ? 240 : 62);
    };
    paso();
  });
}

async function bucleHabla(token) {
  const frases = traducciones[idioma].frases;
  let i = 0;
  while (token === tokenHabla) {
    await decir(frases[i % frases.length], token);
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
  botonVoz.hidden = !(dibujo && sintetizador && !reducirMovimiento);
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

// La voz solo se activa con un clic (los navegadores no permiten hablar solos)
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
      if (!avatarVisible && sintetizador) sintetizador.cancel();
    },
    { threshold: 0.1 }
  ).observe(zonaTexto);
}

document.addEventListener("visibilitychange", () => {
  pestanaVisible = !document.hidden;
  if (document.hidden && sintetizador) sintetizador.cancel();
});

window.addEventListener("pagehide", () => {
  if (sintetizador) sintetizador.cancel();
});

// ---------- Arranque ----------
document.getElementById("anio").textContent = new Date().getFullYear();
iniciarCursor();
iniciarInclinacion();
iniciarScrollspy();
iniciarRevelado();
comprobarCV();
aplicarModoAvatar();
aplicarIdioma(idioma);
