/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
  const A = parseInt(a.split('+')[0]);
  const B = parseInt(a.split('+')[1]);
  const C = parseInt(b.split('+')[0]);
  const D = parseInt(b.split('+')[1]);
  return `${A * C - B * D}+${A * D + B * C}i`;
};
