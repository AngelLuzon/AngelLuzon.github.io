const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 1. Efecto de escritura en el subtítulo
function escribirTexto(elemento, velocidad = 50) {
  if (reducirMovimiento) return;

  const texto = elemento.textContent.trim();
  elemento.textContent = "";
  let i = 0;

  const timer = setInterval(() => {
    elemento.textContent += texto.charAt(i);
    i++;
    if (i === texto.length) clearInterval(timer);
  }, velocidad);
}

const rol = document.getElementById("rol");
if (rol) escribirTexto(rol);

// 2. Secciones que aparecen al hacer scroll
if (!reducirMovimiento) {
  const secciones = document.querySelectorAll("section");
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
    { threshold: 0.15 }
  );const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const traducciones = {
  es: {
    titulo: "Ángel Luzón Balanzá | Portfolio",
    rol: "Desarrollador full stack junior · IA y automatización",
    sobre_titulo: "Sobre mí",
    sobre_1: "Soy Ángel Luzón, desarrollador full stack junior con formación en Desarrollo de Aplicaciones Multiplataforma. Me interesa construir aplicaciones web y móviles, y especialmente la automatización y la integración de inteligencia artificial en proyectos reales.",
    sobre_2: "Tengo experiencia como desarrollador software junior en AIQUBE Labs, donde he trabajado en automatizaciones con IA, reconocimiento óptico de caracteres (OCR), bots automatizados y soluciones en Azure con Logic Apps. También he desarrollado CRMs.",
    sobre_3: "Trabajo con JavaScript y estoy aprendiendo TypeScript y C#. Mis herramientas habituales son Visual Studio Code, Visual Studio y Git/GitHub.",
    sobre_4: "Idiomas: español nativo, inglés bilingüe (certificado Cambridge B2) y nivel básico de portugués y francés.",
    competencias_titulo: "Competencias",
    filtro_todas: "Todas",
    filtro_lenguajes: "Lenguajes",
    filtro_frameworks: "Frameworks y datos",
    filtro_herramientas: "Herramientas",
    nivel_intermedio: "intermedio",
    nivel_inicial: "inicial",
    aptitudes_titulo: "Aptitudes",
    aptitudes: ["Compromiso", "Trabajo en equipo", "Resolutivo", "Simpático", "Proactivo", "Atento"],
    proyectos_titulo: "Proyectos",
    proyectos_vacio: "Próximamente.",
    contacto_titulo: "Contacto",
    correo: "Correo"
  },
  en: {
    titulo: "Ángel Luzón Balanzá | Portfolio",
    rol: "Junior full stack developer · AI and automation",
    sobre_titulo: "About me",
    sobre_1: "I'm Ángel Luzón, a junior full stack developer with a degree in Multiplatform Application Development. I enjoy building web and mobile applications, especially automation and integrating artificial intelligence into real projects.",
    sobre_2: "I worked as a junior software developer at AIQUBE Labs, where I built AI automations, optical character recognition (OCR), automated bots and Azure solutions with Logic Apps. I have also developed CRMs.",
    sobre_3: "I work with JavaScript and I'm learning TypeScript and C#. My usual tools are Visual Studio Code, Visual Studio and Git/GitHub.",
    sobre_4: "Languages: native Spanish, bilingual English (Cambridge B2 certificate) and basic Portuguese and French.",
    competencias_titulo: "Skills",
    filtro_todas: "All",
    filtro_lenguajes: "Languages",
    filtro_frameworks: "Frameworks and data",
    filtro_herramientas: "Tools",
    nivel_intermedio: "intermediate",
    nivel_inicial: "beginner",
    aptitudes_titulo: "Soft skills",
    aptitudes: ["Commitment", "Teamwork", "Problem solver", "Friendly", "Proactive", "Attentive"],
    proyectos_titulo: "Projects",
    proyectos_vacio: "Coming soon.",
    contacto_titulo: "Contact",
    correo: "Email"
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
const botonIdioma = document.getElementById("idioma");
const botonTema = document.getElementById("tema");
const listaCompetencias = document.getElementById("lista-competencias");
const listaAptitudes = document.getElementById("lista-aptitudes");
const botonesFiltro = document.querySelectorAll(".filtro");

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

// Efecto de escritura, con limpieza del timer anterior
function escribirTexto(elemento, texto, velocidad = 50) {
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

// Aptitudes según el idioma
function renderAptitudes(lang) {
  const t = traducciones[lang];
  listaAptitudes.textContent = "";

  t.aptitudes.forEach((aptitud) => {
    const li = document.createElement("li");
    li.className = "chip";
    li.textContent = aptitud;
    listaAptitudes.appendChild(li);
  });
}

function aplicarIdioma(lang) {
  const t = traducciones[lang];

  document.documentElement.lang = lang;
  document.title = t.titulo;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el === elementoRol) return;
    el.textContent = t[el.dataset.i18n];
  });

  escribirTexto(elementoRol, t.rol);
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

// Botón de tema
botonTema.addEventListener("click", () => {
  document.body.classList.toggle("claro");
  botonTema.textContent = document.body.classList.contains("claro") ? "🌙" : "☀️";
});

// Secciones que aparecen al hacer scroll
if (!reducirMovimiento) {
  const secciones = document.querySelectorAll("section");
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
    { threshold: 0.15 }
  );

  secciones.forEach((s) => observador.observe(s));
}

aplicarIdioma(idioma);

  secciones.forEach((s) => observador.observe(s));
}

// 3. Cambio de tema claro/oscuro
const botonTema = document.getElementById("tema");
botonTema?.addEventListener("click", () => {
  document.body.classList.toggle("claro");
  botonTema.textContent = document.body.classList.contains("claro") ? "🌙" : "☀️";
});