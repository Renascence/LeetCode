/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const len = nums.length
  const len2 = nums[0].length
  let arr = []
  if (len * len2 != r * c) return nums
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len2; j++) {
      arr.push(nums[i][j])
    }
  }
  let res = []
  for (let i = 0; i < arr.length; i += c) {
    res.push(arr.slice(i, i + c))
  }
  return res
};