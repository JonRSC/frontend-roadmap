console.log(
  "****************** ELEMENTOS DEL DOCUMENTO ***************************"
);

/*
//Estos no son arreglos, son HTMLCollection
console.log(document.head);
console.log(document.body);
console.log(document.documentElement); //parte del html
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
document.write("<h2>Hola Mundo desde el DOM</h2>");

//Nodos, Elementos y Selectores
console.log("****************** SELECTORES ***************************");
//Todos los elementos por nombre de etiqueta
console.log(document.getElementsByTagName("li")); // HTMLCollection(15) [li, li, li, li, li, li, li, li, li, li, li, li, li, li, li]

//Todos los elementos por nombre de clase
console.log(document.getElementsByClassName("card")); //HTMLCollection(5) [figure.card, figure.card, figure.card, figure.card, figure.card]

//Todos los elementos por nombre de atributo
console.log(document.getElementsByName("nombre")); //NodeList [input]

//Regresa el elemento por Id
console.log(document.getElementById("menu")); // Regresa el código html

//Busca por selector, en este caso # hace referencia a un ID
console.log(document.querySelector("#menu")); //regresa el códifo html

//Busca por selector, en este caso será la etiqueta
console.log(document.querySelector("a"));

//Obtiene todos los elementos con el selector
console.log(document.querySelectorAll("a"));

//Devuelve la longitud del HTML Collection obtenido
console.log(document.querySelectorAll("a").length);

//Imprime cada elemento del Node List
document.querySelectorAll("a").forEach((el) => console.log(el));

//Regresa el primer elemento obtenido de acuerdo al selector, en este caso . por clase
console.log(document.querySelector(".card"));

//Regresa todos los elementos obtenidos de acuerdo al selector, en este caso . por clase
console.log(document.querySelectorAll(".card"));

// obtiene el primer elemento li del selector con el id #menu
console.log(document.querySelector("#menu li"));

// obtiene todos los elementos li del selector con el id #menu
console.log(document.querySelectorAll("#menu li"));

console.log("****************** ATRIBUTOS ***************************");
// Atributo lang
console.log(document.documentElement.lang); // es
//otra forma de acceder al atributo
console.log(document.documentElement.getAttribute("lang"));
//En los enlaces, es mejor usar el método getAttribute()
console.log(document.querySelector(".link-dom").href); //http://127.0.0.1:5500/02-javascript/10-dom/dom.html
console.log(document.querySelector(".link-dom").getAttribute("href")); //./dom.html

//Formas de cambiar el valor de un atributo
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
//Por conveción, es mejor usar el método setAttribute
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const linkDOM = document.querySelector(".link-dom");

//Se cambia el atributo target
linkDOM.setAttribute("target", "_blank");
linkDOM.setAttribute("rel", "noopener");
//Se cambia el href
linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
//Verifica la existencia de un atributo
console.log(linkDOM.hasAttribute("rel"));
//Elimina el atributo
linkDOM.removeAttribute("rel");
console.log(linkDOM.hasAttribute("rel"));

//Data-Attributes
//Se obtiene el Data Attribute
console.log(linkDOM.getAttribute("data-description"));
//Obtiene todos los Data Attribute
console.log(linkDOM.dataset);
//Obtiene el atributo seleccionado de todos los Data Attributes
console.log(linkDOM.dataset.description);
//Formas de cambiar el Data Attribute
linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log(linkDOM.dataset.description);
linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log(linkDOM.dataset.description);
console.log(linkDOM.hasAttribute("data-id"));
linkDOM.removeAttribute("data-id");
console.log(linkDOM.hasAttribute("data-id"));


console.log(
  "****************** ESTILOS Y VARIABLES CSS ***************************"
);

const linkDOM = document.querySelector(".link-dom");

//Regresa un objeto con todas las propiedades CSS válidas
// Las propiedades deben ser con Camel Case
console.log(linkDOM.style); // CSSStyleDeclaration
console.log(linkDOM.getAttribute("style")); //Muestra solo los estilos definidos
console.log(linkDOM.style.backgroundColor);
console.log(linkDOM.style.color);
//Retonar las propiedades dinámicas de css
console.log(window.getComputedStyle(linkDOM));
//Obtener el valor de una propiedad en específico
console.log(getComputedStyle(linkDOM).getPropertyValue("color"));

//Formas de cambiar los estilos
linkDOM.style.setProperty("text-decoration", "none");
linkDOM.style.setProperty("display", "block");
linkDOM.style.width = "50%";
linkDOM.style.textAlign = "center";
linkDOM.style.marginLeft = "auto";
linkDOM.style.marginRight = "auto";
linkDOM.style.padding = "1rem";
linkDOM.style.borderRadius = ".5rem";

//Variables CSS - Custom Properties CSS
const html = document.documentElement,
  body = document.body;

//Se obtiene el valor de root, las variables globales que se definieron en el CSS
let varDarkColor = getComputedStyle(html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle(html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

body.style.backgroundColor = varDarkColor;
body.style.color = varYellowColor;

html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle(html).getPropertyValue("--dark-color");

body.style.setProperty("background-color", varDarkColor);
*/

console.log("****************** CLASES ***************************");
const card = document.querySelector(".card");

console.log(card);
//Devuelve un DOMTokenList con todas las clases del elemento
console.log(card.classList);
// indica si la clase existe
console.log(card.classList.contains("rotate-45")); // false
// agrega una clase
card.classList.add("rotate-45");
console.log(card.classList.contains("rotate-45")); // true
console.log(card.className);
console.log(card.classList);
//Para eliminar una clase
card.classList.remove("rotate-45");

console.log(card.classList.contains("rotate-45"));
// Funciona como interruptor, si tiene la clase, se la quita, si no, se la agrega
// recibe dos parametros,token, y force,
//force es opcional, si se agrega, solo será una operación way-only, recibe un boolean
//si es true, el token solo será añadido, pero no se elimina
//si es false, el token solo será eliminado, pero no será añadido
card.classList.toggle("rotate-45"); // si no está, la agrega, si está, lo elimina
console.log(card.classList.contains("rotate-45"));
card.classList.toggle("rotate-45"); // si no está, la agrega, si está, lo elimina
console.log(card.classList.contains("rotate-45"));
//Cambia la clase por el segundo paámetro
card.classList.replace("rotate-45", "rotate-135");
//Agrega clases, se pueden añadir varias solo separadas por comas
card.classList.add("opacity-80", "sepia");
card.classList.remove("opacity-80", "sepia");
card.classList.toggle("opacity-80", "sepia");
