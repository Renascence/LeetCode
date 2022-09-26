// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

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
var isSymmetric = function (root) {
  if (root == null) return true;
  if (root.left == null && root.right == null) return true;
  return isEqual(root.left, root.right);
  function isEqual(left, right) {
    if (left == null && right == null) return true;
    if (left == null && right != null) return false;
    if (left != null && right == null) return false;
    if (left.val != right.val) return false;
    return isEqual(left.left, right.right) && isEqual(left.right, right.left);
  }
};
