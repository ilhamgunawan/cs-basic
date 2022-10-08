const { binarySearch } = require('./binary-search');

test('binary search', () => {
  expect(binarySearch(5, [1, 2, 3, 4, 5])).toEqual(true);
  expect(binarySearch(100, [1, 2, 3, 4, 5])).toEqual(false);
  expect(binarySearch(5, [0, 100, 1013, 100000, 3000000])).toEqual(false);
  expect(binarySearch(3000000, [0, 100, 1013, 100000, 3000000])).toEqual(true);
});
