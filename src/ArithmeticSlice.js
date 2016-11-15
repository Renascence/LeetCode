/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  var len = A.length
  var res = 0
  if (len < 3) return 0
  var count = 0
  var delta = A[1] - A[0]
  for (i = 2; i < len; i++) {
    if(A[i] - A[i-1] == delta) {
      count ++
      res += count
    }
    else {
      delta = A[i] - A[i-1]
      count = 0
    }
  }
  return res
};