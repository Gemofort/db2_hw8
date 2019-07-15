const bubbleSort = arr => {
  let swapped;
  do {
    swapped = false;
    for (let i in arr) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

module.exports = { bubbleSort };
