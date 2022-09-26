// Given numRows, generate the first numRows of Pascal's triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 0) return [];
  if (numRows == 1) return [[1]];
  if (numRows == 2) return [[1], [1, 1]];
  res = [[1], [1, 1]];
  for (var i = 2; i < numRows; i++) {
    var arr = [];
    arr[0] = 1;
    arr[i] = 1;
    for (j = 1; j < i; j++) {
      arr[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res.push(arr);
  }
  return res;
};
