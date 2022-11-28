/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  let steps = 0;
  let max = 0;
  let end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    end = Math.max(end, i + nums[i]);
    if (i === max) {
      steps++;
      max = end;
    }
  }
  return steps;
};
