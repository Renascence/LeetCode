/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let cnt = parseInt(n / 2);
  return cnt * (cnt + (n % 2));
};
