/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head == null || head.next == null) return true
  var arr = []
  var p = head
  while (p != null) {
    arr.push(p.val)
    p=p.next
  }
  return arr.join('') == arr.reverse().join('')
};