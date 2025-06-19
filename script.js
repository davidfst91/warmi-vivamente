const frases = [
  "Hoy es un buen día para comenzar de nuevo.",
  "Confía en ti. Eres más fuerte de lo que crees.",
  "Respira, suelta y sigue adelante.",
  "Eres valiosa, incluso cuando no lo sientes.",
  "Pequeños pasos también son progreso."
];

function nuevaFrase() {
  const aleatoria = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase-motivadora").textContent = aleatoria;
}

window.onload = nuevaFrase;
