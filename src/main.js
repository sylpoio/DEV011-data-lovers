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

  //------------------------llamarCharacters-------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  //console.log(data2.films);
  const masInfo = document.querySelectorAll(".info");
  //console.log(buttons);
  let arrInfo = [];
  masInfo.forEach((eventClick) => {
    eventClick.addEventListener("click", (e) => {
      // console.log("desde aqui", e.target.id);
      data.films.filter((movie) => {
        if (movie.id === e.target.id) {
          // console.log(movie.people);
          arrInfo = movie;
        }
      });
      //console.log(arrInfo);
      localStorage.setItem("movieInfoLocalStorage", JSON.stringify(arrInfo));
      window.location.href = "info.html";
    });
  });
});





if (currentPageURL.includes("info")) {
  indexHTML.appendChild(renderItems2()); // Llama a la función para la página de información
} else {
  indexHTML.appendChild(renderItems(data.films)); // Llama a la función para la página principal (o cualquier otra página)
  //------------------------imprimir options-------------------------------------------
  menuDirector.innerHTML=createOptions(data,"director");
  menuProducer.innerHTML=createOptions(data,"producer");
  menuDate.innerHTML=createOptions(data,"release_date");
  menuRtScore.innerHTML=createOptions(data,"rt_score");
  //------------------------imprimir filters-------------------------------------------
  menuDirector.addEventListener("change", ()=>{
    const filterDirector=filterData(data.films,"director",menuDirector.value);
    console.log(indexHTML);

    indexHTML.innerHTML="";
    indexHTML.appendChild(renderItems(filterDirector));
    //indexHTML.innerHTML=renderItems(filterDirector);
  });
}

