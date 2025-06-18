//import { nombre, saludar } from "./archivo.js";

//import funcionDefault from "./archivo.js";
// Importar todo
//import * as Utils from "./archivo.js";
//Utils.sumar(1, 2);

// Export nombrado
export const edad = 30;

// Export por defecto
export default function sumar(a, b) {
  return a + b;
}

// Todo desde un solo objeto
export { edad, sumar };
