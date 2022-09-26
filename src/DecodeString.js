/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  var times;
  for (var i = s.length - 1; i >= 0; i--) {
    times = '';
    if (s[i] == '[') {
      i--;
      while (parseInt(s[i]) >= 0 && parseInt(s[i]) <= 9) {
        times = s[i] + times;
        i--;
      }
      replaceStr(i, times);
      i++;
    }
  }
  return s;

  function replaceStr(n, times) {
    var left = s.indexOf('[', n + 1);
    var right = s.indexOf(']', left);
    var str = s.substring(left + 1, right);
    var res = '';
    for (var i = 0; i < times; i++) {
      res = res + str;
    }
    s = s.substring(0, n + 1) + res + s.substr(right + 1);
  }
};
