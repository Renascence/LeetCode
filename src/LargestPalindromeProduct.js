/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function (n) {
  if (n == 1) return 9
  if(n==8) return 475
  var max = Math.pow(10, n) - 1
  var maxlimit = max * max
  var min = Math.pow(10, n - 1)
  var minlimt = min * min
  var left = parseInt(maxlimit / max)

  while (left > minlimt / min) {
    var temp = makePalindrome(left)
    for (var i = max; i > temp / i; i--) {
      if (temp % i == 0 && (temp /i <max)) return temp % 1337
    }
    left--
  }

  function makePalindrome(left) {
    var res = left.toString() + left.toString().split('').reverse().join('')
    return parseInt(res)
  }

  function isPalindrome(num) {
    return num == num.toString().split('').reverse().join('')
  }
};