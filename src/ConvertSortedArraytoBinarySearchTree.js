var sortedArrayToBST = function (nums) {
  function build(left, right) {
    if (left > right) return null;
    var mid = parseInt((left + right) / 2);
    var node = new TreeNode(nums[mid]);
    node.left = build(left, mid - 1);
    node.right = build(mid + 1, right);
    return node;
  }
  var len = nums.length;

  return build(0, len - 1);
};
