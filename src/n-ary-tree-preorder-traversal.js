/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let res = [];
  function loop(node) {
    if (!node) return
    res.push(node.val)
    node.children.forEach(c => {
      loop(c)
    })
  }
  loop(root)
  return res
};