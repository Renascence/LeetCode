/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  var res = 0;
  var dfs = [1];
  for (var j = 1; j <= target; j++) {
    dfs[j] = 0;
  }
  for (var i = 0; i <= target; i++) {
    for (var k = 0; k < nums.length; k++) {
      if (i >= nums[k]) {
        dfs[i] += dfs[i - nums[k]];
      }
    }
  }
  return dfs[target];
};
