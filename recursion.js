const { nestedNumbers } = require('./constant');

/*
  Pros: Elegant code
  Cons: Slow performance
*/
function recursiveFibonacci(n) {
  if (n === 2 || n === 1) return 1;
  if (n === 0) return 0;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

/*
  Pros: Blazzing fast performance
  Cons: Not so elegant code
*/
function iterativeFibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    sequence = [...sequence, sequence[i - 1] + sequence[i - 2]];
  }
  return sequence[n];
}

function numberReducer(nums, initial) {
  let head = nums[0];
  let tail = [...nums].slice(1);
  switch (nums.length) {
    case 0:
      return initial;
    case 1:
      return head + initial;
    default:
      return numberReducer(tail, head + initial);
  }
}

/*
  Given an input of array, example: [1, 2, [1,2], 4, [5,3]]
  The ouput should have the value of addition of the input regardless how nested they are
*/
function nestedAddition(nested, initial) {
  let head = nested[0];
  let tail = [...nested].slice(1);
  switch (nested.length) {
    case 0:
      return initial;
    case 1:
      return typeof head === 'number'
        ? head + initial
        : nestedAddition(head, initial);
    default:
      return typeof head === 'number'
        ? nestedAddition(tail, head + initial)
        : nestedAddition(tail, nestedAddition(head, initial));
  }
}

module.exports = { recursiveFibonacci, iterativeFibonacci, nestedAddition };
