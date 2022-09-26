// Given two arrays, write a function to compute their intersection.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var res = [];
  for (i in nums1) {
    if (nums2.indexOf(nums1[i]) != -1 && res.indexOf(nums1[i]) == -1) {
      res.push(nums1[i]);
    }
  }
  return res;
};
