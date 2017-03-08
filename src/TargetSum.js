/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  var res = 0
  function map(nums, sum, lv) {
    if (lv == nums.length) {
      if (sum == S) res++
      return
    }
    if (lv > nums.length) return
    map(nums, sum + nums[lv], lv + 1)
    map(nums, sum - nums[lv], lv + 1)
  }
  map(nums, 0, 0)
  return res
};
