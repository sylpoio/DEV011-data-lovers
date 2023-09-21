import { selectDirector,selectProducer, selectDate } from "./dataFunctions.js";
import { renderItems, renderItems2 } from "./view.js";

// import data from './data/lol/lol.js';
import data from "./data/ghibli/ghibli.js";

const indexHTML = document.querySelector("#root");
const selecD = document.querySelector('[for="director"]');
const selecP = document.querySelector('[for="producer"]');
const selecR = document.querySelector('[for="release_date"]');
const currentPageURL = window.location.href;

//console.log(currentPageURL);
if (currentPageURL.includes("info")) {
  indexHTML.appendChild(renderItems2()); // Llama a la función para la página de información
} else {
  indexHTML.appendChild(renderItems(data)); // Llama a la función para la página principal (o cualquier otra página)
  selecD.appendChild(selectDirector(data));
  selecP.appendChild(selectProducer(data));
  selecR.appendChild(selectDate(data));
  //console.log(example(data));
}

// import data from './data/rickandmorty/rickandmorty.js';
//console.log(renderItems2);
