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
var sumEvenGrandparent = function (root) {
  let res = 0
  const bfs = (node, isParentEven = false, isGrandEven = false) => {
    const isEven = node.val % 2 === 0
    if (isGrandEven) {
      res = res + node.val
    }
    if (node.left) {
      bfs(node.left, isEven, isParentEven)
    }
    if (node.right) {
      bfs(node.right, isEven, isParentEven)
    }
  }
  bfs(root)
  return res
};