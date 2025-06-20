/*
Estado	Descripción
Pending	La operación aún no se ha completado
Fulfilled	La operación se completó exitosamente (resolve)
Rejected	La operación falló (reject)
*/

const promesa = new Promise((resolve, reject) => {
  // operación asíncrona
  if (todoSalióBien) {
    resolve("Éxito");
  } else {
    reject("Error");
  }
});

promesa
  .then((resultado) => {
    console.log("Todo bien:", resultado); // se resuelve
  })
  .catch((error) => {
    console.error("Algo salió mal:", error); //falla
  })
  .finally(() => {
    console.log("Siempre se ejecuta");
  });

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: "Jon" });
      } else {
        reject("Usuario no encontrado");
      }
    }, 1000);
  });
};

getUser(1)
  .then((user) => console.log("Usuario:", user)) //encontró al usuario
  .catch((err) => console.error("Error:", err)); //no lo encontró

getUser(1)
  .then((user) => user.name) // resulve la promesa y obtiene el nombre
  .then((name) => console.log("Nombre:", name)) // despues da el nombre
  .catch((err) => console.error(err)); //falla la promesa
