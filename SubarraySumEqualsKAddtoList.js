/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let sum = 0
  let res = 0
  let sums = [0]
  let hash = { 0: 1 }
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (hash[sum - k]) res += hash[sum - k]
    if (hash[sum]) hash[sum]++
    else hash[sum] = 1
  }
  return res
};