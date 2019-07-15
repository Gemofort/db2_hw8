const { linearSearch } = require('./linearSearch');
const { binarySearch } = require('./binarySearch');
const { bubbleSort } = require('./bubbleSort');
const { selectionSort } = require('./selectionSort');
const { quickSort } = require('./quickSort');
const { mergeSort } = require('./mergeSort');
const { fibonacci } = require('./fibonacci');

let arrExample = ['a', 'b', 'c', 'd', 'e'];
let arr2Example = [1, 3, 12, -1, 5, 7, 8, 9];
let arr3Example = [3, 6, 2, 56, 32, 5, 89, 32, 148, 322, 228, 1337];
let arr4Example = [3, 6, 2, 56, 32, 5, 89, 32, 148, 322, 228, 1337, -1, 1236815];

(() => {
  console.log('Linear search:');
  console.log(linearSearch(arrExample, 'a') + '\n');
  console.log('Binary search:');
  console.log(binarySearch(arr2Example, 3, 0, arr2Example.length - 1) + '\n');
  console.log('Bubble sort:');
  console.log(bubbleSort(arr2Example) + '\n');
  console.log('Selection sort:');
  console.log(selectionSort(arr3Example) + '\n');
  console.log('Quick sort:');
  console.log(quickSort(arr4Example) + '\n');
  console.log('Merge sort:');
  console.log(mergeSort(arr4Example) + '\n');
  console.log('Fibonacci:');
  console.log(fibonacci(6) + '\n');
})();
