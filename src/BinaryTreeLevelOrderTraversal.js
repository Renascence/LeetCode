// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

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
var levelOrder = function (root) {
  var res = []
  traverse(root, 1, res)
  return res

  function traverse(root, lv, res) {
    if (!root) return;
    if (lv > res.length) res.push([])
    res[lv - 1].push(root.val)
    traverse(root.left, lv + 1, res)
    traverse(root.right, lv + 1, res)
  }
};