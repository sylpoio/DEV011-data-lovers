// estas funciones son de ejemplo

export const renderItems = (data) => {
  const films = data.films;
  let titlesHTML  = "";

  //identificacmos los datos de las peliculas
  films.forEach((movie) => {
    titlesHTML += `
    <li class="card">
      <div class="front">
        <img src=${movie.poster} alt="${movie.title} Poster"/>
        <h3>${movie.title}</h3>
      </div>
      <div class="back">
        <div class="title"></div>
        <div class="poster"></div>
        <div class="decription"></div>
        <div class="back-card2"></div>
      </div>
    </li> `;
  });

  return titlesHTML;
};