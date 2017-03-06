/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  var values = []
  function map(root) {
    if (!root) {
      return
    } else {
      values.push(root.val)
      map(root.left)
      map(root.right)
    }
  }
  map(root)
  values.sort(function(a,b){
    return a-b
  })
  var res = values[1] - values[0]
  for (var i = 0; i < values.length - 1; i++) {
    if ((values[i + 1] - values[i]) < res) {
      res = values[i + 1] - values[i]
    }
  }
  return res
};