/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  function build(nums, start, end) {
    if (start > end) return null;
    let idxMax = start;
    for (let i = start + 1; i <= end; i++) {
      if (nums[i] > nums[idxMax]) {
        idxMax = i;
      }
    }
    const root = new TreeNode(nums[idxMax]);
    root.left = build(nums, start, idxMax - 1);
    root.right = build(nums, idxMax + 1, end);
    return root;
  }
  if (nums == null) return null;
  return build(nums, 0, nums.length - 1);
};