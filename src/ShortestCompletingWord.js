/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const hash = getHash(licensePlate);
  let res = '';
  for (let i = 0; i < words.length; i++) {
    const temp = getHash(words[i]);
    let flag = true;
    for (let j in hash) {
      if (!temp[j]) {
        flag = false;
        break;
      }
      if (temp[j] && temp[j] < hash[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      if (res === '') {
        res = words[i];
      } else {
        res = words[i].length < res.length ? words[i] : res;
      }
    }
  }
  return res;
};
function getHash(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode <= 90 && charCode >= 65) {
      if (hash[String.fromCharCode(charCode + 32)]) {
        hash[String.fromCharCode(charCode + 32)]++;
      } else {
        hash[String.fromCharCode(charCode + 32)] = 1;
      }
    }
    if (charCode <= 122 && charCode >= 97) {
      if (hash[str[i]]) {
        hash[str[i]]++;
      } else {
        hash[str[i]] = 1;
      }
    }
  }
  return hash;
}
