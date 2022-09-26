/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length == 1) return nums[0];
  var left = 0;
  var right = nums.length - 1;
  if (nums[left] < nums[right]) return nums[0];
  while (left < right) {
    var mid = parseInt((left + right) / 2);
    if (left == right - 1) return nums[right];
    if (nums[left] <= nums[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }
};
