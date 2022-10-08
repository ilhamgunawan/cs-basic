/*
  Implement a radix sort in a function called radixSort.
  You'll probably need several functions

  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.
*/

function radixSort(numbers = []) {
  const maxNumber = numbers.reduce((prev, curr) => {
    if (prev >= curr) {
      return prev;
    }
    return curr;
  }, 0);
  const maxDigit = Array.from(String(maxNumber), Number).length - 1;
  const bucket = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    7: [],
    8: [],
    9: [],
  };

  const outputs = [];
  for (let x = maxDigit; x >= 0; x--) {
    for (let i = 0; i < numbers.length; i++) {
      const numToArray = Array.from(String(numbers[i]), Number);
      const currentDigit = numToArray[x];
      if (currentDigit) {
        bucket[currentDigit] = [...bucket[currentDigit], numbers[i]];
      }
    }
  }
  return outputs;
}

radixSort([4000, 10, 500, 2020]);

module.exports = { radixSort };
