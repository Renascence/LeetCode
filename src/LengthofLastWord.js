// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.replace(/(^\s*)|(\s*$)/g, '');
  if (s == '') return 0;
  var arr = s.split(' ');
  return arr[arr.length - 1].length;
};
