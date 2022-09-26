// Given a string s and a string t, check if s is subsequence of t.

// You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  var oldindex = t.indexOf(s[0]);
  for (var i = 1; i < s.length; i++) {
    var newindex = t.indexOf(s[i], oldindex + 1);
    if (newindex == -1) {
      return false;
    }
    oldindex = newindex;
  }
  return true;
};
