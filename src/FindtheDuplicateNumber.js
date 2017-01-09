/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  var left = 0
  var right = nums.length - 1
  while (left <= right) {
    var mid = parseInt((left + right) / 2)
    var count = 0
    for (var i in nums) {
      if (nums[i] <= mid) {
      count = count + 1
      }
    }
    if (count <= mid) left = mid + 1
    else right = mid - 1
  }
  return left
};