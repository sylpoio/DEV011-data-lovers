// estas funciones son de ejemplo

export const filterData = (data, filterBy, value) => {
  return data.filter((element) => {
    return element[filterBy] === value;
  });
};

//------------------------Sort by alphabetic order-------------------------------------------
export const sortData = (data, sortBy, sortOrder) => {
  const copiedData = [...data];
  const sortedData = copiedData.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === "desc" ? -1 : 1;
    }
    return 0;
  });
  return sortedData;
};
//------------------------Stadistics------------------------------------------

export const computeStat = (data) => {
  //const dataNum=data.length
  const sum = data.reduce((a, b, c) => 1 + c, 0);
  return sum;
};
