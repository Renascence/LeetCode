/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const minTemp = [];
  const res = [];
  const len = temperatures.length;
  if (len === 0) return [];
  const highTemp = Math.max(...temperatures);
  for (let i = len - 1; i >= 0; i--) {
    minTemp[temperatures[i]] = i;
    let arr = [],
      min;
    for (let j = temperatures[i] + 1; j <= highTemp; j++) {
      if (minTemp[j]) {
        arr.push(minTemp[j] - i);
      }
    }
    if (arr.length === 0) min = 0;
    else min = Math.min(...arr);
    res.unshift(min);
  }
  return res;
};
