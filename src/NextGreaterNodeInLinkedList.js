/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  let data = [];

  function cir(head) {
    if (head) {
      data.push(head.val)
      cir(head.next)
    }
  }
  cir(head)
  let i = 0;
  for (i = 0; i < data.length; i++) {
    let j = i + 1;
    while (j <= data.length) {
      if (data[j] > data[i]) {
        data[i] = data[j]
        break;
      } else if (j == data.length) {
        data[i] = 0
      }
      j++;
    }
  }
  data[data.length - 1] = 0

  return data
};