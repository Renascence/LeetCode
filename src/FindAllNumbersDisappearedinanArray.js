/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  var arr = []
  var res = []
  for (var i in nums) {
    if (!arr[nums[i]-1]) {
      arr[nums[i]-1] = 1
    }
  }
  for (var j = 0; j < nums.length; j++) {
    if (!arr[j]) {
      res.push(j+1)
    }
  }
  return res
};