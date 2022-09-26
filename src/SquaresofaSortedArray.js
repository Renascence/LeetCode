/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  return A.map((v) => v * v).sort((a, b) => a - b);
};
