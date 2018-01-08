/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const len = cost.length;
  const res = [];
  function getCost(n) {
    if (n === 0) {
      res[0] = cost[0]
    } else if (n === 1) {
      res[1] = cost[1]
    } else {
      res[n] = Math.min(res[n - 1] + cost[n], res[n - 2] + cost[n])
    }
  }
  let n = 0
  while (n < len) {
    getCost(n)
    n++
  }
  return Math.min(res[len - 1], res[len - 2])
};