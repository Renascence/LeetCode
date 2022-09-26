/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var res = [];
  function rec(left, right, str) {
    if (left == 0 && right == 0) {
      res.push(str);
    }
    if (left > 0) {
      rec(left - 1, right, str + '(');
    }
    if (right > 0 && left < right) {
      rec(left, right - 1, str + ')');
    }
  }
  rec(n, n, '');
  return res;
};
