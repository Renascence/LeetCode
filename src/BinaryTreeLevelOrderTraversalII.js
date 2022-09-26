// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  var res = [];
  traverse(root, 1, res);
  return res.reverse();

  function traverse(root, lv, res) {
    if (!root) return;
    if (lv > res.length) res.push([]);
    res[lv - 1].push(root.val);
    traverse(root.left, lv + 1, res);
    traverse(root.right, lv + 1, res);
  }
};
