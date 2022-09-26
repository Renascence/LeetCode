/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  var hash = [];
  for (var i in s) {
    if (!hash[s[i].charCodeAt()]) {
      hash[s[i].charCodeAt()] = s[i];
    } else {
      hash[s[i].charCodeAt()] += s[i];
    }
  }
  hash.sort(function (a, b) {
    return b.length - a.length;
  });
  return hash.join('');
};
