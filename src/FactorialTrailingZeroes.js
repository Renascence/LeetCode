// Given an integer n, return the number of trailing zeroes in n!.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  var res = 0;
  while (n / 5 != 0) {
    n = parseInt(n / 5);
    res = res + n;
  }
  return res;
};
