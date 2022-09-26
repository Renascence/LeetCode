// Given a binary tree, find its minimum depth.

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
var minDepth = function (root) {
  if (root == null) return 0;
  if (root.left == null && root.right == null) return 1;
  var res = [];
  cal(root, 0);
  var min = res[0];

  for (var i = 1; i < res.length; i++) {
    if (min > res[i]) min = res[i];
  }
  return min;

  function cal(root, val) {
    if (root.left == null && root.right == null) res.push(val + 1);
    else if (root.left == null) cal(root.right, val + 1);
    else if (root.right == null) cal(root.left, val + 1);
    else {
      cal(root.right, val + 1);
      cal(root.left, val + 1);
    }
  }
};
