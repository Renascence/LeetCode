// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var len = s.length;
  if (len == 1) {
    return 0;
  }
  for (var i = 0; i < len - 1; i++) {
    if (s.indexOf(s[i]) == i && s.indexOf(s[i], i + 1) == -1) {
      return i;
    }
  }
  return -1;
};
