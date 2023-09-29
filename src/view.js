// estas funciones son de ejemplo

export const renderItems = (data) => {
  let titlesHTML = "";

  const ul = document.createElement("ul");
  ul.id = "container";
  console.log(data);
  //identificacmos los datos de las peliculas
  data.forEach((movie) => {
    titlesHTML += `
    <li class="card" itemscope itemtype="films">
      <div class="front" >
        <img itemprop="poster" src=${movie.poster} alt="${movie.title} Poster"/>
      </div>
      <div class="overlay" >  
      <div class="back">
        <h2 itemprop="title">${movie.title}</h2>
        <p itemprop="director">Director: ${movie.director}</p> 
        <p itemprop="producer">Producer: ${movie.producer}</p>  
        <p itemprop="release_date">Release date: ${movie.release_date}</p> 
        <p itemprop="rt_score">Rating score: ${movie.rt_score}</p>
        <p class="info" id=${movie.id}> >>Click here for more info<< </p>
      </div> 
  </div>  
    </li> `;
  });

  ul.innerHTML = titlesHTML;
  return ul;
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
       <img src="images/tarjeta2.jpg" alt="informacion"/>
       <img class="imgSmall" src=${people.img} alt="${people.name} Poster"/>
     </li> `;
  });
  //console.log(tHTML);
  ul2.innerHTML = peopleHTML;
  return ul2;
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
