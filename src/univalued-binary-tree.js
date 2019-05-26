/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  const num = root.val
  let flag = true
  function loop(root) {
    if(!root) return
    if(root.val != num) {
      flag = false
      return
    }
    loop(root.left)
    loop(root.right)
  }
  loop(root)
  return flag
};