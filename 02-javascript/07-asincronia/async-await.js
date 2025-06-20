const obtenerDatos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("📦 Datos listos"), 1000);
  });
};

//Async devuelve una promise
async function mostrar() {
  console.log("🔍 Esperando...");
  const datos = await obtenerDatos(); // aquí se espera a que se resuelva
  console.log(datos); // 📦 Datos listos
}

mostrar();

async function manejarErrores() {
  try {
    const resultado = await fetch("https://api-fake.com/user"); //Espera
    const data = await resultado.json(); //espera a que se convierta en json
    console.log(data);
  } catch (error) {
    console.error("❌ Error capturado:", error); //maneja el error o el rechazo de la promesa
  }
}
