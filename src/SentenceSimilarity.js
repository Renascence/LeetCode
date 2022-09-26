/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilar = function (words1, words2, pairs) {
  const hash = {};
  pairs.forEach((item) => {
    if (!hash[item[0]]) {
      hash[item[0]] = [item[1]];
    } else {
      hash[item[0]].push(item[1]);
    }
    if (!hash[item[1]]) {
      hash[item[1]] = [item[0]];
    } else {
      hash[item[1]].push(item[0]);
    }
  });
  const len = words1.length;
  if (len !== words2.length) return false;
  for (let i = 0; i < len; i++) {
    if (
      !(
        words1[i] === words2[i] ||
        (hash[words1[i]] && hash[words1[i]].indexOf(words2[i]) !== -1)
      )
    ) {
      return false;
    }
  }
  return true;
};
