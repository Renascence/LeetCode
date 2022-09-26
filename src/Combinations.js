/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var temp = [];
  var res = [];
  dfs(0, k, n, 1);
  return res;

  function dfs(dep, max, n, start) {
    if (dep == max) {
      res.push([]);
      for (var j in temp) {
        res[res.length - 1][j] = temp[j];
      }
      return;
    }
    for (var i = start; i <= n; i++) {
      temp[dep] = i;
      dfs(dep + 1, max, n, i + 1);
    }
  }
};
