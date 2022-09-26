// Given an array and a value, remove all instances of that value in place and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  while (nums.indexOf(val) != -1) {
    nums.splice(nums.indexOf(val), 1);
  }
};
