/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  if (nums.length == 1) return 0;
  var min = nums[0];
  var len = nums.length;
  var sum = 0;
  for (var i = 0; i < len; i++) {
    if (nums[i] < min) min = nums[i];
    sum += nums[i];
  }
  return sum - min * len;
};
