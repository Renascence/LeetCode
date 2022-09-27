/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  const res = [];
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const recursion = (array, s, index, length) => {
    if (index === length - 1) {
      map[digits[index]].forEach((letter) => {
        array.push(s + letter);
      });
    } else {
      map[digits[index]].forEach((letter) => {
        recursion(array, s + letter, index + 1, length);
      });
    }
  };
  recursion(res, '', 0, digits.length);
  return res;
};
