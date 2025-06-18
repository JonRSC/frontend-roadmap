//Las IIFE se definen como funciones anónimas autoejecutables
//Se envuelven en paréntesis y se coloca la invocación al final
(function () {
  console.log("Hola");
})();

// Arrow function
(() => {
  console.log("Ejecutada al instante");
})();

// Encapsulamiento de variables
(function () {
  const token = "asfjbknccvs";
  console.log("token generado");
})();

//console.log(token); // ReferenceError: token is invalid

// ejecutar funciones al cargar el script
(() => {
  console.log("Script cargado correctamente");
})();
