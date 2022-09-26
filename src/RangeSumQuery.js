// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.data = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  var res = 0;
  for (var a = i; a <= j; a++) {
    res += this.data[a];
  }
  return res;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
