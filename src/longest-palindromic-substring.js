/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s) return '';
  let res = s[0];
  for (let i = 0; i < s.length; i = i + 1) {
    let left = i - 1;
    let right = i + 1;
    if (s[left] === s[right]) {
      while (left >= 0 && right <= s.length - 1) {
        if (s[left] === s[right]) {
          res = res.length > right + 1 - left ? res : s.slice(left, right + 1);
          left = left - 1;
          right = right + 1;
        } else {
          break;
        }
      }
    }
    left = i;
    right = i + 1;
    if (s[left] === s[right]) {
      while (left >= 0 && right < s.length) {
        if (s[left] === s[right]) {
          res = res.length > right + 1 - left ? res : s.slice(left, right + 1);
          left = left - 1;
          right = right + 1;
        } else {
          break;
        }
      }
    }
  }
  return res;
};
