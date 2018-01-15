/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  function getKth(arr1, arr2, k) {
    const m = arr1.length;
    const n = arr2.length;
    if (m > n) return getKth(arr2, arr1, k);
    if (m === 0) return arr2[k - 1];
    if (k == 1) return Math.min(arr1[0], arr2[0]);
    const i = Math.min(parseInt(k / 2), m)
    const j = Math.min(parseInt(k / 2), n)
    if (arr1[i - 1] > arr2[j - 1]) {
      return getKth(arr1, arr2.slice(j), k - j)
    } else {
      return getKth(arr1.slice(i), arr2, k - i)
    }
  }
  const m = nums1.length;
  const n = nums2.length;
  const sum = m + n
  if (sum % 2 === 1) {
    return getKth(nums1, nums2, (sum + 1) / 2)
  } else {
    return (getKth(nums1, nums2, sum / 2) + getKth(nums1, nums2, sum / 2 + 1)) / 2
  }
};
