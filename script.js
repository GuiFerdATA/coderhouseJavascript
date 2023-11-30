const palabraSecreta = "javascript";
let intentos = 3;

alert("¡Bienvenido al juego de adivinanza! Adivina la palabra secreta.");

while (intentos > 0) {
  const respuesta = prompt("Ingresa una palabra:").toLowerCase();

  if (respuesta === palabraSecreta) {
    alert("¡Respuesta correcta! Has ganado el juego.");
    break;
  } else {
    intentos--;
    alert(`Respuesta incorrecta. Te quedan ${intentos} intentos.`);
  }
}

if (intentos === 0) {
  alert(`Se te han agotado los intentos. La palabra secreta era "${palabraSecreta}".`);
}