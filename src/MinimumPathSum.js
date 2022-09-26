/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (grid.length == 0) return 0;
  const dp = [[grid[0][0]]];
  for (let j = 1; j < grid[0].length; j++) {
    dp[0][j] = grid[0][j] + dp[0][j - 1];
  }
  for (let j = 1; j < grid.length; j++) {
    dp[j] = [];
    dp[j][0] = grid[j][0] + dp[j - 1][0];
  }
  for (let i in grid) {
    for (let j in grid[i]) {
      if (i != 0 && j != 0)
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[grid.length - 1][grid[0].length - 1];
};
