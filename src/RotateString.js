/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A == '' && B == '') return true
  for (let i = 0; i < B.length; i++) {
    if (B[i] == A[0]) {
      if (B.slice(i) + B.slice(0, i) == A) {
        return true
      }
    }
  }

  return false
};