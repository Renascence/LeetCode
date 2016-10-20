// Given a binary tree, return all root-to-leaf paths.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  var res = ''
  if (root) findPath(root, root.val)
  return res

  function findPath(n, str) {
    if (n.left == null && n.right == null) res = res + str
    if (n.left != null) findPath(n.left, str + '->' + n.left.val)
    if (n.right != null) findPath(n.right, str + '->' + n.right.val)   
  }
};