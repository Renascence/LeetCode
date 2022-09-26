/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let res = [];
  A.forEach((v) => {
    v % 2 === 0 ? res.unshift(v) : res.push(v);
  });
  return res;
};
