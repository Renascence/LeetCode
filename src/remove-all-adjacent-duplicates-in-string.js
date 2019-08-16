/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  var arr = S.split('');
  function loop(arr) {
    let res = []
    let flag = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        flag = true
        i++
      } else {
        res.push(arr[i])
      }
    }
    if (flag) {
      return loop(res)
    }
    return res
  }
  return loop(arr).join('')
};