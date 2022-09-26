/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  var arr = input.split('\n');
  if (arr.length == 1) {
    if (input.indexOf('.') == -1) return 0;
    else return input.length;
  }
  var res = 0;
  var level = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('.') == -1) {
      arr[i] = arr[i].replace(/ /g, '');
      var lv = ttimes(arr[i]);
      if (lv > 0) {
        level[lv] = arr[i].length - lv + level[lv - 1];
      } else {
        level[lv] = arr[i].length;
      }
    } else {
      var lv = ttimes(arr[i]);
      if (lv == 0) {
        var temp = arr[i].length;
      } else {
        var temp = arr[i].length + level[lv - 1];
      }
      res = res > temp ? res : temp;
    }
  }
  return res;

  function ttimes(str) {
    var res = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] == '\t') {
        res++;
      } else return res;
    }
  }
};
