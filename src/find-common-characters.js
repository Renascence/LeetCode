/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  const len = A.length;
  let obj = {};
  let word = A[0];
  for (let j = 0; j < word.length; j++) {
    if (obj[word[j]]) {
      obj[word[j]]++;
    } else {
      obj[word[j]] = 1;
    }
  }
  for (let i = 1; i < len; i++) {
    let word = A[i];
    let temp = {};
    for (let j = 0; j < word.length; j++) {
      if (obj[word[j]]) {
        if (temp[word[j]]) {
          temp[word[j]]++;
        } else {
          temp[word[j]] = 1;
        }
      }
    }
    Object.keys(obj).forEach((key) => {
      obj[key] = Math.min(obj[key], temp[key]);
    });
  }
  const res = [];
  Object.keys(obj).forEach((key) => {
    for (let i = 0; i < obj[key]; i++) {
      res.push(key);
    }
  });
  return res;
};
