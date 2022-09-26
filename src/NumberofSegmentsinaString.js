var countSegments = function (s) {
  var arr = s.split(' ');
  var res = 0;
  for (var i in arr) {
    if (arr[i] != ' ' && arr[i]) res++;
  }
  return res;
};
