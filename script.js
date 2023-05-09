var twoSum = function (nums, target) {
  const previousValues = {};
  for (i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const neededValue = target - currentNumber;
    const index2 = previousValues[neededValue];
    if (index2 != null) {
      console.log([index2, i]);
    } else {
      previousValues[currentNumber] = i;
    }
  }
};
twoSum([2, 11, 15, 7], 9);
