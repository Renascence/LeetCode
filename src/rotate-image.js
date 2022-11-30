/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let arr2 = matrix.map((arr) => {
    return [...arr];
  });
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      matrix[j][len - 1 - i] = arr2[i][j];
    }
  }
};
