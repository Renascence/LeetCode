// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var len = nums.length;
  var sum = (len * (len + 1)) / 2;
  for (var i = 0; i < len; i++) {
    sum -= nums[i];
  }
  return sum;
};
