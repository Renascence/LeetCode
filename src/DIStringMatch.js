var diStringMatch = function (S) {
  const len = S.length;
  let min = 0;
  let max = len;
  const res = [];
  for (let i = 0; i < len; i++) {
    if (S[i] === 'I') {
      res[i] = min++;
    } else {
      res[i] = max--;
    }
  }
  res.push(min);
  return res;
};
