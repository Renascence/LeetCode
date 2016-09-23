// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (nums.length <= 1) return false
  var flag = false
  for (var i = 0; i < nums.length; i++) {
    var index = nums.indexOf(nums[i], i + 1)
    console.log(index)
    if (index != -1 && index - i  <= k) {
      flag = true
    }
  }
  return flag
};

