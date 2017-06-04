/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let rows = []
  let cols = []
  ops.forEach((item) => {
    rows.push(item[0])
    cols.push(item[1])
  })
  let x = Math.min(...rows, m)
  let y = Math.min(...cols, n)
  return x * y
};