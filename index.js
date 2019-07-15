const { linearSearch } = require('./linearSearch');
const { binarySearch } = require('./binarySearch');
const { bubbleSort } = require('./bubbleSort');
const { selectionSort } = require('./selectionSort');
const { quickSort } = require('./quickSort');

let arrExample = ['a', 'b', 'c', 'd', 'e'];
let arr2Example = [1, 3, 5, 7, 8, 9];
let arr3Example = [3, 6, 2, 56, 32, 5, 89, 32, 148, 322, 228, 1337];
let arr4Example = [3, 6, 2, 56, 32, 5, 89, 32, 148, 322, 228, 1337, -1, 20000000, 12368152412441247];

(async () => {
  console.log('Linear search:');
  console.log(await linearSearch(arrExample, 'a') + '\n');
  console.log('Binary search:');
  console.log(await binarySearch(arr2Example, 3, 0, arr2Example.length - 1) + '\n');
  console.log('Bubble sort:');
  console.log(await bubbleSort(arr2Example) + '\n');
  console.log('Selection sort:');
  console.log(await selectionSort(arr3Example) + '\n');
  console.log('Quick sort:');
  console.log(await quickSort(arr4Example) + '\n');
})();