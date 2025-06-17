//Función declarada
function estoEsUnaFuncion() {
  console.log("prueba");
}

//Parámetros por defecto
function saludar(nombre = "desconocido") {
  console.log(`Hola ${nombre}`);
}

saludar("Jon");
saludar();

funcionDeclarada();

// Función expresada vs declarada
function funcionDeclarada() {
  console.log("prueba de una función declarada");
}

//Función expresada o función anónima
//Esta no necesita llevar un nombre, una función que se le ha asignado como valor a una variable
//No es hoisteada, por lo que no puede ser invocada antes de ser declarada

//functionExpresada // imprime ´error´

const funcionExpresada = function () {
  console.log("Ejemplo de una función expresada");
};
