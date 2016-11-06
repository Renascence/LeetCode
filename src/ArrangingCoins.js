/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  var i = 1, k = n
  while (k > i) {
    k = k - i
    i++
  }
  if (k == i) return i
  return i - 1
};