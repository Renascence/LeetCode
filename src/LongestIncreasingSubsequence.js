/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  var res =0
  var temp = 0
  for(var i = 0; i<nums.length-1;i++){
    if(nums[i+1] > nums[i]){
      temp ++
    }
  }
};