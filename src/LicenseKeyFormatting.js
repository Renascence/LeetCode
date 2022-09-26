/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  const s = S.toUpperCase().split('-').join('');
  if (s.length <= K) return s;
  let res = [];
  let i = s.length - 1;
  for (; i >= 0; i = i - K) {
    if (i - K + 1 >= 0) res.push(s.substring(i - K + 1, i + 1));
    else res.push(s.substring(0, i + 1));
  }
  return res.reverse().join('-');
};
