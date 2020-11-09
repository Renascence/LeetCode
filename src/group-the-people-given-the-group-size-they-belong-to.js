/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const obj = {}
  groupSizes.forEach((val, index) => {
    if (obj[val]) {
      obj[val].push(index)
    } else {
      obj[val] = [index]
    }
  })
  const res = []
  Object.keys(obj).forEach(key => {
    const step = +key
    const len = obj[key].length
    if (len === step) {
      res.push(obj[key])
    } else {
      for (let i = 0; i < len; i = i + step) {
        res.push(obj[key].slice(i, i + step))
      }
    }
  })
  return res
};
