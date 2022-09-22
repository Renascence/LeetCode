/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    const isSmaller = height[i] < height[j];
    res = Math.max(res, (isSmaller ? height[i] : height[j]) * (j - i));
    if (isSmaller) {
      i++;
    } else {
      j--;
    }
  }
  return res;
};
