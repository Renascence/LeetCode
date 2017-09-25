/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const len = s.length
  if (len === 0 || len === 1) return len
  let res = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; i - j >= 0 && i + j < len; j++) {
      if (j === 0) res++
      else if (s[i - j] === s[i + j]) res++
      else break;
    }
    if (s[i] == s[i + 1]) {
      res++
      for (let j = 1; i - j >= 0 && i + 1 + j < len; j++) {
        if (s[i - j] === s[i + 1 + j]) res++
        else break;
      }
    }
  }
  return res
};