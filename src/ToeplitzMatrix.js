/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const w = matrix.length;
  const h = matrix[0].length;
  for (let k = 0; k < w; k++) {
    for (let i = k, j = 0; i < w && j < h; i++ , j++) {
      if (matrix[i][j] != matrix[k][0]) {
        return false
      }
    }
  }
  for (let k = 0; k < h; k++) {
    for (let i = 0, j = k; i < w && j < h; i++ , j++) {
      if (matrix[i][j] != matrix[0][k]) {
        return false
      }
    }
  }
  return true
};  