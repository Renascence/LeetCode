// Count the number of prime numbers less than a non-negative number, n.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 2) return 0;
  var arr = [];
  arr[0] = 0;
  arr[1] = 0;
  for (var k = 2; k < n; k++) {
    arr[k] = 1;
  }

  var sq = Math.ceil(Math.sqrt(n));
  var res = 0;
  for (var i = 2; i < sq; i++) {
    for (var j = i + 1; j < n; j++) {
      if (j % i == 0) {
        arr[j] = 0;
        j = j + i - 1;
      }
    }
  }

  var res = 0;
  for (var x = 0; x < n; x++) {
    if (arr[x] == 1) res++;
  }
  return res;
};
