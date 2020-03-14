/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let res = 0
  nums.forEach(num => {
    const str = `${num}`
    if (str.length % 2 === 0) {
      res++
    }
  })
  return res
};