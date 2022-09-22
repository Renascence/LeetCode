var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let temp = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    let find = -1;
    if (temp.includes(char)) {
      max = Math.max(max, temp.length);
      temp.forEach((i, index) => {
        if (i === char) {
          find = index;
        }
      });
      temp.splice(0, find + 1);
      temp.push(char);
    } else {
      temp.push(char);
    }
  }
  return Math.max(max, temp.length);
};
