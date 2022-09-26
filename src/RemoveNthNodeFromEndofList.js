/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var p = head;
  var q = head;
  var len = 0;
  while (p != null) {
    len++;
    p = p.next;
  }
  if (len == n) return head.next;
  while (len - n > 1) {
    q = q.next;
    len--;
  }
  if (q.next.next) {
    q.next = q.next.next;
  } else {
    q.next = null;
  }
  return head;
};
