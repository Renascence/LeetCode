/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  function dfs(num, level, visited, cur) {
    if (level == num.length) {
      res.push(cur.slice(0))
    }
    else {
      for (let i in num) {
        if (!visited[i]) {
          visited[i] = true
          cur.push(num[i])
          dfs(num, level + 1, visited, cur)
          cur.pop()
          visited[i] = false
        }
      }
    }
  }
  let res = []
  let visited = []
  dfs(nums, 0, visited, [])
  return res
};