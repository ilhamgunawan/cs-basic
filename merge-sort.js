/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

function merge(left = [], right = []) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result = [...result, left.shift()];
    } else {
      result = [...result, right.shift()];
    }
  }
  return result.concat(left, right);
}

function mergeSort(numbers = []) {
  if (numbers.length <= 1) return numbers;
  const middle = Math.round(numbers.length / 2);
  const leftArray = numbers.slice(0, middle);
  const rightArray = numbers.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

module.exports = { mergeSort };
