// Given two non-negative numbers num1 and num2 represented as string, return the sum of num1 and num2.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var len1 = num1.length,
    len2 = num2.length;
  var len = Math.min(len1, len2);
  var res = '',
    flag = 0,
    plus,
    left;
  for (var i = len1 - 1, j = len2 - 1; i >= 0 && j >= 0; i--, j--) {
    num = parseInt(num1[i]) + parseInt(num2[j]) + flag;
    flag = parseInt(num / 10);
    plus = num % 10;
    res = plus + res;
  }
  if (len1 == len2) {
    if (flag == 1) return 1 + res;
    else return res;
  }
  if (len1 < len2) {
    left = num2.substr(0, len2 - len1);
  } else {
    left = num1.substr(0, len1 - len2);
  }
  if (flag == 0) return left + res;
  else {
    for (var i = left.length - 1; i >= 0; i--) {
      num = parseInt(left[i]) + flag;
      flag = parseInt(num / 10);
      plus = num % 10;
      res = plus + res;
    }
    if (flag == 0) return res;
    else return '1' + res;
  }
};
