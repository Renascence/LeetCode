// Find the sum of all left leaves in a given binary tree.

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
var sumOfLeftLeaves = function (root) {
  if (root == null) return 0;
  var sum = 0;
  cal(root, root.left);
  cal(root, root.right);
  return sum;

  function cal(fat, cur) {
    if (fat == null || cur == null) return;
    if (cur.left == null && cur.right == null) {
      if (fat.left == cur) {
        sum += cur.val;
      }
      return;
    }
    if (cur.left) cal(cur, cur.left);
    if (cur.right) cal(cur, cur.right);
  }
};
