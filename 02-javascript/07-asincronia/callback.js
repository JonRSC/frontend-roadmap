//Un callback es simplemente una función que se pasa como argumento a otra función, y se invoca después de que ocurre una operación.

function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

function procesarUsuario(nombre, callback) {
  callback(nombre);
}

procesarUsuario("Jon", saludar);

//El setTimeout recibe una función como callback.

//Esa función no se ejecuta de inmediato, sino cuando se cumple el tiempo.
setTimeout(() => {
  console.log("Esto se ejecuta después de 2 segundos");
}, 2000);
