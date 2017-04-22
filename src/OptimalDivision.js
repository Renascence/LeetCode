/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  const len = nums.length
  if(len == 1) return `${nums[0]}`
  if(len == 2) return `${nums[0]}/${nums[1]}`
  let res = [`${nums[0]}/`]
  for(let i = 2 ; i<len  ;i++) {
    res[i] = `/${nums[i]}`
  }
  res[1] = `(${nums[1]}`
  return `${res.join('')})`
};