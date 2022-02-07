const filterByProfilePath = array => {
  const newArr = [];
  for (let arr of array) {
    if (arr.profile_path) {
      newArr.push(arr);
    }
  }
  return newArr;
};

const filterByPosterPath = array => {
  const newArr = [];
  for (let arr of array) {
    if (arr.poster_path) {
      newArr.push(arr);
    }
  }
  return newArr;
};

export { filterByProfilePath, filterByPosterPath };
