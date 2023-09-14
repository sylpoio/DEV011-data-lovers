// estas funciones son de ejemplo


export const renderItems = (data) => {
  const films = data.films;
  const people = data.films.people;
  let titlesHTML = "";

  //identificacmos los datos de las peliculas
  films.forEach((movie) => {
    titlesHTML += `
    <li class="card" onclick="miFunc()">
      <div class="front">
        <img src=${movie.poster} alt="${movie.title} Poster" class="primer"/>
      </div>
      <div class="back">
      <img src="images/tarjeta2.jpg" alt="informacion" class="segunda"/>
      <div class="title">${movie.title}</div>
      <img src=${movie.poster} alt="${movie.title} Poster" class="imgSmall"/>
      <table border=0 class="description">
        <tr>
        <td width="180px">Director:${movie.director}</td>
        <td><a href="people.html">People: </a></td>
        </tr>

        <tr>
        <td>Producer: ${movie.producer}</td>
        <td><a href="">Locations: </a></td>
        </tr>

        <tr>
        <td>Release date: ${movie.release_date}</td>
        <td><a href="">Vehicles: </a></td>
        </tr>

        <tr><td>Score: ${movie.rt_score}</td></tr>
      </table>
      </div>
    </li> `;
  });

  return titlesHTML;
};
