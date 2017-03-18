/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const res = []
  for (let i in nums) {
    res.push(findNum(nums, nums[i], i))
  }
  return res

  function findNum(nums, num, pos) {
    for (let i = pos; i < nums.length; i++) {
      if (nums[i] > num) return nums[i]
    }
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > num) return nums[j]
    }
    return -1
  }
};