// estas funciones son de ejemplo

export const renderItems = (data) => {
  const films = data;
  let titlesHTML = "";

  const ul = document.createElement("ul");
  ul.id = "container";
//console.log(data);
  //identificacmos los datos de las peliculas
  films.forEach((movie) => {
    titlesHTML += `
    <li class="card" itemtype="films">
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
  ul2.id = "container";

  //console.log(arrPeople);
  arrPeople.forEach((people) => {
    peopleHTML += `
     <li class="card">
       <div class="front"><img src="images/tarjeta2.jpg" alt="informacion"/></div>
       <div class="imgSmall"><img src=${people.img} alt="${people.name} Poster"/></div>
       <div class="name">${people.name}</div>
       <table border=0 class="description">
         <tr>
         <td width="180px">Gender: ${people.gender}</td>
         </tr>
         <tr>
         <td>Age: ${people.age}</td>
         </tr>
         <tr>
         <td>Eye color: ${people.eye_color}</td>
         </tr>
         <tr><td>Hair color: ${people.hair_color}</td></tr>
        </table>
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
  uniqueOptions.forEach((element) => {
    options += `<option value="${element}">${element}</option>`;
  });
  //console.log(options);
  return options;
};