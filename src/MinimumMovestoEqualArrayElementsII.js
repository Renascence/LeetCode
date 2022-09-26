var minMoves2 = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  var ave = nums[parseInt(nums.length / 2)];
  var res = 0;
  for (var i in nums) {
    res = Math.abs(nums[i] - ave) + res;
  }
  return res;
};
