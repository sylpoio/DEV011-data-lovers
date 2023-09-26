// estas funciones son de ejemplo

export const filterData = (data, filterBy, value) => {
  return data.filter((element) => {
    console.log(value);
    return element[filterBy] === value;
  });
};

//------------------------Sort by alphabetic order-------------------------------------------
export const sortAscendent = (data) => {
  const ascendent = data.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  console.log(ascendent);
  return ascendent;
};

export const sortDescendent = (data) => {
  const descendent = data.sort((a, b) => {
    if (a.title < b.title) {
      return 1;
    }
    if (a.title > b.title) {
      return -1;
    }
    return 0;
  });
  console.log(descendent);
  return descendent;
};
