/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let hash = {};
  let res = 0;
  nums.forEach((item, index) => {
    if (hash[item]) hash[item]++;
    else hash[item] = 1;
  });
  Object.keys(hash).forEach((key) => {
    let temp = 0;
    if (!hash[parseInt(key) + 1] && !hash[parseInt(key) + 1]) {
      return;
    } else if (!hash[parseInt(key) + 1]) {
      temp = hash[parseInt(key) - 1] + hash[parseInt(key)];
    } else if (!hash[parseInt(key) - 1]) {
      temp = hash[parseInt(key) + 1] + hash[parseInt(key)];
    } else {
      temp =
        Math.max(hash[parseInt(key) + 1], hash[parseInt(key) - 1]) +
        hash[parseInt(key)];
    }
    res = res > temp ? res : temp;
  });
  return res;
};
