function validarEmail(correo) {
  const regex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(correo);
}

console.log(validarEmail("usuario@gmail.com")); // true
console.log(validarEmail("usuario@.com")); // false

function limpiarEspacios(texto) {
  return texto.replace(/\s+/g, " ").trim();
}

console.log(limpiarEspacios("  Hola     mundo   ")); // "Hola mundo"
