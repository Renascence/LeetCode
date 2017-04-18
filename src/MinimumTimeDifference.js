/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let res = 1440
  const timeArr = timePoints.map((item) => {
    return parseInt(item.split(':')[0] * 60) + parseInt(item.split(':')[1])
  }).sort((a, b) => a - b)
  for (let i = 0; i < timeArr.length - 1; i++) {
    res = res < timeArr[i + 1] - timeArr[i] ? res : timeArr[i + 1] - timeArr[i]
  }
  return Math.min(res, 1440 - (timeArr.pop() - timeArr[0]))
};