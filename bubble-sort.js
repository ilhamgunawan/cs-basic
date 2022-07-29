function bubbleSort(nums) {
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

module.exports = {bubbleSort};