import { filterData, sortData } from "./dataFunctions.js";
import { renderItems, renderItems2, createOptions } from "./view.js";

// import data from './data/lol/lol.js';
import data from "./data/ghibli/ghibli.js";

window.addEventListener("DOMContentLoaded", () => {
  const indexHTML = document.querySelector("#root");
  const menuDirector = document.querySelector("#director");
  const menuProducer = document.querySelector("#producer");
  const menuDate = document.querySelector("#release_date");
  const menuRtScore = document.querySelector("#rt_score");
  const currentPageURL = window.location.href;
  const ascendent = document.querySelector("#ascendent");
  const descendent = document.querySelector("#descendent");
  const cleanButton=document.querySelector("#button-clear")

  //------------------------llamar Characters-------------------------------------------

  if (currentPageURL.includes("info")) {
    indexHTML.appendChild(renderItems2()); // Llama a la función para la página de información
  } else {
    indexHTML.appendChild(renderItems(data.films)); // Llama a la función para la página principal (o cualquier otra página)

    //------------------------imprimir options-------------------------------------------
    menuDirector.innerHTML = createOptions(data, "director");
    menuProducer.innerHTML = createOptions(data, "producer");
    menuDate.innerHTML = createOptions(data, "release_date");
    menuRtScore.innerHTML = createOptions(data, "rt_score");

    //------------------------imprimir filters con select posters-------------------------------------------
    menuDirector.addEventListener("change", () => {
      const filterDirector = filterData(
        data.films,
        "director",
        menuDirector.value
      );
      indexHTML.innerHTML = "";
      indexHTML.appendChild(renderItems(filterDirector));
      accessInfo();
    });
  };

  menuProducer.addEventListener("change", () => {
    const filterProducer = filterData(
      data.films,
      "producer",
      menuProducer.value
    );
    indexHTML.innerHTML = "";
    indexHTML.appendChild(renderItems(filterProducer));
    accessInfo();
  });
  menuDate.addEventListener("change", () => {
    const filterDate = filterData(data.films, "release_date", menuDate.value);
    indexHTML.innerHTML = "";
    indexHTML.appendChild(renderItems(filterDate));
    accessInfo();
  });
  menuRtScore.addEventListener("change", () => {
    const filterRtScore = filterData(data.films, "rt_score", menuRtScore.value);
    indexHTML.innerHTML = "";
    indexHTML.appendChild(renderItems(filterRtScore));
    accessInfo();
  });

  //------------------------Botón limpiar-------------------------------------------

  cleanButton.addEventListener("click", ()=> {
    descendent.checked=false;
    ascendent.checked=false;
    indexHTML.innerHTML = "";
    indexHTML.appendChild(renderItems(data.films));
    accessInfo();
    console.log(renderItems(data.films))
  });

  //------------------------imprimir ascendente/descendente-------------------------------------------
  ascendent.addEventListener("change", () => {
    if (ascendent.checked) {
      const ascendentData = sortData(data.films, "title", "asc");
      indexHTML.innerHTML = "";
      console.log("Datos ordenados de forma ascendente:", renderItems(ascendentData));
          indexHTML.appendChild(renderItems(ascendentData));
      accessInfo();
    }
  });

  descendent.addEventListener("change", () => {
    if (descendent.checked) {
      const descendentData = sortData(data.films,"title", "desc");
      indexHTML.innerHTML = "";
      console.log("Datos ordenados de forma descendente:", renderItems(descendentData));
      indexHTML.appendChild(renderItems(descendentData));
      accessInfo();
    }
  });



  //------------------------imprimir hoja HTML info-------------------------------------------

  function accessInfo() {
    //console.log(data2.films);
    const masInfo = document.querySelectorAll(".info");
    //console.log(masInfo, "se renderiza");
    //console.log(buttons);
    let arrInfo = [];
    masInfo.forEach((eventClick) => {
      eventClick.addEventListener("click", (e) => {
        console.log("desde aqui", e.target.id);
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
  }
});
