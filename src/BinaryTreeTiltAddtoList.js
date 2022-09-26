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
var findTilt = function (root) {
  let sum = 0;
  calMinus(root);
  return sum;
  function calMinus(root) {
    if (!root) return 0;
    let left = calMinus(root.left);
    let right = calMinus(root.right);
    sum += Math.abs(left - right);
    return root.val + left + right;
  }
};
