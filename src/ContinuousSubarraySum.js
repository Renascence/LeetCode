/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let sum = 0;
  let remainder = {};
  pre = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let temp = k == 0 ? sum : sum % k;
    if (remainder[temp]) {
      return true;
    }
    remainder[pre] = 1;
    pre = temp;
  }
  return false;
};
