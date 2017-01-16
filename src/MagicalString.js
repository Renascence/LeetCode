/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
  if (n == 0) return 0
  var s = [1,2,2]
  var i = 2, res = 1
  while (s.length <= n) {
    var temp = s[s.length - 1] ^ 3
    if (s[i] == 1) {
      res++
      s.push(temp)
    }
    else {
      s.push(temp)
      s.push(temp)
    }
    i++
  }
  for (; i < n; i++) {
    if (s[i] == 1) res++
  }
  return res
};