/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root || (root.left == null && root.right == null)) return root;

  var temp = root.right;
  root.right = root.left;
  root.left = temp;
  invertTree(root.right);
  invertTree(root.left);
  return root;
};
