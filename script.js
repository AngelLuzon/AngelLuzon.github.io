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
  );

  secciones.forEach((s) => observador.observe(s));
}

// 3. Cambio de tema claro/oscuro
const botonTema = document.getElementById("tema");
botonTema?.addEventListener("click", () => {
  document.body.classList.toggle("claro");
  botonTema.textContent = document.body.classList.contains("claro") ? "🌙" : "☀️";
});