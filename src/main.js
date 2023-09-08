import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, renderItems, data);


const prueba = document.getElementById('root');


//mandamos a llmar las peliculas
const listFilms = data.films;




prueba.innerHTML = renderItems;