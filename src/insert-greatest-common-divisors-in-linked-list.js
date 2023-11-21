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
function gcd(  n,  m ){ 
  if( m == 0 ) return n; 
  return gcd( m, n % m ); 
} 
var insertGreatestCommonDivisors = function (head) {
  const loop = (head) => {
    if (head && head.next) {
      const temp = head.next;
      head.next = {
        val: gcd(head.val, head.next.val),
        next: temp,
      };
      loop(head.next.next);
      return head;
    }
  };
  loop(head);
  return head;
};
