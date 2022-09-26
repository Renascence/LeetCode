/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const createTree = (root, leftArr, rightArr) => {
    if (leftArr.length) {
      root.left = new TreeNode(leftArr[0]);
      const l = [];
      const r = [];
      for (let i = 1; i < leftArr.length; i++) {
        if (leftArr[i] > leftArr[0]) {
          r.push(leftArr[i]);
        } else {
          l.push(leftArr[i]);
        }
      }
      createTree(root.left, l, r);
    }
    if (rightArr.length) {
      root.right = new TreeNode(rightArr[0]);
      const l = [];
      const r = [];
      for (let i = 1; i < rightArr.length; i++) {
        if (rightArr[i] > rightArr[0]) {
          r.push(rightArr[i]);
        } else {
          l.push(rightArr[i]);
        }
      }
      createTree(root.right, l, r);
    }
  };
  const root = new TreeNode(preorder[0]);
  const l = [];
  const r = [];
  for (let i = 1; i < preorder.length; i++) {
    if (preorder[i] > preorder[0]) {
      r.push(preorder[i]);
    } else {
      l.push(preorder[i]);
    }
  }
  createTree(root, l, r);
  return root;
};
