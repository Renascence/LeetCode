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
var averageOfLevels = function (root) {
  const mapTree = (node, level, arr) => {
    if (!node) return;
    if (!arr[level]) arr[level] = [];
    arr[level].push(node.val);
    mapTree(node.left, level + 1, arr);
    mapTree(node.right, level + 1, arr);
    return arr;
  };
  const arr = mapTree(root, 0, []);
  return arr.map(
    (item) =>
      parseInt(item.reduce((previous, current) => (current += previous))) /
      item.length
  );
};
