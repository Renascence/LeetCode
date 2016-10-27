/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  var n = parseInt(n, 10).toString(2)
  while (n.length < 32) {
    n = '0' + n
  }
  n = n.split('').reverse().join('')
  return parseInt(parseInt(n, 2).toString(10),10)
};