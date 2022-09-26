/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const res = [];
  for (let i = 0; i < l.length; i++) {
    const arr = nums.slice(l[i], r[i] + 1);
    arr.sort((a, b) => a - b);
    const minus = arr[1] - arr[0];
    let flag = true;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] - arr[j - 1] !== minus) {
        res.push(false);
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(true);
    }
  }
  return res;
};
