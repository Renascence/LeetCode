/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  function loop(node) {
    if (!node) return;
    loop(node.left);
    loop(node.right);
    res.push(node.val);
  }
  loop(root);
  return res;
};
