/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  const lineMax = []
  const rowMax = []
  rowMax.length = grid[0].length
  rowMax.fill(0)
  let empty = 0
  grid.forEach((i) => {
    lineMax.push(Math.max(...i))
    i.forEach((v, order) => {
      if (v === 0) {
        empty++
      }
      rowMax[order] = Math.max(rowMax[order], v)
    })
  })
  return lineMax.length * rowMax.length + rowMax.reduce((a, b) => a + b) + lineMax.reduce((a, b) => a + b) - empty
};
