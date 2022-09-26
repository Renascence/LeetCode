/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (matrix.length == 0) return [];
  let flag = false;
  const res = [];
  let v = 0,
    h = 0;
  for (let i = 0; i < matrix[0].length * matrix.length; i++) {
    res[i] = matrix[v][h];
    if ((v + h) % 2 == 0) {
      if (h == matrix[0].length - 1) {
        ++v;
      } else if (v == 0) {
        ++h;
      } else {
        --v;
        ++h;
      }
    } else {
      if (v == matrix.length - 1) {
        ++h;
      } else if (h == 0) {
        ++v;
      } else {
        ++v;
        --h;
      }
    }
  }
  return res;
};
