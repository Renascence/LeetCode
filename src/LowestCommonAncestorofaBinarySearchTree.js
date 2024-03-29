// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root == p || root == q) return root;
  if (Math.max(q.val, p.val) < root.val)
    return lowestCommonAncestor(root.left, p, q);
  else if (Math.min(q.val, p.val) > root.val)
    return lowestCommonAncestor(root.right, p, q);
  else return root;
};
