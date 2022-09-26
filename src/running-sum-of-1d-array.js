/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  nums.forEach((i, index) => {
    if (index === 0) return;
    nums[index] = i + nums[index - 1];
  });
  return nums;
};
