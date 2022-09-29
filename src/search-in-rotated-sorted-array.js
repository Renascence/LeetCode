/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
  const maxLen = nums.length;
  let rotate = 0;
  let left = 0;
  let right = maxLen - 1;
  while (left < right) {
    const mid = Math.ceil((left + right) / 2);
    if (target === nums[left]) {
      return left;
    }
    if (target === nums[right]) {
      return right;
    }
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[mid - 1] > nums[mid] && nums[mid + 1] > nums[mid]) {
      rotate = mid;
      break;
    }
    if (nums[mid] > nums[right]) {
      left = mid;
    } else {
      right = Math.floor((left + right) / 2);
    }
  }
  if (nums[rotate] > target || nums[rotate - 1] < target) {
    return -1;
  }
  let lp = 0;
  let rp = maxLen;

  while (lp < rp) {
    const mid = (Math.ceil((lp + rp) / 2) + rotate) % maxLen;
    if (target === nums[lp]) {
      return lp;
    }
    if (target === nums[rp]) {
      return rp;
    }
    if (target === nums[mid]) {
      return mid;
    }
    if (target > nums[mid]) {
      lp = Math.ceil((lp + rp) / 2);
    } else {
      rp = Math.floor((lp + rp) / 2);
    }
  }
  return -1;
};
