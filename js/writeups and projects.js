

document.querySelectorAll(".machine").forEach(machine => {
    machine.addEventListener("click", () => {
        window.location.href = machine.dataset.href;
    });
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

async function typeWriter(el, velocidad = 20) {
  const original = el.cloneNode(true);
  el.innerHTML = "";
  await escribirNodos(original, el, velocidad);
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter(document.getElementById("p1"));
});