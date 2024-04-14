/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const leftChar = ['(', '{', '['];
  if (s.length % 2 !== 0) {
    return false;
  }
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const curChar = s[i];
    if (leftChar.includes(s[i])) {
      arr.push(curChar);
    } else {
      const stashChar = arr[arr.length - 1];
      if (curChar === ')') {
        if (stashChar !== '(') {
          return false;
        }
      }
      if (curChar === '}') {
        if (stashChar !== '{') {
          return false;
        }
      }
      if (curChar === ']') {
        if (stashChar !== '[') {
          return false;
        }
      }
      arr.pop();
    }
  }
  if (arr.length) {
    return false;
  }
  return true;
};
