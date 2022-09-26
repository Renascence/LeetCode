/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
  var res = 0;
  var visit = [false];
  for (var i = 1; i <= N; i++) {
    visit[i] = false;
  }
  function map(n, pos, visit) {
    if (pos > n) {
      res++;
      return;
    }
    for (var i = 1; i <= n; i++) {
      if (!visit[i] && (i % pos == 0 || pos % i == 0)) {
        visit[i] = true;
        map(n, pos + 1, visit);
        visit[i] = false;
      }
    }
  }
  map(N, 1, visit);
  return res;
};
