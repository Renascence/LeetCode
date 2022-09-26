/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  var num = x ^ y;
  var res = 0;
  var bin = num.toString(2);
  for (var i in bin) {
    if (bin[i] == 1) res++;
  }
  return res;
};
