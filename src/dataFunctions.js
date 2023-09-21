// estas funciones son de ejemplo

export const selectDirector = (data) => {
  const films = data.films;
  let directoresHTML = "";
  let direcFilter = "";
  let direcUnico = [];
  const selectDirector = document.createElement("select");
  //identificacmos los datos de las peliculas
  films.forEach((movie) => {
    direcFilter += "," + movie.director; //crea los elementos del array directores por nombre
    direcUnico = direcFilter.split(","); //separa los nombres por coma
    // if(!direcFilter[movie]){
    // direcUnicos = direcFilter.filter((direcFilterA, index) =>{
    //   direcFilterA.indexOf(direcFilter) === index;
    // });
    //console.log(direcFilter);
    //  directoresHTML += `
    //     <option>${direcFilter[movie] = true}</option>`;
    // }
    //console.log(direcUnico);
  });

  let dUnicas = new Set(direcUnico); //toma solo los daros unicos del director
  dUnicas.forEach((director) => {
    console.log(director);
    directoresHTML += `<option>${director}</option>`;
  }); //recorre el arreglo director para crear los <option>

  // directoresHTML = "<option>" + dUnicas + "</option>";
  //const direcUnico = Object.values(direcFilter);
  // console.log(directoresHTML);
  //return direcFilter;
  selectDirector.innerHTML = directoresHTML;
  return selectDirector;
};

//------------------------select pruducer-------------------------------------------
export const selectProducer = (data) => {
  const films = data.films;
  let producerHTML = "";
  let producerFilter = "";
  let producerUnico = [];
  const selectProducer = document.createElement("select");
  //identificacmos los datos por productor
  films.forEach((movie) => {
    producerFilter += "," + movie.producer;
    producerUnico = producerFilter.split(",");
  });

  let pUnicas = new Set(producerUnico);
  pUnicas.forEach((producer) => {
    producerHTML += `<option>${producer}</option>`;
  });
  selectProducer.innerHTML = producerHTML;
  return selectProducer;
};
//------------------------select release date -------------------------------------------
export const selectDate = (data) => {
  const films = data.films;
  let dateHTML = "";
  let dateFilter = "";
  let dateUnico = [];
  const selectDate = document.createElement("select");
  //identificacmos los datos por productor
  films.forEach((movie) => {
    dateFilter += "," + movie.release_date;
    dateUnico = dateFilter.split(",");
  });

  let rUnicas = new Set(dateUnico);
  rUnicas.forEach((release) => {
    dateHTML += `<option>${release}</option>`;
  });
  selectDate.innerHTML = dateHTML;
  return selectDate;
};

export const anotherExample = () => {
  return [];
};
