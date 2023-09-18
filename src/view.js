// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';
//console.log(data.films);
export const renderItems = (data) => {
  const films = data.films;
  let titlesHTML = "";



  //identificacmos los datos de las peliculas
  films.forEach((movie) => {
    titlesHTML += `
    <li class="card" >
      <div class="front" >
        <img itemprop="poster" src=${movie.poster} alt="${movie.title} Poster"/>
      </div>
      <div class="overlay" >  
          <div class="back" >
            <h2 itemprop="titleEIDR">${movie.title}</h2>
            <p itemprop="director">Director: ${movie.director}</p> 
            <p itemprop="producer">Producer: ${movie.producer}</p>  
            <p itemprop="release_date">Release date: ${movie.release_date}</p> 
            <p itemprop="rt_score">Rating score: ${movie.rt_score}</p>
            <p class="info" id=${movie.id}>Da clic aqui para mas informacion</p>
          </div> 
      </div>  
    </li> `;
  });

  return titlesHTML;

};

import data2 from './data/ghibli/ghibli.js';
window.addEventListener('DOMContentLoaded', ()=>{
//console.log(data2.films);
  const buttons = document.querySelectorAll('.info');
  //console.log(buttons);
  let arrPeople = []
  buttons.forEach(button =>{
    button.addEventListener('click', (e)=>{
      console.log("desde aqui", e.target.id);
      const findMovie = data2.films.filter(movie => {
        if (movie.id === e.target.id) {
          console.log(movie.people);
          arrPeople = movie.people
        }
      })
      console.log(arrPeople);
      localStorage.setItem("people", JSON.stringify(arrPeople));
     window.location.href = "info.html";
    })
  })

})


export const renderItems2 = () => {
  const personas = JSON.parse(localStorage.getItem("people"));
  //identificacmos los datos de las peliculas
  let tHTML="";
  personas.forEach((movie) => {
    tHTML += `
    <li class="card">
        <p>${movie.name}</p>
    </li> `;
  });
console.log(tHTML);
  return tHTML;
};