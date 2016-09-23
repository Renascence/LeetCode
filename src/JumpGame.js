// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length == 1) return true
  var last = nums.length - 1
  for (var i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= last) last = i
  }
  return last <= 0
};