/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  for (var i in nums) {
    nums[i] = nums[i].toString(2).split("").reverse();
  }
  var res = 0
  var temp0 = 0, temp1 = 0
  for (var j = 0; j < 32; j++) {
    for (var k = 0; k < nums.length; k++) {
      if (nums[k][j] == 1) temp1++
      else temp0++
    }
    res += temp0 * temp1
    temp0 = 0
    temp1 = 0
  }
  return res
};