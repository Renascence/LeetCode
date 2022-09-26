/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  var temp = num;
  var mask = 1;
  while (temp > 0) {
    mask = mask << 1;
    temp = temp >> 1;
  }
  return num ^ (mask - 1);
};
