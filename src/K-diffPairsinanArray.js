/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) return 0;
  const obj = {};
  let res = 0;
  Object.keys(nums).forEach((key) => {
    if (obj[nums[key]]) {
      obj[nums[key]]++;
    } else {
      obj[nums[key]] = 1;
    }
  });
  Object.keys(obj).forEach((key) => {
    if (obj[~~key + ~~k]) {
      if (k == 0 && obj[~~key + ~~k] >= 2) {
        res++;
      } else if (k != 0) {
        res++;
      }
    }
  });
  return res;
};
