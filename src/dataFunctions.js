// estas funciones son de ejemplo

export const example = (data) => {
  const films = data.films;
  let directoresHTML = "";
  const direcFilter = {};

  const selectDirector = document.createElement("select");
  //identificacmos los datos de las peliculas
  films.forEach((movie) => {
    
    if(!direcFilter[movie]){
      //console.log(movie);
     directoresHTML += `
        <option>${direcFilter[movie] = true}</option>`;
    }
  });
  
  selectDirector.innerHTML = directoresHTML
  return selectDirector;
 
};


export const anotherExample = () => {
  return [];
};