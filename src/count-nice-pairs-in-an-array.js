/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  let res = 0;
  const reverseNum = (num) => {
    return parseInt(num.toString().split('').reverse().join(''));
  };
  const map = {};
  nums.forEach((i) => {
    const res = i - reverseNum(i);
    if (map[res]) {
      map[res] += 1;
    } else {
      map[res] = 1;
    }
    return res;
  });
  Object.values(map).forEach((val) => {
    const count = (val * (val - 1)) / 2;
    res = res + count;
  });
  return res % 1000000007;
};
