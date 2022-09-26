// Write a function that takes a string as input and reverse only the vowels of a string.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var i = 0;
  var j = s.length - 1;
  var vowels = 'aeiouAEIOU';
  var s = s.split('');
  while (i < j) {
    if (vowels.indexOf(s[i]) != -1 && vowels.indexOf(s[j]) != -1) {
      var temp = s[i];
      s.splice(i, 1, s[j]);
      s.splice(j, 1, temp);
      i++;
      j--;
    } else {
      if (vowels.indexOf(s[i]) == -1) i++;
      if (vowels.indexOf(s[j]) == -1) j--;
    }
  }
  return s.join('');
};
