const commands = document.querySelectorAll(".terminal-command");

commands.forEach(command => {

    const text = command.classList.contains("projects")
        ? "$ explore --projects "
        : "$ explore --pwned-machines ";

    const textElement = command.querySelector(".command");

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            textElement.textContent += text.charAt(i);
            i++;

            setTimeout(typeWriter, 150);
        }
    }

    typeWriter();
});

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function escribirNodos(origen, destino, velocidad) {
  for (const nodo of origen.childNodes) {
    if (nodo.nodeType === Node.TEXT_NODE) {
      const textoNuevo = document.createTextNode("");
      destino.appendChild(textoNuevo);
      for (const letra of nodo.textContent) {
        textoNuevo.textContent += letra;
        await sleep(velocidad);
      }
    } else if (nodo.nodeType === Node.ELEMENT_NODE) {
      const copia = nodo.cloneNode(false);
      destino.appendChild(copia);
      await escribirNodos(nodo, copia, velocidad);
    }
  }
}

async function typeWriter(el, velocidad = 50) {
  const original = el.cloneNode(true);
  el.innerHTML = "";
  await escribirNodos(original, el, velocidad);
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter(document.getElementById("texto"));
  typeWriter(document.getElementById("texto1"));
  typeWriter(document.getElementById("texto2"));
  typeWriter(document.getElementById("texto3"));
});