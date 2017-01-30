/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  if (nums == null || nums.length == 0) return false
  var sum = 0
  for (var i in nums) {
    sum += nums[i]
  }

  var dp = []
  for (i = 0; i < nums.length; i++) {
    var temp = []
    temp.length = nums.length
    dp.push(temp)
    dp[i][i] = nums[i]
  }
  for (i = nums.length - 2; i >= 0; i--) {
    for (var j = i + 1; j < nums.length; j++) {
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1])
    }
  }
  return dp[0][nums.length - 1] >= 0
};