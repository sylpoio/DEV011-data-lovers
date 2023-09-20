// estas funciones son de ejemplo
//import data from "./data/ghibli/ghibli.js";
//console.log(data.films);
export const renderItems = (data) => {
  const films = data.films;
  let titlesHTML = "";

  const ul = document.createElement("ul");
  ul.id='container';



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
  
  ul.innerHTML = titlesHTML
  return ul;
};


import data2 from "./data/ghibli/ghibli.js";
window.addEventListener("DOMContentLoaded", () => {
  //console.log(data2.films);
  const masInfo = document.querySelectorAll(".info");
  //console.log(buttons);
  let arrInfo = [];
  masInfo.forEach((eventClick) => {
    eventClick.addEventListener("click", (e) => {
      // console.log("desde aqui", e.target.id);
      data2.films.filter((movie) => {
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

export const renderItems2 = () => {
  const info = JSON.parse(localStorage.getItem("movieInfoLocalStorage"));
  //console.log(info);
  //identificacmos los datos de las peliculas
  let peopleHTML = "";
  const arrPeople = info.people;

  const ul2 = document.createElement("ul");
  ul2.id='container';

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
  ul2.innerHTML = peopleHTML
  return ul2;
};