/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
  var len = nums.length;
  var res = [];
  for (var i in findNums) {
    var pos = nums.indexOf(findNums[i]);
    var flag = false;
    for (var j = pos + 1; j < len; j++) {
      if (nums[j] > findNums[i]) {
        res.push(nums[j]);
        flag = true;
        break;
      }
    }
    if (!flag) res.push(-1);
  }
  return res;
};
