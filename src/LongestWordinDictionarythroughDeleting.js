/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  let res = '';
  for (let i = 0; i < d.length; i++) {
    if (d[i] < res.length) {
      continue;
    }
    if (findWord(d[i], s)) {
      if (d[i].length > res.length) res = d[i];
      else if (
        d[i].length == res.length &&
        d[i].charCodeAt(0) < res.charCodeAt(0)
      )
        res = d[i];
    }
  }
  return res;

  function findWord(word, string) {
    let i, j;
    for (i = 0, j = 0; i < word.length && j < string.length; i++) {
      if (word[i] == string[j]) j++;
      else {
        j++;
        i--;
      }
    }
    if (j <= string.length && i == word.length) return true;
    return false;
  }
};
