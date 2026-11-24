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
    contacto_nota: "Si el enlace del correo no abre tu programa de correo, usa el botón Copiar."
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
    contacto_nota: "If the email link doesn't open your mail app, use the Copy button."
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

const elementoRol = document.getElementById("rol");
const elementoFrase = document.getElementById("frase");
const botonIdioma = document.getElementById("idioma");
const listaCompetencias = document.getElementById("lista-competencias");
const listaAptitudes = document.getElementById("lista-aptitudes");
const botonesFiltro = document.querySelectorAll(".filtro");
const pestanas = document.querySelectorAll(".tab");
const paneles = document.querySelectorAll(".panel");
const botonCopiar = document.getElementById("copiar");

// Idioma inicial: guardado > idioma del navegador > español
function idiomaInicial() {
  try {
    const guardado = localStorage.getItem("idioma");
    if (guardado) return guardado;
  } catch {
    // localStorage puede no estar disponible
  }
  return navigator.language?.startsWith("en") ? "en" : "es";
}

let idioma = idiomaInicial();
let filtroActual = "todas";
let timerRol = null;
let timerFrases = null;
let indiceFrase = 0;
let timerCopiar = null;

// Efecto de escritura en el rol
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
    if (i === texto.length) clearInterval(timerRol);
  }, velocidad);
}

// Frases de Sobre mí que rotan cada pocos segundos
function iniciarFrases(lang) {
  clearInterval(timerFrases);
  const frases = traducciones[lang].frases;
  indiceFrase = 0;
  elementoFrase.textContent = frases[0];

  if (reducirMovimiento) return;

  timerFrases = setInterval(() => {
    elementoFrase.classList.add("salida");
    setTimeout(() => {
      indiceFrase = (indiceFrase + 1) % frases.length;
      elementoFrase.textContent = frases[indiceFrase];
      elementoFrase.classList.remove("salida");
    }, 400);
  }, 4000);
}

// Pestañas: muestra un único panel a la vez
function mostrarPanel(id) {
  paneles.forEach((p) => {
    p.hidden = p.id !== id;
  });

  pestanas.forEach((t) => {
    const activa = t.dataset.tab === id;
    t.classList.toggle("activo", activa);
    t.setAttribute("aria-selected", String(activa));
  });
}

pestanas.forEach((t) => {
  t.addEventListener("click", () => mostrarPanel(t.dataset.tab));
});

// Competencias técnicas según el filtro y el idioma
function renderCompetencias(lang) {
  const t = traducciones[lang];
  listaCompetencias.textContent = "";

  competencias
    .filter((c) => filtroActual === "todas" || c.categoria === filtroActual)
    .forEach((c) => {
      const li = document.createElement("li");
      li.className = "chip";
      li.textContent = c.nombre;

      if (c.nivel) {
        const nivel = document.createElement("small");
        nivel.textContent = t[`nivel_${c.nivel}`];
        li.append(" ", nivel);
      }

      listaCompetencias.appendChild(li);
    });
}

// Aptitudes como libros: la tapa se abre y deja ver la cita
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

// Copiar el correo al portapapeles con confirmación visual
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

function aplicarIdioma(lang) {
  const t = traducciones[lang];

  document.documentElement.lang = lang;
  document.title = t.titulo;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el === elementoRol) return;
    el.textContent = t[el.dataset.i18n];
  });

  escribirTexto(elementoRol, t.rol);
  iniciarFrases(lang);
  renderCompetencias(lang);
  renderAptitudes(lang);

  botonIdioma.textContent = lang === "es" ? "EN" : "ES";
  botonIdioma.setAttribute("aria-label", lang === "es" ? "Change language" : "Cambiar idioma");
}

// Botón de idioma
botonIdioma.addEventListener("click", () => {
  idioma = idioma === "es" ? "en" : "es";
  try {
    localStorage.setItem("idioma", idioma);
  } catch {
    // Si no se puede guardar, solo se pierde la preferencia
  }
  aplicarIdioma(idioma);
});

// Filtros de competencias técnicas
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

// Cursor: punto que sigue al ratón al instante y anillo con retardo suave
function iniciarCursor() {
  if (!puntero_fino) return;

  document.documentElement.classList.add("puntero-fino");

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

  const interactivos = "a, button, .libro, .chip, .proyecto, .tab, .filtro, .contacto-item";

  document.addEventListener("mouseover", (e) => {
    anillo.classList.toggle("hover", Boolean(e.target.closest(interactivos)));
  });

  const raiz = document.documentElement;

  raiz.addEventListener("mouseleave", () => {
    punto.style.opacity = "0";
    anillo.style.opacity = "0";
  });

  raiz.addEventListener("mouseenter", () => {
    punto.style.opacity = "1";
    anillo.style.opacity = "";
  });
}

// Tarjetas con inclinación sutil al pasar el ratón
function iniciarInclinacion() {
  if (!puntero_fino) return;

  let activa = null;

  document.addEventListener("mousemove", (e) => {
    const el = e.target.closest?.(".proyecto, .chip");

    if (activa && activa !== el) activa.style.transform = "";
    activa = el;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-2px)`;
  });
}

// Secciones que aparecen al hacer scroll (la cabecera no se anima)
if (!reducirMovimiento) {
  const secciones = document.querySelectorAll("main .panel");
  secciones.forEach((s) => s.classList.add("oculta"));

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  secciones.forEach((s) => observador.observe(s));
}

iniciarCursor();
iniciarInclinacion();
mostrarPanel("sobre");
aplicarIdioma(idioma);