// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root == null) return false;
  if (root.left == null && root.right == null) return root.val == sum;
  var res = [];
  pathSum(root, 0);
  return res.indexOf(sum) != -1;
  function pathSum(root, val) {
    if (root.left == null && root.right == null) res.push(root.val + val);
    else if (root.left == null) pathSum(root.right, root.val + val);
    else if (root.right == null) pathSum(root.left, root.val + val);
    else {
      pathSum(root.right, root.val + val);
      pathSum(root.left, root.val + val);
    }
  }
};
