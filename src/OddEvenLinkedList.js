var oddEvenList = function (head) {
  if (head == null) return null
  if (head.next == null) return head
  var odd = new ListNode(0)
  var oddEnd = odd
  var even = new ListNode(0)
  var evenEnd = even
  var temp = head
  var count = 0
  while (temp != null) {
    count++
    if (count % 2 != 0) {
      oddEnd.next = temp
      oddEnd = oddEnd.next
    }
    else {
      evenEnd.next = temp
      evenEnd = evenEnd.next
      if(evenEnd.next == null){
        evenEnd.next
      }
    }
    temp = temp.next
  }
  oddEnd.next = even.next
  evenEnd.next = null
  return odd.next
};