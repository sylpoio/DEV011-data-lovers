import { filterData, sortData, computeStat } from "./dataFunctions.js";
import { renderItems, renderItems2, createOptions } from "./view.js";
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
  const cleanButton = document.querySelector("#button-clear");
  const stadistics = document.querySelector("#stadistics");

  //------------------------llamar Characters-------------------------------------------

  if (currentPageURL.includes("info")) {
    indexHTML.appendChild(renderItems2()); // Llama a la función para la página de información
  } else {
    indexHTML.appendChild(renderItems(data.films)); // Llama a la función para la página principal (o cualquier otra página)
    accessInfo();

    //------------------------Imprimir estdísticas-------------------------------------------

    stadistics.innerHTML = computeStat(data.films);

    //------------------------imprimir options-------------------------------------------
    menuDirector.innerHTML = createOptions(data, "director");
    menuProducer.innerHTML = createOptions(data, "producer");
    menuDate.innerHTML = createOptions(data, "release_date");
    menuRtScore.innerHTML = createOptions(data, "rt_score");

    //------------------------imprimir filters con select posters-------------------------------------------
    let filterDirector;
    menuDirector.addEventListener("change", () => {
      filterDirector = filterData(data.films, "director", menuDirector.value);
      indexHTML.innerHTML = "";
      indexHTML.appendChild(renderItems(filterDirector));
      stadistics.innerHTML = computeStat(filterDirector);
      accessInfo();
      ascendent.checked = false;
      descendent.checked = false;
    });

    let filterProducer;
    menuProducer.addEventListener("change", () => {
      filterProducer = filterData(data.films, "producer", menuProducer.value);
      indexHTML.innerHTML = "";
      indexHTML.appendChild(renderItems(filterProducer));
      stadistics.innerHTML = computeStat(filterProducer);
      accessInfo();
      ascendent.checked = false;
      descendent.checked = false;
    });

    let filterDate;
    menuDate.addEventListener("change", () => {
      filterDate = filterData(data.films, "release_date", menuDate.value);
      indexHTML.innerHTML = "";
      indexHTML.appendChild(renderItems(filterDate));
      stadistics.innerHTML = computeStat(filterDate);
      accessInfo();
      ascendent.checked = false;
      descendent.checked = false;
    });

    let filterRtScore;
    menuRtScore.addEventListener("change", () => {
      filterRtScore = filterData(data.films, "rt_score", menuRtScore.value);
      indexHTML.innerHTML = "";
      indexHTML.appendChild(renderItems(filterRtScore));
      stadistics.innerHTML = computeStat(filterRtScore);
      accessInfo();
      ascendent.checked = false;
      descendent.checked = false;
    });

    //------------------------Botón limpiar-------------------------------------------

    cleanButton.addEventListener("click", () => {
      indexHTML.innerHTML = "";
      ascendent.checked = false;
      descendent.checked = false;
      indexHTML.appendChild(renderItems(data.films));
      stadistics.innerHTML = computeStat(data.films);
      menuDirector.innerHTML = createOptions(data, "director");
      menuProducer.innerHTML = createOptions(data, "producer");
      menuDate.innerHTML = createOptions(data, "release_date");
      menuRtScore.innerHTML = createOptions(data, "rt_score");
      filterDirector = "";
      filterProducer = "";
      filterDate = "";
      filterRtScore = "";
      accessInfo();
    });
    //------------------------imprimir ascendente/descendente-------------------------------------------
    ascendent.addEventListener("change", () => {
      if (ascendent.checked) {
        let dataToSort = null;
        if (filterDirector) {
          dataToSort = filterDirector;
        } else if (filterProducer) {
          dataToSort = filterProducer;
        } else if (filterDate) {
          dataToSort = filterDate;
        } else if (filterRtScore) {
          dataToSort = filterRtScore;
        } else {
          dataToSort = data.films;
        }
        const ascendentData = sortData(dataToSort, "title", "asc");
        indexHTML.innerHTML = "";
        indexHTML.appendChild(renderItems(ascendentData));
        accessInfo();
        
      }
    });

    descendent.addEventListener("change", () => {
      if (descendent.checked) {
        let dataToSort = null;
        if (filterDirector) {
          dataToSort = filterDirector;
        } else if (filterProducer) {
          dataToSort = filterProducer;
        } else if (filterDate) {
          dataToSort = filterDate;
        } else if (filterRtScore) {
          dataToSort = filterRtScore;
        } else {
          dataToSort = data.films;
        }
        const descendentData = sortData(dataToSort, "title", "desc");
        indexHTML.innerHTML = "";
        indexHTML.appendChild(renderItems(descendentData));
        accessInfo();
        
      }
    });
  }

  //------------------------imprimir hoja HTML info-------------------------------------------

  function accessInfo() {
    const masInfo = document.querySelectorAll(".info");
    //console.log(masInfo, "se renderiza");
    let arrInfo = [];
    masInfo.forEach((eventClick) => {
      eventClick.addEventListener("click", (e) => {
        //console.log("desde aqui", e.target.id);
        data.films.filter((movie) => {
          if (movie.id === e.target.id) {
            arrInfo = movie;
          }
        });
        localStorage.setItem("movieInfoLocalStorage", JSON.stringify(arrInfo));
        window.location.href = "info.html";
      });
    });
  }
});
