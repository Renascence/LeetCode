/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  let map = {};
  for (let i = 0; i < A.length; i++) {
    if (map[A[i]]) return A[i];
    else map[A[i]] = true;
  }
};
