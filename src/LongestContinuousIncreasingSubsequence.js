/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let res = 1
  let max = 0
  const len = nums.length;
  if (len === 0 || len === 1) return len
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      res++
    } else {
      max = Math.max(res, max)
      res = 1
    }
  }
  max = Math.max(res, max)
  return max
};