/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  function calSum(arr) {
    let sum = 0
    let res = []
    arr.forEach((item) => {
      sum += item
      res.push(sum)
    })
    res.pop()
    return res
  }
  let wallLen = []
  wall.forEach((item) => {
    wallLen.push(calSum(item))
  })
  let hash = {}
  wallLen.forEach((item) => {
    item.forEach((val) => {
      if (hash[val]) {
        hash[val]++
      } else {
        hash[val] = 1
      }
    })
  })
  let maxLen = 0
  Object.keys(hash).forEach((key) => {
    maxLen = maxLen < hash[key] ? hash[key] : maxLen
  })
  return wall.length - maxLen
};