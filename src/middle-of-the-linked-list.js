var middleNode = function (head) {
  let len = 1
  let p = head;
  let q = head;
  while(p.next) {
    len ++ 
    p = p.next
  }
  if (len === 1) {
    return head
  }
  if (len === 2) {
    return head.next
  }
  const mid = Math.round((len + 1) / 2)
  let res
  let index = 1
  while(q.next) {
    if (index === mid) {
      res = q
      break
    }
    index ++
    q = q.next
  }
  return res
};