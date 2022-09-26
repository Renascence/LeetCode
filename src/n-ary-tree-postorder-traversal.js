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
var postorder = function (root) {
  let res = [];
  function loop(node) {
    if (!node) return;
    node.children.forEach((c) => {
      loop(c);
    });
    res.push(node.val);
  }
  loop(root);
  return res;
};
