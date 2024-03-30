/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height.length;
  const leftMaxCache = {};
  leftMaxCache[0] = height[0];
  const rightMaxCache = {};
  rightMaxCache[len - 1] = height[len - 1];
  for (let i = 1; i < len; i++) {
    leftMaxCache[i] = Math.max(leftMaxCache[i - 1], height[i]);
    const j = len - i - 1;
    rightMaxCache[j] = Math.max(height[j], rightMaxCache[j + 1]);
  }
  let res = 0;
  for (let i = 1; i < len; i++) {
    const area = Math.min(leftMaxCache[i], rightMaxCache[i]);
    res = res + area - height[i];
  }
  return res;
};
