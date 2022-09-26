/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort(function (a, b) {
    return a - b;
  });
  var res = [];
  var cur = [];
  function cal(start, sum, target, candidates) {
    if (sum > target) return;
    if (sum == target) {
      res[res.length] = [];
      for (var j in cur) {
        res[res.length - 1].push(cur[j]);
      }
      return;
    } else {
      for (var i = start; i < candidates.length; i++) {
        cur.push(candidates[i]);
        cal(i + 1, sum + candidates[i], target, candidates);
        cur.length = cur.length - 1;
        while (i < candidates.length && candidates[i] == candidates[i + 1]) {
          i++;
        }
      }
    }
  }
  cal(0, 0, target, candidates);
  return res;
};
