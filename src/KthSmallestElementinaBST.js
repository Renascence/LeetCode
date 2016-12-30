/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  return findVal(root, k)

  function treeSize(root) {
    if (root == null) return 0
    return 1 + treeSize(root.left) + treeSize(root.right)
  }

  function findVal(root, k) {
    if (root == null) return 0
    var nums = treeSize(root.left)
    if (nums + 1 == k) return root.val
    else if (nums >= k) return kthSmallest(root.left, k)
    else return kthSmallest(root.right, k - nums - 1)
  }
};