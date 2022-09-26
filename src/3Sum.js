/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] !== nums[i - 1]) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        if (nums[j] + nums[k] === nums[i] * -1) {
          res.push([nums[i], nums[j], nums[k]]);
          while (k > j && nums[k] === nums[k - 1]) {
            k--;
          }
          while (j < k && nums[j] === nums[j + 1]) {
            j++;
          }
          k--;
          j++;
        } else if (nums[j] + nums[k] > nums[i] * -1) {
          while (k > j && nums[k] === nums[k - 1]) {
            k--;
          }
          k--;
        } else if (nums[j] + nums[k] < nums[i] * -1) {
          while (j < k && nums[j] === nums[j + 1]) {
            j++;
          }
          j++;
        }
      }
    }
  }
  return res;
};
