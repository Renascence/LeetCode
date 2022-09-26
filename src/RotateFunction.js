// Given an array of integers A and let n to be its length.

// Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:

// F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].

// Calculate the maximum value of F(0), F(1), ..., F(n-1).

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
  var len = A.length;
  var res = 0;
  var fir = 0;
  var sum = 0;
  for (var i = 0; i < len; i++) {
    sum += A[i];
    fir = fir + i * A[i];
  }
  res = fir;
  for (var i = 1; i <= len; i++) {
    fir = fir + sum - len * A[len - i];
    res = res > fir ? res : fir;
  }
  return res;
};
