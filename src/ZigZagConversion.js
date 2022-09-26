var convert = function (s, numRows) {
  if (numRows == 1) return s;
  var i = 0;
  var flag = 0;
  var arr = [];
  while (i < s.length) {
    if (flag % 2 == 0) {
      arr.push(s.substring(i, i + numRows));
      i += numRows;
    } else {
      arr.push(s.substring(i, i + numRows - 2));
      i += numRows - 2;
    }
    flag++;
  }
  for (i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      arr[i] = arr[i].split('').reverse().join('');
      while (arr[i].length < numRows - 1) {
        arr[i] = '^' + arr[i];
      }
    }
  }
  var res = '';
  for (i = 0; i < numRows; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j][i] != '^' && arr[j][i]) res = res + arr[j][i];
    }
  }
  return res;
};
