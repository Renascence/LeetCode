// Given an integer, write a function to determine if it is a power of two.

var isPowerOfTwo = function (n) {
  if (n == 1) {
    return true;
  }
  while (n > 2) {
    n = n / 2;
  }
  return n == 2 ? true : false;
};
