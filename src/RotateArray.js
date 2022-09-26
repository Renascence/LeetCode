/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  k = nums.length - k;
  var temp = nums.splice(0, k);
  for (var i = 0; i < temp.length; i++) {
    nums.push(temp[i]);
  }
};
