/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const maxRows = grid.map(item => Math.max(...item))
  const maxCols = grid[0].map((item, index) => {
    const len = grid.length;
    let max = item
    for (let i = 1; i < len; i++) {
      if (grid[i][index] > max) max = grid[i][index]
    }
    return max
  })
  let res = 0
  grid.forEach((item, i) => {
    item.forEach((hei, j) => res += Math.min(maxRows[i], maxCols[j]) - hei)
  })
  return res
};