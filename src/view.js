// estas funciones son de ejemplo

export const renderItems = (data) => {

  const films = data.films;
  let titlesHTML= "";

  //identificacmos los datos de las peliculas
  films.forEach(movie => {
    titlesHTML+=`<ul>
    <li>${movie.title}</li>
    <img src=${movie.poster}/>
    <span>${movie.description}</span>
    </ul>`
  });

};


 return titlesHTML
  
};
