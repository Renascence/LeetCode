/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var res = 0
  var temp = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      temp++
    } else {
      res = temp > res ? temp : res
      temp = 0
    }
  }
  res = temp > res ? temp : res
  return res
};