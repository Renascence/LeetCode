/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
  const max = Math.max(...A)
  const min = Math.min(...A)
  return Math.max(max - min - K - K, 0)
};