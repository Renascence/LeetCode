/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n == 2) { return 1 }
  if (n == 3) { return 2 }
  if (n == 4) { return 4 }
  if (n == 5) { return 6 }
  if (n == 6) { return 9 }
  temp = Math.floor(n / 3) - 1
  if (n % 3 == 0) { return Math.pow(3, temp) * 3 }
  if (n % 3 == 1) { return Math.pow(3, temp) * 4 }
  if (n % 3 == 2) { return Math.pow(3, temp) * 6 }
};
