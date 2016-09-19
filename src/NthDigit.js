// Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  if (n <= 9) return n
  var len = 9
  var ith = 1
  var base = 9
  var flag = 0
  while (n > len) {
    ith++
    base *= 10
    flag = n - len
    len += ith * base
  }
  var dig = ith - 1
  return parseInt((Math.ceil(flag / ith) + Math.pow(10, dig) - 1 + "")[(flag - 1 + ith) % ith])
};