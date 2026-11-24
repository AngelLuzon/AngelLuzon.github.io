"use strict";

// ============ Procesado de audio (sin DOM, se puede probar aparte) ============

const TASA_SALIDA = 24000; // suficiente para voz y mantiene los archivos pequeños

function mezclarMono(buffer) {
  const salida = new Float32Array(buffer.length);
  for (let c = 0; c < buffer.numberOfChannels; c++) {
    const datos = buffer.getChannelData(c);
    for (let i = 0; i < buffer.length; i++) salida[i] += datos[i] / buffer.numberOfChannels;
  }
  return salida;
}

// Quita el silencio del principio y del final (deja un margen para que no suene cortado)
function recortarSilencios(muestras, tasa) {
  let pico = 0;
  for (let i = 0; i < muestras.length; i++) pico = Math.max(pico, Math.abs(muestras[i]));
  if (pico < 0.005) return muestras;

  const umbral = Math.max(0.012, pico * 0.04);
  let ini = 0;
  let fin = muestras.length - 1;
  while (ini < fin && Math.abs(muestras[ini]) < umbral) ini++;
  while (fin > ini && Math.abs(muestras[fin]) < umbral) fin--;

  const margen = Math.round(tasa * 0.12);
  return muestras.slice(Math.max(0, ini - margen), Math.min(muestras.length, fin + margen));
}

// Sube el volumen hasta un nivel cómodo sin saturar
function normalizar(muestras) {
  let pico = 0;
  for (let i = 0; i < muestras.length; i++) pico = Math.max(pico, Math.abs(muestras[i]));
  if (pico === 0) return muestras;
  const ganancia = 0.9 / pico;
  const salida = new Float32Array(muestras.length);
  for (let i = 0; i < muestras.length; i++) salida[i] = muestras[i] * ganancia;
  return salida;
}

// Promedia grupos de muestras (también filtra los agudos que sobran al bajar la frecuencia)
function remuestrear(muestras, tasaOrigen, tasaDestino) {
  if (tasaOrigen === tasaDestino) return muestras;
  const razon = tasaOrigen / tasaDestino;
  const n = Math.floor(muestras.length / razon);
  const salida = new Float32Array(n);
  for (let j = 0; j < n; j++) {
    const a = Math.floor(j * razon);
    const b = Math.min(muestras.length, Math.max(a + 1, Math.floor((j + 1) * razon)));
    let suma = 0;
    for (let i = a; i < b; i++) suma += muestras[i];
    salida[j] = suma / (b - a);
  }
  return salida;
}

