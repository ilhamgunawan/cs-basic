const { unsortedNumbers, sortedNumbers } = require("./constant");
const { bubbleSort } = require("./bubble-sort");
const { insertionSort, insertionSortV2 } = require("./insertion-sort");

test("bubble sort", () => {
  const result = bubbleSort([...unsortedNumbers]);
  expect(result).toEqual(sortedNumbers);
});

test("insertion sort", () => {
  const result = insertionSortV2([...unsortedNumbers]);
  expect(result).toEqual(sortedNumbers);
});
