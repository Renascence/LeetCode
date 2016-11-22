var convertToTitle = function (n) {
  var res = ''
  while (n) {
    res = String.fromCharCode((n - 1) % 26 + 65) + res
    n = parseInt((n - 1) / 26)
  }
  return res
};