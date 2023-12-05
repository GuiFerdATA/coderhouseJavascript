/*
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

/* 




//Creamos una funcion para nuestro juego (le pasamos dos parametros)
function jugarAdivinanza(palabraSecreta, intentosMaximos) {
  let intentos = intentosMaximos; // emparejamos intentos con intentosMaximos

  //Mediante un alert, le damos la bienvenida a nuestro usuario
  alert("¡Bienvenido al juego de adivinanza! Adivina la palabra secreta.");

  // Usamos el clico while para estructurar nuestros intentos/juego
  while (intentos > 0) { 
    const respuesta = prompt("Ingresa una palabra:").toLowerCase();//Le pedimos al usuario que ingrese un palabra mediante prompt y convertimos el texto a minusculas.

    if (respuesta === palabraSecreta) { //ultilizamos un condicional, en este caso if/else
      alert("¡Respuesta correcta! Has ganado el juego.");
      return; //Si la respuesta es acertada antes de terminar los intentos, terminamos el clico con nuestro return
    } else {  // De lo conrtrario restamos los intentos y mostramos mediante un alert info de la cantidad de intentos disponibles a nuestro usuario.
      intentos--;
      alert(`Respuesta incorrecta. Te quedan ${intentos} intentos.`);
    }
  }

  if (intentos === 0) { // una vez fuera de nuestro ciclo(cuando el usuario gasto sus 3 oportunidades damos por terminado el juego.)
    alert(`Se te han agotado los intentos. La palabra secreta era "${palabraSecreta}".`);
  }
}

// Llamamos a nuestra funcion, declarando su valores (javascript(como palabra clave) y 3 (como numero de intentos)).
jugarAdivinanza("javascript", 3);



*/
