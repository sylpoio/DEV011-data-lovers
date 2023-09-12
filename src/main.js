//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

const prueba = document.getElementById('container');
prueba.innerHTML = renderItems(data);
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, renderItems, data);


