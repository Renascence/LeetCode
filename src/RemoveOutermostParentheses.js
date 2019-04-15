/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let count = 0
  let prev = 0
  let res = ''
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      count++
    } else {
      count--
    }
    if (count === 0) {
      res = res + S.slice(prev + 1, i)
      prev = i + 1
    }
  }
  return res
};
