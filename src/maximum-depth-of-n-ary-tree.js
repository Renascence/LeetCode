/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0;
  function loop(root, lv) {
    if (!root) return;
    res = lv > res ? lv : res;
    loop(root.left);
    root.children.forEach((i) => loop(i, lv + 1));
  }
  loop(root, 1);
  return res;
};
