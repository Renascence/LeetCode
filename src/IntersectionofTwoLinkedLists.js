var getIntersectionNode = function (headA, headB) {
  var q = headA
  var p = headB
  if (p == null || q == null) return null
  if (p.val == q.val) return p
  while (q != null && p != null) {
    if (q.val > p.val) p = p.next
    else if (q.val < p.val) q = q.next
    else if (q == p) return q
  }
  return null
};