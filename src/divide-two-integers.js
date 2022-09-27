/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

const getPow = (divisor, target) => {
  if (target < divisor) {
    return {
      times: 0,
      left: 0,
    };
  }
  if (target === divisor) {
    return {
      times: 1,
      left: 0,
    };
  }
  let multi = 1;
  while (divisor * multi < target) {
    if (divisor * multi * 2 >= target) {
      break;
    } else {
      multi = multi * 2;
    }
  }
  return {
    times: multi,
    left: target - divisor * multi,
  };
};

var divide = function (dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647;
  }
  if (divisor === 1) {
    return dividend;
  }
  let flag = 1;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    flag = -1;
  }
  const a = Math.abs(dividend);
  const b = Math.abs(divisor);
  if (a === b) return flag;
  let res = 0;
  let left = a;
  while (true) {
    const data = getPow(b, left);
    left = data.left;
    res += data.times;
    if (left <= 0) {
      break;
    }
  }
  const temp = res * flag;
  if (temp > 2147483647) {
    return 2147483647;
  }
  if (temp < -2147483648) {
    return -2147483648;
  }
  return temp;
};
