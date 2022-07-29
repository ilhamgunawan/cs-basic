/*
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
*/

function insertionSort(nums = [1]) {
  if (nums.length === 1) return nums;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j]; // swap
        nums[j] = temp; // swap
      }
    }
  }
  return nums;
};

function insertionSortV2(nums = [1]) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i]; // number we want to insert
    let j; // inner loop counter

    // loop from the right to the left
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // move number to the right until we find where to insert
      nums[j+1] = nums[j];
    }

    // insertion
    nums[j+1] = numberToInsert;
  }
  return nums;
}

module.exports = { insertionSort, insertionSortV2 };
