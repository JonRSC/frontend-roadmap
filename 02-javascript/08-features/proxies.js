/**
 * crea un intermediario para otro objeto, el cual puede interceptar y redefinir operaciones fundamentales para dicho objeto
 */

const persona = {
  nombre: "",
  apellido: "",
  edad: "",
};

const handler = {
  set(obj, prop, value) {
    //obj: la plantilla del objeto
    //prop: la propiedad que se recibe
    //value: valor asignado
    obj[prop] = value;
  },
};

const jon = new Proxy(persona, handler);

jon.nombre = "Jon";
jon.apellido = "salazar";
jon.edad = 35;
console.log(jon);
