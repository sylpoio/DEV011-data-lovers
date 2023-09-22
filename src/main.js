import { filterData } from "./dataFunctions.js";
import { renderItems, renderItems2, createOptions } from "./view.js";

// import data from './data/lol/lol.js';
import data from "./data/ghibli/ghibli.js";

let indexHTML = document.querySelector("#root");
const menuDirector = document.querySelector("#director");
const menuProducer = document.querySelector("#producer");
const menuDate = document.querySelector("#release_date");
const menuRtScore = document.querySelector("#rt_score");




const currentPageURL = window.location.href;

if (currentPageURL.includes("info")) {
  indexHTML.appendChild(renderItems2()); // Llama a la función para la página de información
} else {
  indexHTML.appendChild(renderItems(data)); // Llama a la función para la página principal (o cualquier otra página)
  //------------------------imprimir options-------------------------------------------
  menuDirector.innerHTML=createOptions(data,"director");
  menuProducer.innerHTML=createOptions(data,"producer");
  menuDate.innerHTML=createOptions(data,"release_date");
  menuRtScore.innerHTML=createOptions(data,"rt_score");
  //------------------------imprimir filters-------------------------------------------
  menuDirector.addEventListener("change", ()=>{
    const filterDirector=filterData(data.films,"director",menuDirector.value);
    console.log("ver", filterDirector);
    indexHTML="";
    indexHTML.appendChild(renderItems(filterDirector));
  });
}

