/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = []

  for (let i = 0; i <= m; i++) {
    dp.push([])
    for (let j = 0; j <= n; j++) {
      dp[i].push(0)
    }
  }
  console.log(dp)
  for (let i in strs) {
    let ones = 0, zeros = 0
    for (let j in strs[i]) {
      strs[i][j] == '0' ? zeros++ : ones++
    }
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1)
      }
    }
  }
  return dp[m][n]
};