var repeatedSubstringPattern = function (str) {
  var len = str.length;
  if (len == 1) return false;
  for (i = 1; i <= str.length / 2; i++) {
    var arr = str.split(str.substring(0, i));
    var flag = true;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j]) flag = false;
    }
    if (flag) return true;
  }
  return false;
};
