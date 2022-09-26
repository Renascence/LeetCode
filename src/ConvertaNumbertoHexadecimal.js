// Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num == 0) return '0';
  if (num < 0) num += 0x100000000;
  var res = '';
  var remainder,
    list = '0123456789abcdef';
  while (num > 0) {
    remainder = list[num % 16];
    num = parseInt(num / 16);
    res = remainder + res;
  }
  return res;
};
