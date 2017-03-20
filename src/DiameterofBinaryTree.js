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
var diameterOfBinaryTree = function (root) {

  function getDep(root) {
    if (!root) return 0
    return Math.max(getDep(root.left), getDep(root.right)) + 1
  }

  function getMaxDia(root) {
    if(!root) return 0
    const leftDia = getMaxDia(root.left)
    const rightDia = getMaxDia(root.right)
    const rootDia = getDep(root.left) + getDep(root.right)
    return Math.max(leftDia, rightDia, rootDia)
  }

  return getMaxDia(root)
};