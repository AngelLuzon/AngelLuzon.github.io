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

// Preguntas que se le pueden hacer al avatar (pestañas de "Sobre mí" y paleta de comandos).
// "g" es el grupo (perfil, tecnico, personal o trabajo), "p" la pregunta y "r" la respuesta.
// La voz grabada de cada respuesta se llama audio/es-r1.wav, audio/es-r2.wav... según su posición
// en esta lista; si cambias el orden o una respuesta, vuelve a grabarla en grabar.html.
const PREGUNTAS = {
  es: [
    {
      g: "perfil",
      p: "¿Quién eres?",
      r: "Soy Ángel, desarrollador full stack junior de Zaragoza. Me muevo entre la web, la automatización y la IA, y me gusta convertir ideas complicadas en soluciones sencillas."
    },
    {
      g: "perfil",
      p: "¿Qué has estudiado?",
      r: "Un grado en Desarrollo de Aplicaciones Multiplataforma, y cursos de IA, Big Data, Cloud y Machine Learning."
    },
    {
      g: "perfil",
      p: "¿Qué te interesa?",
      r: "Me apasionan la información y los datos. Me interesan la IA, la automatización, la arquitectura de software y los agentes inteligentes."
    },
    {
      g: "tecnico",
      p: "¿Qué tecnologías usas?",
      r: "Ahora mismo trabajo sobre todo con .NET, y me encanta JavaScript. Hago desarrollo full stack con Angular y Radzen Blazor, apps móviles con MAUI, y trabajo con MongoDB, eXist-DB y Odoo."
    },
    {
      g: "tecnico",
      p: "¿En qué has trabajado?",
      r: "He trabajado en el entorno de Azure con DevOps y Logic Apps, y con AI Fundamentals y OCR. He creado bots con y sin IA, apps móviles con MAUI, automatizaciones con n8n y Make, y desarrollo full stack con Angular y Radzen Blazor."
    },
    {
      g: "tecnico",
      p: "¿Cuál es tu proyecto favorito?",
      r: "Un bot que hice yo solo para entrar en una red pública y explorar todas las opciones posibles, calculando todas las iteraciones y los casos de uso excepcionales. Automatiza el certificado digital y guarda los casos de éxito y los logs en el blob."
    },
    {
      g: "tecnico",
      p: "¿Cómo resuelves un problema difícil?",
      r: "Primero observo cómo lo resuelve otra gente. Cuando entiendo la idea y el concepto, le aplico mi manera de desarrollar para hacerlo mío y avanzar más rápido."
    },
    {
      g: "tecnico",
      p: "¿Qué opinas de la IA al programar?",
      r: "La veo como una herramienta necesaria para ser más productivo: automatizaciones, ayuda para resolver conflictos, y agentes y MCPs. Me gusta usarla para trabajar de una forma más profesional."
    },
    {
      g: "tecnico",
      p: "¿.NET o JavaScript?",
      r: "Ahora mismo trabajo sobre todo en .NET, pero me encantan los dos, y cualquier otro lenguaje que toque."
    },
    {
      g: "tecnico",
      p: "¿Qué estás aprendiendo ahora?",
      r: "Sigo formándome en IA, machine learning y automatizaciones, para ser un desarrollador cada vez más profesional usando la IA."
    },
    {
      g: "personal",
      p: "¿Por qué programas?",
      r: "Siempre me han gustado la información y los datos. Programar me da la oportunidad de conseguir cosas que hasta hace poco eran solo sueños, y que a mucha gente le parecen imposibles."
    },
    {
      g: "personal",
      p: "¿Qué haces fuera del código?",
      r: "Me gusta el deporte y estar con mis amigos: nos ponemos retos deportivos y así profundizamos en la amistad."
    },
    {
      g: "personal",
      p: "¿Cómo eres en equipo?",
      r: "Me gusta proponer ideas y ayudar a los demás con sus problemas, y que me ayuden a mí. Tengo un curso de liderazgo y me encantan los retos."
    },
    {
      g: "personal",
      p: "¿Cuál es tu punto a mejorar?",
      r: "Me gusta sacar las cosas adelante yo solo, pero cada vez pregunto más. Es muy útil: a alguien le ha pasado ya lo que a ti se te atasca, o tiene una idea que te ahorra mucho tiempo."
    },
    {
      g: "trabajo",
      p: "¿Qué buscas?",
      r: "Una empresa dinámica e innovadora, con buen ambiente, donde pueda crecer profesional y personalmente, aprendiendo y aportando desde el primer día."
    },
    {
      g: "trabajo",
      p: "¿Qué inglés tienes?",
      r: "Tengo un B2 de inglés y estoy estudiando para sacarme el C1."
    },
    {
      g: "trabajo",
      p: "¿Cómo te contacto?",
      r: "Escríbeme a angel.luzon.job@gmail.com, o mira mi GitHub: AngelLuzon."
    }
  ],
  en: [
    {
      g: "perfil",
      p: "Who are you?",
      r: "I'm Ángel, a junior full stack developer from Zaragoza. I move between the web, automation and AI, and I enjoy turning complicated ideas into simple solutions."
    },
    {
      g: "perfil",
      p: "What did you study?",
      r: "A degree in Multiplatform Application Development, plus courses in AI, Big Data, Cloud and Machine Learning."
    },
    {
      g: "perfil",
      p: "What are you into?",
      r: "I'm passionate about information and data. I'm interested in AI, automation, software architecture and intelligent agents."
    },
    {
      g: "tecnico",
      p: "What technologies do you use?",
      r: "Right now I mostly work with .NET, and I love JavaScript too. I do full stack development with Angular and Radzen Blazor, mobile apps with MAUI, and I work with MongoDB, eXist-DB and Odoo."
    },
    {
      g: "tecnico",
      p: "What have you worked on?",
      r: "I've worked in the Azure environment with DevOps and Logic Apps, plus AI Fundamentals and OCR. I've built bots with and without AI, mobile apps with MAUI, automations with n8n and Make, and full stack development with Angular and Radzen Blazor."
    },
    {
      g: "tecnico",
      p: "What's your favorite project?",
      r: "A bot I built on my own to access a public network and explore every possible option, calculating all the iterations and exceptional use cases. It automates the digital certificate and stores successful cases and logs in blob storage."
    },
    {
      g: "tecnico",
      p: "How do you solve hard problems?",
      r: "First I watch how other people solve it. Once I understand the idea and the concept, I apply my own way of developing to make it mine and move faster."
    },
    {
      g: "tecnico",
      p: "What do you think about AI when coding?",
      r: "I see it as an essential tool to be more productive: automation, help resolving conflicts, and using agents and MCPs. I like using it to work in a more professional way."
    },
    {
      g: "tecnico",
      p: ".NET or JavaScript?",
      r: "Right now I work mostly in .NET, but I love both, and any other language that comes along."
    },
    {
      g: "tecnico",
      p: "What are you learning now?",
      r: "I keep training in AI, machine learning and automation, to become an increasingly professional developer who makes the most of AI."
    },
    {
      g: "personal",
      p: "Why do you code?",
      r: "I've always liked information and data. Programming gives me the chance to achieve things that until recently were only dreams, and that seem impossible to many people."
    },
    {
      g: "personal",
      p: "What do you do outside of code?",
      r: "I like sports and spending time with friends: we set each other sports challenges and grow closer along the way."
    },
    {
      g: "personal",
      p: "What are you like in a team?",
      r: "I like proposing ideas and helping others with their problems, and getting help in return. I've taken a leadership course and I love a good challenge."
    },
    {
      g: "personal",
      p: "What's your area to improve?",
      r: "I like getting things done on my own, but I'm asking more and more. It's really useful: someone has already hit the same wall, or has an idea that saves you a lot of time."
    },
    {
      g: "trabajo",
      p: "What are you looking for?",
      r: "A dynamic, innovative company with a good atmosphere, where I can grow both professionally and personally, learning and contributing from day one."
    },
    {
      g: "trabajo",
      p: "How's your English?",
      r: "I have a B2 level in English and I'm studying for the C1."
    },
    {
      g: "trabajo",
      p: "How can I reach you?",
      r: "Write to me at angel.luzon.job@gmail.com, or check my GitHub: AngelLuzon."
    }
  ]
};
