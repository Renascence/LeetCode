/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const sort = heights.slice().sort((a, b) => a - b);
  let res = 0;
  sort.forEach((i, index) => {
    if (i !== heights[index]) {
      res++;
    }
  });
  return res;
};
