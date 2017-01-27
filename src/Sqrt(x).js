/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if( x == 0) return 0
  var left = 0
  var right = parseInt(x / 2) + 1
  while (left <= right) {
    var mid = parseInt((left + right) / 2)
    var sq = mid * mid
    if (sq == x) {
      return mid
    } else if (sq < x) {
      left = mid + 1 
    } else {
      right = mid - 1
    }
  }
  return right
};