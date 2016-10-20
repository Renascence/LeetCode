// Given a binary tree, determine if it is height-balanced.

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
var isBalanced = function (root) {
  if (root == null) return true
  var left = 0, right = 0
  if (root.left) var left = count(root.left, 0);
  if (root.right) var right = count(root.right, 0);

  if (Math.max(left, right) - Math.min(left, right) <= 1) return isBalanced(root.left) && isBalanced(root.right)
  else return false

  function count(root) {
    if (root == null) return 0
    if (root.left == null) return count(root.right) + 1
    else if (root.right == null) return count(root.left) + 1
    else {
      var l = count(root.left)
      var r = count(root.right)

      return l < r ? (r + 1) : (l + 1)
    }
  }
};