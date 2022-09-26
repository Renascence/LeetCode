/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N == 0) return 0;
  if (N == 1) return 1;
  let res = [0, 1];
  let i = 2;
  while (i <= N) {
    res[i] = res[i - 1] + res[i - 2];
    i++;
  }
  return res[N];
};
