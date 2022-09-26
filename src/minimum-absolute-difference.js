/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  const res = [];
  let min = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i] - arr[i - 1];
    if (val < min) {
      min = val;
    }
  }
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i] - arr[i - 1];
    if (val === min) {
      res.push([arr[i - 1], arr[i]]);
    }
  }
  return res;
};
