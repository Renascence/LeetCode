// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  var head = null,
    iCur = null;
  if (l1.val < l2.val) {
    iCur = l1;
    l1 = l1.next;
  } else {
    iCur = l2;
    l2 = l2.next;
  }
  head = iCur;
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      iCur.next = l1;
      l1 = l1.next;
    } else {
      iCur.next = l2;
      l2 = l2.next;
    }
    iCur = iCur.next;
  }
  if (l1 == null) iCur.next = l2;
  if (l2 == null) iCur.next = l1;
  return head;
};
