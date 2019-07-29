/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let sum = 0
  function loop(node) {
    if(node) {
      loop(node.right)
      sum += node.val
      node.val = sum
      loop(node.left, sum)
    }
  }
  loop(root)
  return root
};