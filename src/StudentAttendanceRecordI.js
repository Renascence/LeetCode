/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let atimes = 0
  let ltimes = 0
  for (let i = 0; i < s.length; i++) {
    if(s[i] == 'A') atimes ++
    if(s[i] == 'L' && s[i+1] == 'L' && s[i+2] == 'L') {
      return false
    }
  }
  return atimes <= 1 
};