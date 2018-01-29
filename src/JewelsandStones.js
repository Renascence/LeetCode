/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let owns = {}
  for (let i = 0; i < S.length; i++) {
    if (owns[S[i]]) {
      owns[S[i]]++
    } else {
      owns[S[i]] = 1
    }
  }
  let res = 0
  for (let j = 0; j < J.length; j++) {
    if(owns[J[j]]) res += owns[J[j]]
  }
  return res
};