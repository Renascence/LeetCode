/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  const len1 = num1.length;
  const len2 = num2.length;
  let arr = [];
  arr.length = len1 + len2;
  arr.fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    const number1 = +num1[i];
    for (let j = len2 - 1; j >= 0; j--) {
      const number2 = +num2[j];
      let mulRes = +number1 * +number2 + arr[i + j + 1];
      arr[i + j] = arr[i + j] + Math.floor(mulRes / 10);
      arr[i + j + 1] = mulRes % 10;
    }
  }
  let str = arr.join('');
  if (str[0] === '0') {
    return str.slice(1);
  }
  return str;
};
