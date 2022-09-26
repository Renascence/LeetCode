/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  var res = [];
  for (var j = 0; j < 26; j++) {
    res[j] = 0;
  }
  var pArr = [];
  var count = 0;
  var maxlen = 0;
  for (var i = 0; i < p.length; i++) {
    pArr[i] = p[i].charCodeAt() - 97;
  }
  for (var i = 0; i < pArr.length; i++) {
    if (i > 0 && (pArr[i - 1] + 1) % 26 == pArr[i]) {
      maxlen++;
    } else {
      maxlen = 1;
    }
    res[pArr[i]] = Math.max(res[pArr[i]], maxlen);
  }
  for (var j = 0; j < 26; j++) {
    count += res[j];
  }
  return count;
};
