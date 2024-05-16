/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let pointer = head;
  const duplicateMap = {};
  while (pointer && pointer.next) {
    while (pointer.next && pointer.val === pointer.next.val) {
      pointer.next = pointer.next.next;
      duplicateMap[pointer.val] = true;
    }
    pointer = pointer.next;
  }
  pointer = head;
  let res = null;
  let ret = null;
  while (pointer) {
    if (!duplicateMap[pointer.val]) {
      if (!res) {
        res = pointer;
        ret = res;
      } else {
        res.next = pointer;
        res = res.next;
      }
    } else {
      if (res) {
        res.next = null;
      }
    }
    pointer = pointer.next;
  }

  return ret;
};
