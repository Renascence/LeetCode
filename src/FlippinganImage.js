/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  return A.map((item) => item.map((val) => 1 - val)).map((item) =>
    item.reverse()
  );
};
