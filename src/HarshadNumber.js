/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  const arr = `${x}`.split('');
  const sum = arr.reduce((a, b) => +a + +b, 0);
  if (x % sum === 0) {
    return sum;
  }
  return -1;
};
