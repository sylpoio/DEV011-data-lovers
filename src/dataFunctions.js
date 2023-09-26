// estas funciones son de ejemplo

export const filterData = (data, filterBy, value) => {

  return data.filter((element) => {
    console.log(value);
    return element[filterBy] === value;
  });
};

//------------------------Sort by alphabetic order-------------------------------------------
export const sortData = (data, sortBy, sortOrder) => {
  const sortedData = data.sort((a, b) => {
    console.log(a[sortBy]);
    if (a[sortBy] < b[sortBy]) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === "desc" ? 1 : -1;
    }
        return 0;
  });
  console.log(sortedData);
  return sortedData;
  };

// export const sortAscendent = (data) => {
//   const ascendent = data.sort((a, b) => {
//     if (a.title < b.title) {
//       return -1;
//     }
//     if (a.title > b.title) {
//       return 1;
//     }
//     return 0;
//   });
//   console.log(ascendent);
//   return ascendent;
// };

// export const sortDescendent = (data) => {
//   const descendent = data.sort((a, b) => {
//     if (a.title < b.title) {
//       return 1;
//     }
//     if (a.title > b.title) {
//       return -1;
//     }
//     return 0;
//   });
//   console.log(descendent);
//   return descendent;
// };

export const computeStat = (data) => {
  const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = sum / data.length;
  const max = data.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);
  const min = data.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue), Infinity);

  console.log (sum)
  return {
    sum: sum,
    average: average,
    max: max,
    min: min
  };
}


