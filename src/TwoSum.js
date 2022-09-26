// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums.indexOf(target - nums[i], i + 1) != -1) {
      return [i, nums.indexOf(target - nums[i], i + 1)];
    }
  }
};
