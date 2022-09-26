// Reverse a singly linked list.

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
var reverseList = function (head) {
  if (!head) {
    return [];
  }
  var cur = head;
  var ol = null;
  var ne = null;
  while (cur) {
    ol = cur.next;
    cur.next = ne;
    ne = cur;
    cur = ol;
  }
  return ne;
};
