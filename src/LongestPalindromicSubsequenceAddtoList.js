/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const len = s.length;
  let dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    dp[i].length = len;
  }
  for (let i = len - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < len; j++) {
      if (s[i] == s[j]) dp[i][j] = (dp[i + 1][j - 1] || 0) + 2;
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
    }
  }
  return dp[0][len - 1];
};
