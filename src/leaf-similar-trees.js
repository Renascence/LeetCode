/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  function getLeaf(root, arr = []) {
    if (!root.left && !root.right) {
      arr.push(root.val);
    }
    root.left && getLeaf(root.left, arr);
    root.right && getLeaf(root.right, arr);
    return arr;
  }
  const arr = getLeaf(root1);
  const arr2 = getLeaf(root2);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
