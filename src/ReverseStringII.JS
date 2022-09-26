/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let arr = [];
  let ptr = 0;
  while (ptr < s.length + k) {
    arr.push(s.substr(ptr, k));
    ptr += k;
  }
  for (let i in arr) {
    if (i % 2 == 0) {
      arr[i] = arr[i].split('').reverse().join('');
    }
  }
  return arr.join('');
};
