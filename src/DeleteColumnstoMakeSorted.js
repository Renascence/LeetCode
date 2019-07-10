/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
  let res = [];
  const len = A[0].length
  for (let i = 0; i < len; i++) {
    loop2: for (let j = 0; j < A.length - 1; j++) {
      if (A[j + 1][i].charCodeAt() < A[j][i].charCodeAt()) {
        res.push(i)
        break loop2
      }
    }
  }
  return res.length
};