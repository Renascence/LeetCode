/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  const arr = points.map(a => a[0]).sort((a, b) => a - b)
  let res = 0
  for (let i = 1; i < arr.length; i++) {
    res = Math.max(arr[i] - arr[i - 1], res)
  }
  return res
};