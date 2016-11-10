/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	if(head == null) return head
	var p = head 
	var q = head.next
	while(q!=null) {
		if(q.val == val) {
			p.next = q.next
		} else {
			p = p.next
		}
		q = q.next
	}
	if(head.val == val) {
		if(!head.next ) return []
		else return head.next
	}
	return head
};