// WAV mono de 16 bits
function codificarWav(muestras, tasa) {
  const buffer = new ArrayBuffer(44 + muestras.length * 2);
  const vista = new DataView(buffer);
  const texto = (pos, s) => {
    for (let i = 0; i < s.length; i++) vista.setUint8(pos + i, s.charCodeAt(i));
  };

  texto(0, "RIFF");
  vista.setUint32(4, 36 + muestras.length * 2, true);
  texto(8, "WAVE");
  texto(12, "fmt ");
  vista.setUint32(16, 16, true);
  vista.setUint16(20, 1, true); // PCM
  vista.setUint16(22, 1, true); // mono
  vista.setUint32(24, tasa, true);
  vista.setUint32(28, tasa * 2, true);
  vista.setUint16(32, 2, true);
  vista.setUint16(34, 16, true);
  texto(36, "data");
  vista.setUint32(40, muestras.length * 2, true);

  for (let i = 0; i < muestras.length; i++) {
    const s = Math.max(-1, Math.min(1, muestras[i]));
    vista.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return new Blob([buffer], { type: "audio/wav" });
}

function prepararVoz(mono, tasa) {
  let m = recortarSilencios(mono, tasa);
  m = normalizar(m);
  m = remuestrear(m, tasa, TASA_SALIDA);
  return { blob: codificarWav(m, TASA_SALIDA), segundos: m.length / TASA_SALIDA };
}

async function procesarGrabacion(blob) {
  const contexto = new (window.AudioContext || window.webkitAudioContext)();
  try {
    const decodificado = await contexto.decodeAudioData(await blob.arrayBuffer());
    return prepararVoz(mezclarMono(decodificado), decodificado.sampleRate);
  } finally {
    contexto.close();
  }
}

if (typeof module !== "undefined") {
  module.exports = { mezclarMono, recortarSilencios, normalizar, remuestrear, codificarWav, prepararVoz, TASA_SALIDA };
}

// ============ Interfaz de la grabadora ============

const contenedorGrabaciones = typeof document !== "undefined" ? document.getElementById("grabaciones") : null;

if (contenedorGrabaciones) {
  const NOMBRES = { es: "Español", en: "English" };
  const tarjetas = [];
  let flujo = null;
  let analizador = null;
  let grabando = null; // tarjeta que está grabando

  const estadoGlobal = document.getElementById("estado-global");
  const botonTodas = document.getElementById("descargar-todas");

  async function obtenerMicro() {
    if (flujo) return flujo;
    flujo = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, channelCount: 1 }
    });
    const contexto = new (window.AudioContext || window.webkitAudioContext)();
    analizador = contexto.createAnalyser();
    analizador.fftSize = 512;
    contexto.createMediaStreamSource(flujo).connect(analizador);
    return flujo;
  }

  function medirNivel(tarjeta) {
    const datos = new Uint8Array(analizador.fftSize);
    const bucle = () => {
      if (grabando !== tarjeta) {
        tarjeta.medidor.style.setProperty("--nivel", "0");
        return;
      }
      analizador.getByteTimeDomainData(datos);
      let suma = 0;
      for (let i = 0; i < datos.length; i++) {
        const v = (datos[i] - 128) / 128;
        suma += v * v;
      }
      const rms = Math.sqrt(suma / datos.length);
      tarjeta.medidor.style.setProperty("--nivel", String(Math.min(1, rms * 5)));
      requestAnimationFrame(bucle);
    };
    bucle();
  }

  function actualizarGlobal() {
    const hechas = tarjetas.filter((t) => t.resultado).length;
    estadoGlobal.textContent = `${hechas} de ${tarjetas.length} frases grabadas`;
    botonTodas.disabled = hechas === 0;
  }

  function mensaje(tarjeta, texto, error = false) {
    tarjeta.estado.textContent = texto;
    tarjeta.estado.classList.toggle("error", error);
  }

  function descargar(tarjeta) {
    const enlace = document.createElement("a");
    enlace.href = tarjeta.resultado.url;
    enlace.download = `${tarjeta.lang}-${tarjeta.clave}.wav`;
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();
  }

  async function empezar(tarjeta) {
    try {
      await obtenerMicro();
    } catch {
      mensaje(tarjeta, "No se pudo usar el micrófono. Revisa el permiso del navegador.", true);
      return;
    }

    const trozos = [];
    const grabador = new MediaRecorder(flujo);
    grabador.ondataavailable = (e) => e.data.size && trozos.push(e.data);
    grabador.onstop = async () => {
      mensaje(tarjeta, "Procesando…");
      try {
        const { blob, segundos } = await procesarGrabacion(new Blob(trozos, { type: grabador.mimeType }));
        if (tarjeta.resultado) URL.revokeObjectURL(tarjeta.resultado.url);
        tarjeta.resultado = { url: URL.createObjectURL(blob), segundos };
        tarjeta.escuchar.disabled = false;
        tarjeta.bajar.disabled = false;
        tarjeta.elemento.classList.add("hecha");
        mensaje(tarjeta, `Lista · ${segundos.toFixed(1)} s`);
      } catch {
        mensaje(tarjeta, "No se pudo procesar la grabación. Inténtalo de nuevo.", true);
      }
      actualizarGlobal();
    };

    tarjeta.grabador = grabador;
    grabando = tarjeta;
    tarjetas.forEach((t) => (t.grabar.disabled = t !== tarjeta));
    tarjeta.grabar.textContent = "■ Parar";
    tarjeta.grabar.classList.add("grabando");
    tarjeta.elemento.classList.add("en-grabacion");
    mensaje(tarjeta, "Grabando… lee la frase en voz alta");
    grabador.start();
    medirNivel(tarjeta);
  }

  function parar(tarjeta) {
    grabando = null;
    tarjeta.grabador.stop();
    tarjetas.forEach((t) => (t.grabar.disabled = false));
    tarjeta.grabar.textContent = tarjeta.resultado ? "↻ Repetir" : "● Grabar";
    tarjeta.grabar.classList.remove("grabando");
    tarjeta.elemento.classList.remove("en-grabacion");
  }

  FRASES_ORDEN().forEach(({ lang, clave, texto, grupo, etiqueta }) => {
    const elemento = document.createElement("article");
    elemento.className = "toma";

    const titulo = document.createElement("p");
    titulo.className = "toma-texto";
    titulo.textContent = `“${texto}”`;

    if (etiqueta) {
      const rotulo = document.createElement("p");
      rotulo.className = "toma-etiqueta";
      rotulo.textContent = `› ${etiqueta}`;
      elemento.appendChild(rotulo);
    }

    const fila = document.createElement("div");
    fila.className = "toma-fila";

    const grabar = document.createElement("button");
    grabar.type = "button";
    grabar.className = "boton-pildora";
    grabar.textContent = "● Grabar";

    const escuchar = document.createElement("button");
    escuchar.type = "button";
    escuchar.className = "boton-pildora";
    escuchar.textContent = "▶ Escuchar";
    escuchar.disabled = true;

    const bajar = document.createElement("button");
    bajar.type = "button";
    bajar.className = "boton-pildora";
    bajar.textContent = `⬇ ${lang}-${clave}.wav`;
    bajar.disabled = true;

    const medidor = document.createElement("span");
    medidor.className = "medidor";
    medidor.setAttribute("aria-hidden", "true");

    const estado = document.createElement("span");
    estado.className = "toma-estado";
    estado.setAttribute("role", "status");

    fila.append(grabar, escuchar, bajar, medidor, estado);
    elemento.append(titulo, fila);

    const tarjeta = { lang, clave, elemento, grabar, escuchar, bajar, medidor, estado, resultado: null, grabador: null };
    tarjetas.push(tarjeta);

    grabar.addEventListener("click", () => (grabando === tarjeta ? parar(tarjeta) : empezar(tarjeta)));
    escuchar.addEventListener("click", () => new Audio(tarjeta.resultado.url).play());
    bajar.addEventListener("click", () => descargar(tarjeta));

    document.getElementById(`lista-${lang}${grupo === "r" ? "-r" : ""}`).appendChild(elemento);
  });

  botonTodas.addEventListener("click", async () => {
    for (const tarjeta of tarjetas.filter((t) => t.resultado)) {
      descargar(tarjeta);
      await new Promise((r) => setTimeout(r, 400));
    }
  });

  actualizarGlobal();
}

// Lista plana de lo que se graba: frases (audio/es-1.wav) y respuestas del avatar (audio/es-r1.wav)
function FRASES_ORDEN() {
  const lista = [];
  ["es", "en"].forEach((lang) => {
    FRASES[lang].forEach((texto, i) => lista.push({ lang, clave: String(i + 1), texto, grupo: "f" }));
  });
  ["es", "en"].forEach((lang) => {
    PREGUNTAS[lang].forEach((q, i) => lista.push({ lang, clave: `r${i + 1}`, texto: q.r, grupo: "r", etiqueta: q.p }));
  });
  return lista;
}
