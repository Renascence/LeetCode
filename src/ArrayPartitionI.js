/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const len = nums.length
  if (len == 0) return 0
  arr = nums.sort(function (a, b) {
    return a - b
  })
  let res = 0
  for (let i = 0; i < len; i += 2) {
    res += arr[i]
  }
  return res
};