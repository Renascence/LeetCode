/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  var len = A.length;
  var sumAB = {},
    sumCD = {},
    res = 0;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (sumAB[A[i] + B[j]]) {
        sumAB[A[i] + B[j]]++;
      } else {
        sumAB[A[i] + B[j]] = 1;
      }
      if (sumCD[C[i] + D[j]]) {
        sumCD[C[i] + D[j]]++;
      } else {
        sumCD[C[i] + D[j]] = 1;
      }
    }
  }
  for (var k in sumAB) {
    if (sumCD[k * -1]) {
      res += sumAB[k] * sumCD[k * -1];
    }
  }
  return res;
};
