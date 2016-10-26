/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if(n == 1) return '1'
  if(n == 2)  return '11'
  function count(n) {
    var nArr = n.toString().split('');
    var count = []
    var j = -1
    var res = ''
    for (var i = 0; i < nArr.length - 1; i++) {
      if (nArr[i] != nArr[i + 1]) {
        count.push([i - j, nArr[i]])
        j = i
      }
    }
    if (nArr[nArr.length - 1] == nArr[nArr.length - 2]) {
      count.push([nArr.length - j - 1, nArr[nArr.length - 1]])
    }
    else {
      count.push([1, nArr[nArr.length - 1]])
    }
    for (var i = 0; i < count.length; i++) {
      res = res + count[i][0] + count[i][1]
    }
    return res
  }
  fir = count(1)
  for (var j = 0; j < n-2; j++) {
    fir = count(fir)
  }
  return fir
};
