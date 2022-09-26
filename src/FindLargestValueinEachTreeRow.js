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
  var res = [];
  var arr = [];

  function mapTree(root, lv) {
    if (!arr[lv]) arr[lv] = [];
    if (!root) return;
    arr[lv].push(root.val);
    mapTree(root.left, lv + 1);
    mapTree(root.right, lv + 1);
  }
  mapTree(root, 0);
  for (var i in arr) {
    if (arr[i].length != 0) {
      var max = arr[i][0];
      for (var j in arr[i]) {
        max = max > arr[i][j] ? max : arr[i][j];
      }
      res.push(max);
    }
  }
  return res;
};
