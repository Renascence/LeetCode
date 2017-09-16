/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {
  function trim(root) {
    if (!root) return null;
    if (root.val < L) {
      return trim(root.right)
    }
    if (root.val > R) {
      return trim(root.left)
    }
    root.left = trim(root.left)
    root.right = trim(root.right)
    console.log(root)
    return root;
  }
  return trim(root)
};