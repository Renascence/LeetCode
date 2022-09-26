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
var insertIntoBST = function (root, val) {
  function loop(root) {
    if (!root) return new TreeNode(val);
    if (root.val > val) {
      root.left = loop(root.left);
    } else {
      root.right = loop(root.right);
    }
    return root;
  }
  loop(root);
  return root;
};
