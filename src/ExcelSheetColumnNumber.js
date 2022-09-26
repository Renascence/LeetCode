// Related to question Excel Sheet Column Title

// Given a column title as appear in an Excel sheet, return its corresponding column number.

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  var res = 0;
  var len = s.length;
  for (var i = 0; i < len; i++) {
    res = res * 26 + s.charCodeAt(i) - 64;
  }
  return res;
};
