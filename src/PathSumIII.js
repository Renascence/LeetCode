// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (root == null) return 0
  var sumArr = []
  var res = 0
  recursion(root)
  return res

  function calSum(root, val) {
    if (root.val + val == sum) {
      res++
    }
    if (root.left == null && root.right == null) { console.log(root.val) }
    else if (root.left == null) { calSum(root.right, val + root.val) }
    else if (root.right == null) calSum(root.left, val + root.val)
    else {
      calSum(root.right, val + root.val)
      calSum(root.left, val + root.val)
    }
  }
  function recursion(root) {
    calSum(root, 0)
    if (root.left == null && root.right == null) { console.log('recu') }
    else if (root.left == null) recursion(root.right, 0)
    else if (root.right == null) recursion(root.left, 0)
    else {
      recursion(root.right, 0)
      recursion(root.left, 0)
    }
  }
};