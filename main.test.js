const { unsortedNumbers, sortedNumbers, nestedNumbers } = require('./constant');
const { bubbleSort } = require('./bubble-sort');
const { insertionSort, insertionSortV2 } = require('./insertion-sort');
const {
  recursiveFibonacci,
  iterativeFibonacci,
  nestedAddition,
  factorial,
} = require('./recursion');
const { mergeSort } = require('./merge-sort');
const { quickSort } = require('./quick-sort');

test('bubble sort', () => {
  const result = bubbleSort([...unsortedNumbers]);
  expect(result).toEqual(sortedNumbers);
});

test('insertion sort', () => {
  const result = insertionSortV2([...unsortedNumbers]);
  expect(result).toEqual(sortedNumbers);
});

test('fibonacci', () => {
  const result = recursiveFibonacci(6); // asking the sixth value of fibonacci sequence
  expect(result).toEqual(8);
});

test('nested addition', () => {
  expect(nestedAddition([1, 2, 3], 0)).toEqual(6);
  expect(nestedAddition([1, [2], 3], 0)).toEqual(6);
  expect(nestedAddition([[[[[[[[[5]]]]]]]]], 0)).toEqual(5);
  expect(nestedAddition([10, [12, 14, [1], [16, [20]]], 10, 11], 0)).toEqual(94);
});

test('factorial', () => {
  expect(factorial(5)).toEqual(120);
  expect(factorial(3)).toEqual(6);
  expect(factorial(1)).toEqual(1);
  expect(factorial(0)).toEqual(1);
});

test('merge sort', () => {
  const result = mergeSort([...unsortedNumbers]);
  expect(result).toEqual(sortedNumbers);
});

test('quick sort', () => {
  expect(quickSort([4, 2, 6, 1], false)).toEqual([1, 2, 4, 6]);
  expect(quickSort([5, 3, 3, 8], false)).toEqual([3, 3, 5, 8]);
  expect(quickSort([5, 3, 3, 8], true)).toEqual([3, 5, 8]);
  expect(quickSort([9999], false)).toEqual([9999]);
  expect(quickSort([], false)).toEqual([]);
});
