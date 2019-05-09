/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let res = null

  function loop(root) {
    if (!root) {
      return
    }
    if (root.val === val) {
      res = root
    } else {
      loop(root.left)
      loop(root.right)
    }
  }
  loop(root)
  return res
};