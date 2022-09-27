/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let res = nums[0] + nums[1] + nums[2];
  if (nums.length === 3) {
    return res;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      res = Math.abs(target - res) > Math.abs(target - sum) ? sum : res;
      if (sum === target) {
        return target;
      } else if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      }
    }
  }
  return res;
};
