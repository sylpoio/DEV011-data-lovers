// estas funciones son de ejemplo

export const filterData = (data, filterBy, value) => {
  return data.filter((element)=>{
    console.log (value);
    return element[filterBy] === value;
  });

};