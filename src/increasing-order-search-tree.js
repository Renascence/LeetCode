/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  function loop(root, arr) {
    if (root) {
      loop(root.left, arr)
      arr.push(root.val)
      loop(root.right, arr)
    }
    return arr
  }
  const arr = loop(root, [])

  function build(root, index) {
    if (index < arr.length) {
      root.right = new TreeNode(arr[index])
      build(root.right, index + 1)
    }
  }

  const node = new TreeNode(arr[0])
  build(node, 1)
  return node
};
