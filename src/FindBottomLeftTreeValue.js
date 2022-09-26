/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findBottomLeftValue = function (root) {
  var arr = [];
  function mapTree(root, lv) {
    if (!arr[lv]) arr[lv] = [];
    if (!root) return;
    arr[lv].push(root.val);
    mapTree(root.left, lv + 1);
    mapTree(root.right, lv + 1);
  }
  mapTree(root, 0);
  return arr[arr.length - 2][0];
};
