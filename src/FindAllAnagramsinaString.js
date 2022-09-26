// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  var slen = s.length;
  var plen = p.length;
  var parr = [];
  for (var x = 0; x < 26; x++) {
    parr[x] = 0;
  }
  for (var k = 0; k < plen; k++) {
    parr[p.charCodeAt(k) - 97]++;
  }
  pstr = parr.join('');
  var res = [];
  for (var i = 0; i <= slen - plen; i++) {
    var sarr = [];
    for (var x = 0; x < 26; x++) {
      sarr[x] = 0;
    }
    var str = s.substring(i, i + plen);
    for (var j = 0; j < str.length; j++) {
      sarr[str.charCodeAt(j) - 97]++;
    }
    var sstr = sarr.join('');
    if (sstr == pstr) res.push(i);
  }
  return res;
};
