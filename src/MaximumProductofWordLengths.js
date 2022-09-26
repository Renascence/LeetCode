// Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  var len = words.length;
  var map = [];
  for (var i = 0; i < len; i++) {
    var temp = 0;
    for (var j = 0; j < words[i].length; j++) {
      temp |= Math.pow(2, words[i].charCodeAt(j) - 97);
    }
    map[i] = temp;
  }
  var res = 0;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < i; j++) {
      if (!(map[i] & map[j])) {
        a = words[i].length * words[j].length;
        res = res > a ? res : a;
      }
    }
  }
  return res;
};
