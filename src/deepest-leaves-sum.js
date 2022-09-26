/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let res = [];
  const bfs = (node, level = 0) => {
    if (!node.left && !node.right) {
      if (res[level]) {
        res[level] += node.val;
      } else {
        res[level] = node.val;
      }
    }
    if (node.left) {
      bfs(node.left, level + 1);
    }
    if (node.right) {
      bfs(node.right, level + 1);
    }
  };
  bfs(root);
  return res.pop();
};
