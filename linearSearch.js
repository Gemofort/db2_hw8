const linearSearch = (arr, item) => {
  for (let elem of arr) {
    if (elem === item) return arr.indexOf(elem);
  }
  return -1;
};

module.exports = { linearSearch };
