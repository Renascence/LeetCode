/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];
  const getRound = (arrs) => {
    const temp = [];
    temp.push(...arrs[0]);
    arrs.splice(0, 1);
    if (!arrs.length || !arrs[0].length) {
      res.push(...temp);
      return;
    }
    for (let i = 0; i < arrs.length - 1; i++) {
      const item = arrs[i].pop();
      if (item) {
        temp.push(item);
      }
    }
    if (!arrs.length) {
      res.push(...temp);
      return;
    }
    temp.push(...arrs.splice(-1)[0].reverse());
    if (!arrs.length) {
      res.push(...temp);
      return;
    }
    for (let i = arrs.length - 1; i >= 0; i--) {
      const item = arrs[i].splice(0, 1)[0];
      if (item) {
        temp.push(item);
      }
    }
    res.push(...temp);
    if (arrs.length) {
      getRound(arrs);
    }
  };
  getRound(matrix);
  return res;
};
