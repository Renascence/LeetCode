/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  const height = mat.length;
  const len = mat[0].length;
  let res = [];
  let temp = [];
  for (let i = height - 1; i >= 0; i--) {
    temp[temp.length] = [];
    let j = i;
    let k = 0;
    for (; j < height && k < len; ) {
      temp[temp.length - 1].push(mat[j][k]);
      j++;
      k++;
    }
  }
  for (let i = 1; i < len; i++) {
    temp[temp.length] = [];
    let j = 0;
    let k = i;
    for (; j < height && k < len; ) {
      temp[temp.length - 1].push(mat[j][k]);
      j++;
      k++;
    }
  }
  temp.forEach((arr) => arr.sort((a, b) => a - b));
  for (let i = 0; i < height; i++) {
    for (let k = 0; k < len; k++) {
      const x = height - i + k - 1;
      const y = Math.min(k, i);
      if (res[i]) {
        res[i].push(temp[x][y]);
      } else {
        res[i] = [temp[x][y]];
      }
    }
  }
  return res;
};
