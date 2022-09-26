/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;
  let arr = [];
  arr.length = nums.length;
  arr.fill(1);
  for (var i = 0; i < nums.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (nums[i] > nums[j] && arr[i] < arr[j] + 1) {
        arr[i] = arr[j] + 1;
      }
    }
  }
  return Math.max(...arr);
};
