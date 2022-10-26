/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let first = -1;
  let last = -1;
  let left = 0;
  let right = nums.length;
  while (left <= right) {
    const mid = Math.floor(left / 2 + right / 2);
    if (nums[mid] === target) {
      first = mid;
      last = mid;
      while (nums[first - 1] === target) {
        first--;
      }
      while (nums[last + 1] === target) {
        last++;
      }
      return [first, last];
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [first, last];
};
