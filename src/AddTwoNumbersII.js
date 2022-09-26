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
  var len1 = 0,
    len2 = 0;
  var temp1 = l1,
    temp2 = l2,
    arr1 = [],
    arr2 = [],
    arr3 = [];
  while (temp1) {
    len1++;
    arr1.push(temp1.val);
    temp1 = temp1.next;
  }
  while (temp2) {
    len2++;
    arr2.push(temp2.val);
    temp2 = temp2.next;
  }
  var len3 = Math.max(arr1.length, arr2.length);
  arr1.reverse();
  arr2.reverse();
  var flag = 0;
  for (var i = 0; i < len3; i++) {
    if (arr1[i] == undefined) {
      arr3[i] = arr2[i] + flag;
    } else if (arr2[i] == undefined) {
      arr3[i] = arr1[i] + flag;
    } else {
      arr3[i] = arr1[i] + arr2[i] + flag;
    }
    if (arr3[i] > 9) {
      flag = 1;
      arr3[i] = arr3[i] - 10;
    } else flag = 0;
  }
  if (flag == 1) arr3.push(1);
  arr3.reverse();
  var res = new ListNode(arr3[0]);
  var temp = res;
  for (var j = 1; j < arr3.length; j++) {
    temp.next = new ListNode(arr3[j]);
    temp = temp.next;
  }
  return res;
};
