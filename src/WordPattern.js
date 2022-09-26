// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPattern = function (pattern, str) {
  var a = {};
  var b = {};
  var arr = str.split(' ');
  pattern = pattern.split('');
  if (arr.length != pattern.length) return false;
  for (var i = 0; i < pattern.length; i++) {
    if (!a.hasOwnProperty(pattern[i])) {
      a[pattern[i]] = arr[i];
    } else if (a[pattern[i]] != arr[i]) {
      return false;
    }
  }
  for (var i = 0; i < pattern.length; i++) {
    if (!b.hasOwnProperty(arr[i])) {
      b[arr[i]] = pattern[i];
    } else if (b[arr[i]] != pattern[i]) {
      return false;
    }
  }
  return true;
};
