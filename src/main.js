//import { example } from './dataFunctions.js';
import { renderItems, renderItems2 } from "./view.js";

// import data from './data/lol/lol.js';
import data from "./data/ghibli/ghibli.js";

const indexHTML = document.querySelector("#root");

const currentPageURL = window.location.href;

console.log(currentPageURL);
if (currentPageURL.includes("info")) {
  infoHTML.appendChild(renderItems2()); // Llama a la función para la página de información
} else {
  indexHTML.appendChild(renderItems(data)); // Llama a la función para la página principal (o cualquier otra página)
}

// import data from './data/rickandmorty/rickandmorty.js';
//console.log(renderItems2);
