/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var min,
    max,
    sum = [],
    flag = 0;
  if (a.length > b.length) {
    min = b;
    max = a;
  } else {
    max = b;
    min = a;
  }
  max = max.split('').reverse();
  min = min.split('').reverse();
  while (min.length < max.length) {
    min.push(0);
  }
  for (var i = 0; i < max.length; i++) {
    sum[i] = (flag + parseInt(max[i]) + parseInt(min[i])) % 2;
    flag = flag + parseInt(max[i]) + parseInt(min[i]) > 1 ? 1 : 0;
  }
  if (flag == 0) return sum.reverse().join('');
  else {
    sum.push(1);
    return sum.reverse().join('');
  }
};
