// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  var arr = {};
  for (var i = 0; i < s.length; i++) {
    if (arr.hasOwnProperty(s[i])) {
      arr[s[i]] += 1;
    } else {
      arr[s[i]] = 1;
    }
  }
  var oddFlag = 0;
  var length = 0;
  for (var j in arr) {
    if (arr[j] % 2 == 0) {
      length += arr[j];
    } else {
      length += arr[j] - 1;
      oddFlag = 1;
    }
  }
  return length + oddFlag;
};
