const { unsortedNumbers, sortedNumbers, nestedNumbers } = require('./constant');
const { bubbleSort } = require('./bubble-sort');
const { insertionSort, insertionSortV2 } = require('./insertion-sort');
const {
  recursiveFibonacci,
  iterativeFibonacci,
  nestedAddition,
} = require('./recursion');

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
