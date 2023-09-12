// estas funciones son de ejemplo

export const renderItems = (data) => {
  const films = data.films;
  let titlesHTML  = "";

  //identificacmos los datos de las peliculas
  films.forEach((movie) => {
    titlesHTML += `
    <li>
    <img src=${movie.poster} alt="${movie.title} Poster"/>
    <h3>${movie.title}</h3>
    </li>`;
  });

  return titlesHTML;
};

//<h3>${movie.title}</h3>
//<p>${movie.description}</p>