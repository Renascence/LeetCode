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
var addTwoNumbers = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let flag = 0;
  const res = new ListNode();
  let p = res;
  while (l1 || l2) {
    let sum;
    if (l1 && l2) {
      sum = l1.val + l2.val + flag;
    } else if (!l1) {
      sum = l2.val + flag;
    } else if (!l2) {
      sum = l1.val + flag;
    }
    p.next = new ListNode(sum % 10);
    flag = sum >= 10 ? 1 : 0;
    p = p.next;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  if (flag) {
    p.next = new ListNode(1);
  }
  return res.next;
};
