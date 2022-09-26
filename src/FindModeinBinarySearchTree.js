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
var findMode = function (root) {
  if (!root) return [];
  var vals = [];
  var obj = {};
  var max = 0,
    times = 0,
    res = [0];
  function order(root) {
    if (root == null) return;
    vals.push(root.val);
    order(root.left);
    order(root.right);
  }
  order(root);
  for (var i in vals) {
    if (obj[vals[i]]) obj[vals[i]]++;
    else obj[vals[i]] = 1;
  }
  for (var j in obj) {
    if (obj[j] > times) {
      res.length = 0;
      times = obj[j];
      res.push(parseInt(j));
    } else if (obj[j] == times) {
      res.push(parseInt(j));
    }
  }
  return res;
};
