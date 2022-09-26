/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let obj = {};
  arr1.forEach((v) => {
    if (obj[v]) {
      obj[v]++;
    } else {
      obj[v] = 1;
    }
  });
  let res = [];
  arr2.forEach((v) => {
    for (let i = 0; i < obj[v]; i++) {
      res.push(v);
    }
    delete obj[v];
  });
  let rest = [];
  Object.keys(obj).forEach((v) => {
    for (let i = 0; i < obj[v]; i++) {
      rest.push(~~v);
    }
  });
  rest.sort((a, b) => a - b);
  return res.concat(rest);
};
