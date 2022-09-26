/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  var nums = nums.sort();
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);

  var a = nums[0],
    b,
    c;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > a) {
      c = b;
      b = a;
      a = nums[i];
    } else if (nums[i] < a && nums[i] > b) {
      c = b;
      b = nums[i];
    } else if (nums[i] < b && nums[i] > c) {
      c = nums[i];
    }
  }
  if (c == 0) return c;
  else return c ? c : a;
};

thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]);
