// estas funciones son de ejemplo

export const example = (data) => {
  const films = data.films;
  let directoresHTML = "";

  const selectDirector = document.createElement("select");
  //identificacmos los datos de las peliculas
  films.forEach((movie) => {
    directoresHTML += `
        <option>${movie.director}</option>`;
  });
  
  selectDirector.innerHTML = directoresHTML
  return selectDirector;
 
};


// export const example = (data) => {
//   const films = data.films;
//   console.log(films);
//   // let directorHTML = "";
//   // const selectDirector = document.createElement("select");

//   // films.forEach((movie) => {
//   //   directorHTML += `
//   //   <option>${movie.director}</option>
//   //   `;
//   // });
  
//   return example;

  
// };


export const anotherExample = () => {
  return [];
};