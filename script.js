const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const puntero_fino = window.matchMedia("(pointer: fine)").matches && !reducirMovimiento;

const traducciones = {
  es: {
    titulo: "Ángel Luzón Balanzá | Portfolio",
    rol: "Desarrollador full stack junior · IA y automatización",
    scroll: "Explorar ↓",
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
    aptitud_hint: "Pulsa para ver la cita",
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
    correo: "Correo"
  },
  en: {
    titulo: "Ángel Luzón Balanzá | Portfolio",
    rol: "Junior full stack developer · AI and automation",
    scroll: "Explore ↓",
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
    aptitud_hint: "Click to see the quote",
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

// Aptitudes: tarjetas que giran al pulsarlas y muestran la cita con su autor
function renderAptitudes(lang) {
  const t = traducciones[lang];
  listaAptitudes.textContent = "";

  t.aptitudes.forEach((apt) => {
    const li = document.createElement("li");

    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "apt";
    boton.dataset.hint = t.aptitud_hint;
    boton.setAttribute("aria-expanded", "false");

    const inner = document.createElement("span");
    inner.className = "apt-inner";

    const frente = document.createElement("span");
    frente.className = "apt-frente";
    frente.textContent = apt.nombre;

    const dorso = document.createElement("span");
    dorso.className = "apt-dorso";

    const cita = document.createElement("span");
    cita.className = "apt-cita";
    cita.textContent = `"${apt.cita}"`;

    const autor = document.createElement("span");
    autor.className = "apt-autor";
    autor.textContent = `— ${apt.autor}`;

    dorso.append(cita, autor);
    inner.append(frente, dorso);
    boton.appendChild(inner);

    boton.addEventListener("click", () => {
      const abierta = boton.classList.toggle("volteada");
      boton.setAttribute("aria-expanded", String(abierta));
    });

    li.appendChild(boton);
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

// Secciones que aparecen al hacer scroll (no incluye la portada)
if (!reducirMovimiento) {
  const secciones = document.querySelectorAll("main section");
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

// Fondo animado: red de nodos
function iniciarFondo() {
  const canvas = document.getElementById("fondo");
  if (!canvas || reducirMovimiento) return;

  const ctx = canvas.getContext("2d");
  let puntos = [];

  function ajustar() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cantidad = Math.min(80, Math.floor((canvas.width * canvas.height) / 16000));
    puntos = Array.from({ length: cantidad }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4
    }));
  }

  function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    puntos.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 255, 156, 0.6)";
      ctx.fill();
    });

    for (let i = 0; i < puntos.length; i++) {
      for (let j = i + 1; j < puntos.length; j++) {
        const a = puntos[i];
        const b = puntos[j];
        const distancia = Math.hypot(a.x - b.x, a.y - b.y);
        if (distancia < 130) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0, 255, 156, ${0.15 * (1 - distancia / 130)})`;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(dibujar);
  }

  ajustar();
  window.addEventListener("resize", ajustar);
  dibujar();
}

// Cursor personalizado
function iniciarCursor() {
  if (!puntero_fino) return;

  document.documentElement.classList.add("puntero-fino");
  document.body.classList.add("cursor-activo");

  const cursor = document.getElementById("cursor");
  let x = 0;
  let y = 0;
  let cx = 0;
  let cy = 0;

  window.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
  });

  function seguir() {
    cx += (x - cx) * 0.2;
    cy += (y - cy) * 0.2;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(seguir);
  }
  seguir();

  document.addEventListener("mouseover", (e) => {
    cursor.classList.toggle("hover", Boolean(e.target.closest("a, button, .proyecto, .chip, .apt")));
  });
}

// Tarjetas con efecto 3D al pasar el ratón
function iniciarTilt() {
  if (!puntero_fino) return;

  let activo = null;

  document.addEventListener("mousemove", (e) => {
    const el = e.target.closest?.(".proyecto, .chip");

    if (activo && activo !== el) activo.style.transform = "";
    activo = el;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(600px) rotateX(${-py * 10}deg) rotateY(${px * 10}deg) translateZ(4px)`;
  });
}

iniciarFondo();
iniciarCursor();
iniciarTilt();
aplicarIdioma(idioma);