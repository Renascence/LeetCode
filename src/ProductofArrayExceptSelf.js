// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var he = 1;
  var res = [];
  var mark;
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      he *= nums[i];
    } else {
      count++;
      mark = i;
    }
  }
  if (count == 1) {
    for (b in nums) {
      res[b] = 0;
    }
    res[mark] = he;
    return res;
  }
  if (count >= 2) {
    for (a in nums) {
      res[a] = 0;
    }
    return res;
  }
  for (var j = 0; j < nums.length; j++) {
    nums[j] == 0 ? res.push(he) : res.push(he / nums[j]);
  }
  return res;
};
