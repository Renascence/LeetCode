/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let zero = 0;
  let one = 0;
  let two = 0;
  for (let i in nums) {
    if (nums[i] === 0) zero++;
    else if (nums[i] === 1) one++;
    else two++;
  }
  for (let i in nums) {
    if (i < zero) nums[i] = 0;
    else if (i < zero + one) nums[i] = 1;
    else nums[i] = 2;
  }
};
