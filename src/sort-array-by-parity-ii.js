/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let res = []
  let minOdd = 1
  let minEven = 0
  A.forEach(val => {
    if (val % 2 === 0) {
      res[minEven] = val
      minEven += 2
    } else {
      res[minOdd] = val
      minOdd += 2
    }
  })
  return res
};