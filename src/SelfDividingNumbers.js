/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  var res = [];
  for (let i = left; i <= right; i++) {
    if(isSelfDicidingNum(i)) res.push(i)
  }
  return res;

  function isSelfDicidingNum(num) {
    var str = num.toString();
    for (let i = 0; i < str.length; i++) {
      if (num % str[i] !== 0) {
        return false
      }
    }
    return true
  }
};