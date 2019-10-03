/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const obj = {}
  arr.forEach(val => {
    if (obj[val]) {
      obj[val] ++
    } else {
      obj[val] = 1
    }
  })
  console.log(obj)
  const vals = Object.values(obj)
  const len = vals.length
  const set = Array.from(new Set(vals))
  return len !== set.length
};