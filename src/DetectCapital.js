/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word[0].charCodeAt() <= 90) {
    return word.substring(1).toLowerCase() == word.substring(1) || word.substring(1).toUpperCase() == word.substring(1)
  }
  return word.substring(1).toLowerCase() == word.substring(1)
};