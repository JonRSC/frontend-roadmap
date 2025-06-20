//Ambos temporizadores reciben un callback y un timer expresado en ms

//Se ejecuta una sola vez
setTimeout(() => {
  console.log("Ejecutando un setTimeOut");
}, 1000); // 1 second

//Se cancela usando el id que retorna

const timeId = setTimeout(() => {
  console.log("Ejecutando un setTimeOut usando su id");
}, 1000); // 1 second

clearTimeout(timeId); // no se ejecuta

//Se ejecuta constantemente
setInterval(() => {
  console.log("me ejecuto cada dos segundos");
}, 2000); // 2 seconds

const intervalId = setInterval(() => {
  console.log("me ejecuto cada dos segundos y retorno un id");
}, 2000); // 2 seconds

clearInterval(intervalId);
