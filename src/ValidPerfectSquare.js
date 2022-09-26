/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num == 1) return true;
  if (num == 2) return true;
  var left = 1,
    right = num;
  var mid;
  while (left <= right) {
    mid = parseInt((right + left) / 2);
    if (mid * mid == num) return true;
    else if (mid * mid < num) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};
