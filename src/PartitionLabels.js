/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const len = S.length
  const hash = []
  let start = 0, end = 0
  const res = []
  for (var i = 0; i < len; i++) {
    hash[S[i].charCodeAt() - 97] = i;
  }
  for (var i = 0; i < len; i++) {
    end = Math.max(end, hash[S[i].charCodeAt() - 97]);
    if (end === i) {
      res.push(i + 1 - start);
      start = end + 1;
    }
  }
  return res
};
