// estas funciones son de ejemplo

export const renderItems = (data) => {
  let titlesHTML = "";

  const ul = document.createElement("ul");
  ul.id = "container";

  //identificacmos los datos de las peliculas
  data.forEach((movie) => {
    titlesHTML += `
    <li class="card" itemscope itemtype="films">
      <div class="front" >
        <img itemprop="poster" src=${movie.poster} alt="${movie.title} Poster"/>
      </div>
      <div class="overlay" >  
        <h2 itemprop="title">${movie.title}</h2>
        <p itemprop="director">Director: ${movie.director}</p> 
        <p itemprop="producer">Producer: ${movie.producer}</p>  
        <p itemprop="release_date">Release date: ${movie.release_date}</p> 
        <p itemprop="rt_score">Rating score: ${movie.rt_score}</p>
        <p class="info" id=${movie.id}> >>Click here for more info<< </p> 
  </div>  
    </li> `;
  });

  ul.innerHTML = titlesHTML;
  return ul;
};

//------------------------Crear options-------------------------------------------

export const createOptions = (data, option) => {
  const optionsMap = data.films.map((elements) => {
    // console.log(elements[option]);
    return elements[option];
  });
  const uniqueOptions = optionsMap.filter((item, index) => {
    return optionsMap.indexOf(item) === index;
  });

  let options = "";
  const optionsNull = `<option value="" disabled selected> select</option>`;
  uniqueOptions.forEach((element) => {
    options += `<option value="${element}">${element}</option>`;
  });
  //console.log(options);
  return optionsNull + options;
};
//------------------------Crear description segunda hoja-------------------------------------------
export const description = () =>{
  const infoComplete = JSON.parse(localStorage.getItem("movieInfoLocalStorage"));

  const infoDescription = 
     `<div class="movieDescription">
       <img id="poster" src=${infoComplete.poster} alt="${infoComplete.title} Poster"/>
        <div id="infoMovie">
          <p>${infoComplete.description}</p><br><br>
          <button id="people">PEOPLE </button> <button id="location">LOCATION </button> <button id="vehicles">VEHICLES </button>
          </div>
      </div>`;
  //console.log(infoDescription);
  return infoDescription;
};

export const renderItems2 = () => {
  const info = JSON.parse(localStorage.getItem("movieInfoLocalStorage"));
  //console.log(info);
  //identificacmos los datos de las peliculas
  let peopleHTML = "";
  const arrPeople = info.people;

  const ul2 = document.createElement("ul");
  ul2.id = "container2";
  //console.log(arrPeople);
  arrPeople.forEach((people) => {
    peopleHTML += `
     <li class="card2">
      <p class="peopleName">${people.name}</p>
      <p class="specie">Specie: ${people.specie}</p>
       <img src="images/tarjeta2.jpg" alt="informacion"/>
       <img class="imgSmall" src=${people.img} alt="${people.name} Poster"/>
       <table>
       <tr>
         <td>Gender: ${people.gender}</td>
         <td class="age">Age: ${people.age} </td>
       </tr>
       <tr>
         <td colspan="2">Eye color: ${people.eye_color}</td>
        </tr>
        <tr>
         <td colspan="2">Hair color: ${people.hair_color}</td>
       </tr>
     </table>
     </li> `;
  });
  //console.log(tHTML);
  ul2.innerHTML = peopleHTML;
  return ul2;
};

export const renderItems3 = () => {
  const infoLocation = JSON.parse(localStorage.getItem("movieInfoLocalStorage"));
  //console.log(info);
  //identificacmos los datos de las peliculas
  let locationsHTML = "";
  const arrLocations = infoLocation.locations;

  const ul3 = document.createElement("ul");
  ul3.id = "container2";
  //console.log(arrLocations);
  arrLocations.forEach((location) => {
    locationsHTML += `
     <li class="card2">
     <p class="peopleName">${location.name}</p>
       <img src="images/tarjeta2.jpg" alt="informacion"/>
       <img class="imgSmall" src=${location.img} alt="${location.name} Poster"/>
       <table>
       <tr>
         <td>Climate: ${location.climate}</td>
       </tr>
       <tr>
         <td>Terrain: ${location.terrain}</td>
        </tr>
        <tr>
         <td>Surface water: ${location.surface_water}</td>
       </tr>
     </table>
     </li> `;
  });
  //console.log(tHTML);
  ul3.innerHTML = locationsHTML;
  return ul3;
};

export const renderItems4 = () => {
  const infoVehicles = JSON.parse(localStorage.getItem("movieInfoLocalStorage"));
  //console.log(info);
  //identificacmos los datos de las peliculas
  let vehiclesHTML = "";
  const arrVehicles = infoVehicles.vehicles;

  const ul4 = document.createElement("ul");
  ul4.id = "container2";
  //console.log(arrVehicles);
  arrVehicles.forEach((vehicles) => {
    vehiclesHTML += `
     <li class="card2">
     <p class="peopleName">${vehicles.name}</p>
       <img src="images/tarjeta2.jpg" alt="informacion"/>
       <img class="imgSmall" src=${vehicles.img} alt="${vehicles.name} Poster"/>
       <p class="vehivlesDescription">${vehicles.description}</p>
     </li> `;
  });
  //console.log(tHTML);
  ul4.innerHTML = vehiclesHTML;
  return ul4;
};
