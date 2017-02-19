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
var largestValues = function (root) {
  var res = []
  var arr = []

  function mapTree(root, lv) {
    if (!arr[lv]) arr[lv] = []
    if(!root) return
    if(root.left == null && root.right == null) return
    arr[lv].push(root.val)
    mapTree(root.left,lv+1)
    mapTree(root.right,lv+1)
  }
  mapTree(root,0)
  console.log(arr)
};