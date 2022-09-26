// Given a positive integer n and you can do operations as follow:

// If n is even, replace n with n/2.
// If n is odd, you can replace n with either n + 1 or n - 1.

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  if (n == 1) return 0;
  if (n % 2 == 0) return 1 + integerReplacement(n / 2);
  else {
    return (
      2 +
      Math.min(integerReplacement((n + 1) / 2), integerReplacement((n - 1) / 2))
    );
  }
};
