/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const arr = [];
  let res = 0;
  ops.forEach((_, index) => {
    const len = arr.length;
    if (_ === '+') {
      arr.push(arr[len - 1] + arr[len - 2]);
    } else if (_ === 'D') {
      arr.push(arr[len - 1] * 2);
    } else if (_ === 'C') {
      arr.pop();
    } else {
      arr.push(parseInt(_));
    }
  });
  arr.forEach((_) => (res += _));
  return res;
};
