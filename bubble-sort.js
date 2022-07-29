/*
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums = [1]) {
  let isSwapped = false;
  do {
    isSwapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const largerValueTemp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = largerValueTemp;
        isSwapped = true;
      }
    }
  } 
  while(isSwapped);
  return nums;
}

module.exports = { bubbleSort };