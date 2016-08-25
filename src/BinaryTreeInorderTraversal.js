// Given a binary tree, return the inorder traversal of its nodes' values.

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
var inorderTraversal = function(root) {
	var res = []
	function path(node) {
		if(node == null) return null;
		path(node.left)
		res.push(node.val)
		path(node.right)
	}
	path(root)
	return res 
};