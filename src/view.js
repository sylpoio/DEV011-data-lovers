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
        </div>
        <div class= overlay>  
          <div class="back">
            <div class="decription">
              <h3>${movie.title}</h3>
              <p>${movie.description}</p>
            </div>  
          </div>  
          <div class="back-card2">
            <div class="title"></div>
            <div class="poster"></div>
          </div>
        </div>
      </div>
    </li> `;
  });

  return titlesHTML;
};
