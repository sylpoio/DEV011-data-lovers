// estas funciones son de ejemplo

export const renderItems = (data) => {
  const films = data.films;
  let titlesHTML = "";

  //identificacmos los datos de las peliculas
  films.forEach((movie) => {
    titlesHTML += `
    <li class="card">
      <div class="front">
        <img src=${movie.poster} alt="${movie.title} Poster"/>
        <h3>${movie.title}</h3>
      </div>
      <div class="back">
        <div class="title">${movie.title}</div>
        <div class="back-card2"><img src="images/tarjeta2.jpg" alt="informacion"/></div>
        <div class="imgSmall"><img src=${movie.poster} alt="${movie.title} Poster"/></div>
        <div class="description">${movie.description}</div>
      </div>
    </li> `;
  });

  return titlesHTML;
};