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
*/

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
