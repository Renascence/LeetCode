/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let range = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const nextRange = intervals[i];
    if (nextRange[0] > range[1]) {
      res.push(range);
      range = nextRange;
    } else {
      range[0] = Math.min(range[0], nextRange[0]);
      range[1] = Math.max(range[1], nextRange[1]);
    }
  }
  res.push(range);
  return res;
};