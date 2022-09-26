// Write a function that takes a string as input and returns the string reversed.

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  var len = s.length - 1;
  var res = [];
  var j = 0;
  for (i = len; i >= 0; i--) {
    res[j] = s[i];
    j++;
  }
  res = res.join('');
  return res;
};
