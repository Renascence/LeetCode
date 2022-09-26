/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  var str = '';
  for (var i = 0; i < s.length; i++) {
    if (/^[a-zA-Z0-9]*$/.test(s[i])) str += s[i];
  }
  return str == str.split('').reverse().join('');
};
