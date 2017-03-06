/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  var obj = {},
  res = []
  temp = []
  for(var i in nums) {
    temp[i] = nums[i]
  }
  nums.sort(function (a, b) {
    return b-a
  })
  for(var i in nums) {
    obj[nums[i]] = i
  }
  for(var j in temp) {
    if(obj[temp[j]] == 0) res[j] = 'Gold Medal'
    else if(obj[temp[j]] == 1) res[j] = 'Silver Medal'
    else if(obj[temp[j]] == 2) res[j] = 'Bronze Medal'
    else res[j] = (parseInt(obj[temp[j]])+1).toString()
  }
  return res
};