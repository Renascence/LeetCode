/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];

  function loop(node, lv) {
    if (!node) return;
    if (res[lv]) {
      res[lv].push(node.val);
    } else {
      res[lv] = [node.val];
    }
    node.children.forEach((c) => {
      loop(c, lv + 1);
    });
  }
  loop(root, 0);
  return res;
};
