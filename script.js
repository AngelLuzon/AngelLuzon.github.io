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
    tab_ocr: "Demo OCR",
    tab_proyectos: "Proyectos",
    tab_contacto: "Contacto",
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
    hint_libro: "Pulsa para abrir",
    aptitudes: [
      { nombre: "Compromiso", cita: "La perfección no se puede alcanzar, pero si persigues la perfección puedes alcanzar la excelencia.", autor: "Vince Lombardi" },
      { nombre: "Trabajo en equipo", cita: "Juntarse es un comienzo, mantenerse juntos es un progreso, trabajar juntos es un éxito.", autor: "Henry Ford" },
      { nombre: "Resolutivo", cita: "No he fracasado. Solo he encontrado 10.000 formas que no funcionan.", autor: "Thomas Edison" },
      { nombre: "Simpático", cita: "La gente olvidará lo que dijiste y lo que hiciste, pero nunca olvidará cómo la hiciste sentir.", autor: "Maya Angelou" },
      { nombre: "Proactivo", cita: "Fallas el 100% de los tiros que no intentas.", autor: "Wayne Gretzky" },
      { nombre: "Atento", cita: "La atención es la forma más rara y pura de generosidad.", autor: "Simone Weil" }
    ],
    ocr_titulo: "Demo de OCR",
    ocr_intro: "Sube una imagen con texto y extraeré el contenido directamente en tu navegador.",
    ocr_soltar: "Arrastra una imagen aquí o haz clic para elegirla",
    ocr_analizar: "Analizar imagen",
    ocr_resultado: "Texto extraído",
    ocr_vacio: "El texto aparecerá aquí.",
    ocr_privacidad: "La imagen no sale de tu equipo. La primera vez se descargan los datos del idioma, que pueden tardar unos segundos.",
    ocr_cargando: "Analizando",
    ocr_listo: "Análisis completado ✅",
    ocr_error: "No se pudo analizar la imagen ❌",
    ocr_no_disponible: "La librería de OCR no se ha cargado. Revisa tu conexión ❌",
    ocr_formato: "Elige un archivo de imagen ⚠️",
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
    tab_ocr: "OCR demo",
    tab_proyectos: "Projects",
    tab_contacto: "Contact",
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
    hint_libro: "Click to open",
    aptitudes: [
      { nombre: "Commitment", cita: "Perfection is not attainable, but if we chase perfection we can catch excellence.", autor: "Vince Lombardi" },
      { nombre: "Teamwork", cita: "Coming together is a beginning, keeping together is progress, working together is success.", autor: "Henry Ford" },
      { nombre: "Problem solver", cita: "I have not failed. I've just found 10,000 ways that won't work.", autor: "Thomas Edison" },
      { nombre: "Friendly", cita: "People will forget what you said and what you did, but they will never forget how you made them feel.", autor: "Maya Angelou" },
      { nombre: "Proactive", cita: "You miss 100% of the shots you don't take.", autor: "Wayne Gretzky" },
      { nombre: "Attentive", cita: "Attention is the rarest and purest form of generosity.", autor: "Simone Weil" }
    ],
    ocr_titulo: "OCR demo",
    ocr_intro: "Upload an image with text and I'll extract its content directly in your browser.",
    ocr_soltar: "Drag an image here or click to choose one",
    ocr_analizar: "Analyze image",
    ocr_resultado: "Extracted text",
    ocr_vacio: "The text will appear here.",
    ocr_privacidad: "The image never leaves your device. The first time, the language data is downloaded, which can take a few seconds.",
    ocr_cargando: "Analyzing",
    ocr_listo: "Analysis complete ✅",
    ocr_error: "Could not analyze the image ❌",
    ocr_no_disponible: "The OCR library did not load. Check your connection ❌",
    ocr_formato: "Please choose an image file ⚠️",
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
const botonIdioma = document.getElementById("idioma");
const listaCompetencias = document.getElementById("lista-competencias");
const listaAptitudes = document.getElementById("lista-aptitudes");
const botonesFiltro = document.querySelectorAll(".filtro");
const pestanas = document.querySelectorAll(".tab");
const paneles = document.querySelectorAll(".panel");
const botonCopiar = document.getElementById("copiar");

