/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    function loop(node) {
      if (!node) return
      if(node.val >= L  && node.val <= R) {
        sum += node.val
      }
      loop(node.left)
      loop(node.right)
    }
    loop(root)
    return sum
};