/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  for (; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      break;
    }
  }
  if (i < 0) {
    nums.reverse();
    return;
  }
  let k = nums.length - 1;
  for (; k > i; k--) {
    if (nums[k] > nums[i]) {
      break;
    }
  }
  const temp = nums[i];
  nums[i] = nums[k];
  nums[k] = temp;
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
};
