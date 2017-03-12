/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const hash = {}
  function dfs(root, hash, lv) {
    if (!root) return 0
    if(hash[root.val + '/' + lv] != undefined) return hash[root.val + '/' + lv]
    let res = 0
    if (root.left) {
      res += dfs(root.left.left, hash, lv + 1) + dfs(root.left.right, hash, lv + 1)
    }
    if (root.right) {
      res += dfs(root.right.left, hash, lv + 1) + dfs(root.right.right, hash, lv + 1)
    }
    res = Math.max(res + root.val, dfs(root.left, hash, lv + 1) + dfs(root.right, hash, lv + 1))
    hash[root.val + '/' + lv] = res
    return res
  }
  return dfs(root, hash, 0)
};