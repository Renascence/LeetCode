// Given an integer, write a function to determine if it is a power of three.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n > 1) {
    n = n / 3;
  }
  return n == 1 ? true : false;
};
