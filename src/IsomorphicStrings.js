// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  var a = {};
  var b = {};
  var sarr = s.split('');
  var tarr = t.split('');
  if (sarr.length != tarr.length) return false;
  for (var i = 0; i < sarr.length; i++) {
    if (!a.hasOwnProperty(sarr[i])) {
      a[sarr[i]] = tarr[i];
    } else if (a[sarr[i]] != tarr[i]) {
      return false;
    }
  }
  for (var i = 0; i < tarr.length; i++) {
    if (!b.hasOwnProperty(tarr[i])) {
      b[tarr[i]] = sarr[i];
    } else if (b[tarr[i]] != sarr[i]) {
      return false;
    }
  }
  return true;
};
