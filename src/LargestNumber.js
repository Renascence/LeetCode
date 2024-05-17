/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((ia, ib) => {
    const a = `${ia}${ib}`;
    const b = `${ib}${ia}`;
    return a > b ? -1 : 1;
  });
  if (nums.every((i) => i == 0)) {
    return '0';
  }
  return nums.join('');
};
