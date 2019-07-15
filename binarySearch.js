const binarySearch = async (arr, x, start, end) => {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return mid;
  if (arr[mid] > x) {
    return binarySearch(arr, x, start, mid - 1);
  } else {
    return binarySearch(arr, x, mid + 1, end);
  }
};

module.exports = { binarySearch };