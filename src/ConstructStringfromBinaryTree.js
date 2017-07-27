/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  const loop = (tree) => {
    if (!tree) return ''
    let str = ''
    str += tree.val
    if (tree.right) {
      str += `(${loop(tree.left)})`
      str += `(${loop(tree.right)})`
    } else if (tree.left) {
      str += `(${loop(tree.left)})`
    }
    return str
  }
  return loop(t)
};