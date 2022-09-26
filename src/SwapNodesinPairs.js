// Given a linked list, swap every two adjacent nodes and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null) return null;
  if (head.next == null) return head;
  var first = head;
  var sec = head.next;
  var temp = head;
  head = sec;
  while (first && sec) {
    temp.next = sec;
    first.next = sec.next;
    sec.next = first;
    temp = first;
    first = first.next;
    if (first != null) sec = first.next;
  }
  return head;
};
