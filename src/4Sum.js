/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[right] === nums[right - 1] && left < right) {
            right--;
          }
          while (nums[left] === nums[left + 1] && left < right) {
            left++;
          }
          left++;
          right--;
        } else if (sum > target) {
          while (nums[right] === nums[right - 1] && left < right) {
            right--;
          }
          right--;
        } else if (sum < target) {
          while (nums[left] === nums[left + 1] && left < right) {
            left++;
          }
          left++;
        }
      }
      while (nums[j] === nums[j + 1]) {
        j++;
      }
    }
    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return res;
};
