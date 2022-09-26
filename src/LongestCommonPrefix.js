// Write a function to find the longest common prefix string amongst an array of strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return '';
  if (strs.length == 1) return strs[0];
  for (var i = 0; i < strs.length; i++) {
    if (strs[i] == '') return '';
  }
  for (var i = 1; i <= strs[0].length; i++) {
    var flag = true;
    var test = strs[0].substring(0, i);
    for (var j = 1; j < strs.length; j++) {
      if (strs[j].indexOf(test) != 0) {
        flag = false;
      }
    }
    if (!flag) {
      return strs[0].substring(0, i - 1);
    }
  }
  return strs[0];
};
