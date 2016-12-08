/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  function dfs(res, temp, start, k, n) {
    if (n < 0 || k < 0) return
    console.log('====', n, k, temp)
    if (n == 0 && k == 0) {
      res[res.length] =[]      
      // res.push(temp)
      for(var j in temp) {
        res[res.length-1].push(temp[j])
      }
      return
    }
    for (var i = start; i <= 9; i++) {
      temp.push(i)
      dfs(res, temp, i + 1, k - 1, n - i)
      temp.length = temp.length - 1
    }
  }
  var res = []
  var temp = []
  if (k < 1 || n < 1) return res
  dfs(res, temp, 1, k, n)
  return res
};
1