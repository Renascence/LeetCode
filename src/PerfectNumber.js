/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num == 1 || num == 0) return false;
  let res = 0;
  const midNum = Math.sqrt(num);
  for (let i = 1; i <= midNum; i++) {
    if (num % i == 0) {
      res += i;
      res += num / i;
    }
  }
  return res == num * 2;
};