// Elementos de la demo OCR
const ocrArchivo = document.getElementById("ocr-archivo");
const ocrDropzone = document.getElementById("dropzone");
const ocrVista = document.getElementById("ocr-vista");
const ocrPreview = document.getElementById("ocr-preview");
const ocrAnalizar = document.getElementById("ocr-analizar");
const ocrEstado = document.getElementById("ocr-estado");
const ocrProgreso = document.getElementById("ocr-progreso");
const ocrBarra = document.getElementById("ocr-barra");
const ocrSalida = document.getElementById("ocr-salida");
const ocrCopiar = document.getElementById("ocr-copiar");

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
let timerCopiar = null;
let timerOcrCopiar = null;
let archivoActual = null;
let urlPrevia = null;

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
async function copiarTexto(texto, boton, timerActual) {
  const t = traducciones[idioma];
  clearTimeout(timerActual);

  try {
    await navigator.clipboard.writeText(texto);
    boton.textContent = t.copiado;
  } catch {
    boton.textContent = t.copiar_error;
  }

  return setTimeout(() => {
    boton.textContent = traducciones[idioma].copiar;
  }, 2000);
}

botonCopiar.addEventListener("click", async () => {
  timerCopiar = await copiarTexto(CORREO, botonCopiar, timerCopiar);
});

// Demo OCR: gestión del archivo elegido (clic o arrastrar)
function mostrarEstado(clave) {
  ocrEstado.textContent = traducciones[idioma][clave] ?? "";
}

function cargarArchivo(file) {
  if (!file || !file.type.startsWith("image/")) {
    archivoActual = null;
    ocrAnalizar.disabled = true;
    mostrarEstado("ocr_formato");
    return;
  }

  archivoActual = file;

  if (urlPrevia) URL.revokeObjectURL(urlPrevia);
  urlPrevia = URL.createObjectURL(file);

  ocrPreview.src = urlPrevia;
  ocrVista.hidden = false;
  ocrAnalizar.disabled = false;
  ocrEstado.textContent = "";
}

ocrArchivo.addEventListener("change", () => {
  cargarArchivo(ocrArchivo.files[0]);
});

["dragenter", "dragover"].forEach((evento) => {
  ocrDropzone.addEventListener(evento, (e) => {
    e.preventDefault();
    ocrDropzone.classList.add("arrastrando");
  });
});

["dragleave", "drop"].forEach((evento) => {
  ocrDropzone.addEventListener(evento, (e) => {
    e.preventDefault();
    ocrDropzone.classList.remove("arrastrando");
  });
});

ocrDropzone.addEventListener("drop", (e) => {
  cargarArchivo(e.dataTransfer.files[0]);
});

// Ejecuta el OCR en el navegador con Tesseract.js
async function analizarImagen() {
  if (!archivoActual) return;

  if (typeof Tesseract === "undefined") {
    mostrarEstado("ocr_no_disponible");
    return;
  }

  ocrAnalizar.disabled = true;
  ocrProgreso.hidden = false;
  ocrBarra.style.width = "0%";
  ocrSalida.value = "";

  try {
    const lenguajes = idioma === "en" ? "eng" : "spa+eng";

    const { data } = await Tesseract.recognize(archivoActual, lenguajes, {
      logger: (m) => {
        if (m.status) {
          ocrEstado.textContent = `${traducciones[idioma].ocr_cargando}… ${Math.round((m.progress || 0) * 100)}%`;
        }
        if (typeof m.progress === "number") {
          ocrBarra.style.width = `${Math.round(m.progress * 100)}%`;
        }
      }
    });

    ocrSalida.value = data.text.trim();
    mostrarEstado("ocr_listo");
  } catch {
    mostrarEstado("ocr_error");
  } finally {
    ocrAnalizar.disabled = false;
    ocrProgreso.hidden = true;
  }
}

ocrAnalizar.addEventListener("click", analizarImagen);

ocrCopiar.addEventListener("click", async () => {
  if (!ocrSalida.value) return;
  timerOcrCopiar = await copiarTexto(ocrSalida.value, ocrCopiar, timerOcrCopiar);
});

function aplicarIdioma(lang) {
  const t = traducciones[lang];

  document.documentElement.lang = lang;
  document.title = t.titulo;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el === elementoRol) return;
    el.textContent = t[el.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t[el.dataset.i18nPlaceholder];
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

  const interactivos = "a, button, label, .libro, .chip, .proyecto, .tab, .filtro, .contacto-item, textarea";

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