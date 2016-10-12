// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var len = nums.length
  if (len == 0) return 0
  if (len == 1) return nums[0]
  if (len == 2) return Math.max(nums[0], nums[1])
  var res = []
  res[0] = nums[0]
  res[1] = Math.max(nums[0],nums[1])
  for (var i = 2; i < len; i++) {
    res[i] = Math.max(res[i-1],nums[i] + res[i-2]);
  }
  return res[i-1]
};