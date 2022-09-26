/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  let res = null;
  const bfs = (node) => {
    if (node.val === target.val) {
      res = node;
    } else {
      if (node.left) {
        bfs(node.left);
      }
      if (node.right) {
        bfs(node.right);
      }
    }
  };
  bfs(cloned);
  return res;
};
