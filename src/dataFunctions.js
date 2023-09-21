// estas funciones son de ejemplo

export const selectDirector = (data) => {
  const films = data.films;

    let directorsUnique = "";
  
  const selectDirectorMenu = document.createElement("select");
    selectDirectorMenu.setAttribute("data-testid","select-sort");
    selectDirectorMenu.id="director";
  
const directorsHTML =(films) =>{
  const directorMap = films.map((elem) =>{
    return elem.director;
  });
  const directorsFilter = directorMap.filter((item, index)=>{
    return directorMap.indexOf(item) === index;

  });
  console.log(directorsFilter);

  directorsFilter.forEach(director=>{
    directorsUnique += `<option value=${director}>${director}</option>`;
  }); return directorsUnique;
}
  selectDirectorMenu.innerHTML = directorsHTML(films);
  return selectDirectorMenu;
};

//------------------------select pruducer-------------------------------------------
export const selectProducer = (data) => {
  const films = data.films;
  let producerHTML = "";
  let producerFilter = "";
  let producerUnique = [];
  const selectProducerMenu = document.createElement("select");
  selectProducerMenu.setAttribute("data-testid","select-sort");
  selectProducerMenu.id="producer";

  //identificacmos los datos por productor
  films.forEach((movie) => {
    producerFilter += "," + movie.producer;
    producerUnique = producerFilter.split(",");
  });

  let producerSelect = new Set(producerUnique);
  producerSelect.forEach((producer) => {
    producerHTML += `<option>${producer}</option>`;
  });
  selectProducerMenu.innerHTML = producerHTML;
  return selectProducerMenu;
};
//------------------------select release date -------------------------------------------
export const selectDate = (data) => {
  const films = data.films;
  let dateHTML = "";
  let dateFilter = "";
  let dateUnique = [];
  const selectDateMenu = document.createElement("select");
  selectDateMenu.setAttribute("data-testid","select-sort");
  selectDateMenu.id="release_date";

  //identificacmos los datos por productor
  films.forEach((movie) => {
    dateFilter += "," + movie.release_date;
    dateUnique = dateFilter.split(",");
  });

  let dateSelect = new Set(dateUnique);
  dateSelect.forEach((release) => {
    dateHTML += `<option>${release}</option>`;
  });
  selectDateMenu.innerHTML = dateHTML;
  return selectDateMenu;
};