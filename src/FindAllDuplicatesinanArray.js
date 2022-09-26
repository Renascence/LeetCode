/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  var hash = [];
  var res = [];
  for (var i in nums) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (var j in hash) {
    if (hash[j] > 1) {
      res.push(parseInt(j));
    }
  }
  return res;
};
