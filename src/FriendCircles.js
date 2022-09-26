/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function (M) {
  const len = M.length;
  const visit = [];
  let res = 0;
  for (let i = 0; i < len; i++) {
    if (visit[i]) continue;
    map(i);
    res++;
  }
  return res;

  function map(k) {
    visit[k] = true;
    for (let j = 0; j < len; j++) {
      if (!M[k][j] || visit[j]) continue;
      map(j);
    }
  }
};
