const mergeSort = array => {
  const merge = (left, right) => {
    let result = [];
    let il = 0;
    let ir = 0;
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
    return result.concat(left.slice(il)).concat(right.slice(ir));
  };
  const merge_sort = items => {
    if (items.length < 2) {
      return items;
    }
    const middle = Math.floor(items.length / 2);
    const left = items.slice(0, middle);
    const right = items.slice(middle);
    return merge(merge_sort(left), merge_sort(right));
  };
  return merge_sort(array);
};

module.exports = { mergeSort };
