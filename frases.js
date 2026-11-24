// Frases que dice el avatar animado en "Sobre mí".
// El número de cada grabación de voz (audio/es-1.wav, audio/es-2.wav...) es la posición de la frase.
// Si cambias una frase, vuelve a grabarla en grabar.html.
const FRASES = {
  es: [
    "Busco un equipo donde aprender y aportar desde el primer día.",
    "Me motiva ayudar a la gente a estar más conectada.",
    "Me gusta convertir lo repetitivo en automatizaciones.",
    "Creo que el buen código se entiende a la primera."
  ],
  en: [
    "I'm looking for a team where I can learn and contribute from day one.",
    "I'm motivated by helping people stay more connected.",
    "I enjoy turning repetitive work into automation.",
    "I believe good code should be understood at first sight."
  ]
};

// Preguntas que se le pueden hacer al avatar (botones de "Sobre mí" y paleta de comandos).
// "p" es la pregunta y "r" la respuesta. La voz grabada de cada respuesta se llama
// audio/es-r1.wav, audio/es-r2.wav... según su posición; si cambias una respuesta, vuelve a grabarla.
const PREGUNTAS = {
  es: [
    {
      p: "¿Quién eres?",
      r: "Soy Ángel, desarrollador full stack junior de Zaragoza. Me muevo entre la web, la automatización y la IA."
    },
    {
      p: "¿Qué tecnologías usas?",
      r: "Programo sobre todo en JavaScript, y también en TypeScript y C#. Trabajo con .NET, MongoDB, eXist-DB, Odoo y Azure Logic Apps."
    },
    {
      p: "¿Qué experiencia tienes?",
      r: "Tengo experiencia como desarrollador software junior en AIQUBE Labs, con IA, OCR, bots y Azure."
    },
    {
      p: "¿Qué has estudiado?",
      r: "Un grado en Desarrollo de Aplicaciones Multiplataforma, y cursos de IA, Big Data, Cloud y Machine Learning."
    },
    {
      p: "¿Qué te interesa?",
      r: "La IA, la automatización, la arquitectura de software y los agentes inteligentes."
    },
    {
      p: "¿Qué buscas?",
      r: "Un equipo donde aprender y aportar desde el primer día. Me motiva ayudar a la gente a estar más conectada."
    },
    {
      p: "¿Cómo te contacto?",
      r: "Escríbeme a angel.luzon.job@gmail.com, o mira mi GitHub: AngelLuzon."
    }
  ],
  en: [
    {
      p: "Who are you?",
      r: "I'm Ángel, a junior full stack developer from Zaragoza. I move between the web, automation and AI."
    },
    {
      p: "What technologies do you use?",
      r: "Mostly JavaScript, and also TypeScript and C#. I work with .NET, MongoDB, eXist-DB, Odoo and Azure Logic Apps."
    },
    {
      p: "What experience do you have?",
      r: "I have experience as a junior software developer at AIQUBE Labs, working with AI, OCR, bots and Azure."
    },
    {
      p: "What did you study?",
      r: "A degree in Multiplatform Application Development, plus courses in AI, Big Data, Cloud and Machine Learning."
    },
    {
      p: "What are you into?",
      r: "AI, automation, software architecture and intelligent agents."
    },
    {
      p: "What are you looking for?",
      r: "A team where I can learn and contribute from day one. I'm motivated by helping people stay more connected."
    },
    {
      p: "How can I reach you?",
      r: "Write to me at angel.luzon.job@gmail.com, or check my GitHub: AngelLuzon."
    }
  ]
};
