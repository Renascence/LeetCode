/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let arr = []
  function dfs(node) {
    if (!node) return
    dfs(node.left)
    arr.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  for (let i = 0; i < arr.length; i++) {
    const index = arr.indexOf(k - arr[i]) 
    if (index !== -1 && index !== i)
      return true
  }
  return false
};