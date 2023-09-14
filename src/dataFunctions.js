// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};

function myFunc() {
  const parteFront = document.getElementsByClassName('front');
  const parteBack = document.getElementsByClassName('back');
  
 if (parteFront.style.visibility === 'hidden') {
  parteFront.style.visibility = 'visible';
} else {
  parteFront.style.visibility = 'hidden';
  parteBack.style.visibility = 'hidden';
}

}