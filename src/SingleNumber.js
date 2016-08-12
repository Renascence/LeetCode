// Given an array of integers, every element appears twice except for one. Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var res = ''
  for(i in nums){
  	res = res ^ nums[i]
  } 
  return res
};