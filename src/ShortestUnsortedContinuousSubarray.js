/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const temp = nums.slice(0);
  temp.sort((a, b) => {
    return a - b;
  });
  let start = 0;
  let end = nums.length;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] != nums[i]) {
      start = i;
      break;
    }
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i] != nums[i]) {
      end = i;
      break;
    }
  }
  if (start == 0 && end == nums.length) return 0;

  return end - start + 1;
};
