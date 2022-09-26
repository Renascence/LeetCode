/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  const len = bits.length;
  let i = 0;
  while (i < len - 1) {
    i += bits[i] + 1;
  }
  return i === len - 1;
};
