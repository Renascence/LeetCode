// Write a program to find the nth super ugly number.

// Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k. For example, [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32] is the sequence of the first 12 super ugly numbers given primes = [2, 7, 13, 19] of size 4.

var nthSuperUglyNumber = function (n, primes) {
  var i, dp = [1], prime = [], dpIndex = 1, tmp, min, minIndex;
  for (i = 0; i < primes.length; i++) prime[i] = 0;
  while (dpIndex <= n) {
    min = Infinity;
    for (i = 0; i < primes.length; i++) {
      tmp = dp[prime[i]] * primes[i];
      if (tmp < min) {
        min = tmp;
        minIndex = i;
      }
    }
    prime[minIndex]++;
    if (min !== dp[dpIndex - 1]) {
      dp[dpIndex] = min;
      dpIndex++;
    }
  }
  return dp[n - 1];
};