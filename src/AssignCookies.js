var findContentChildren = function (g, s) {
  var child = g.sort(function (a, b) {
    return a - b;
  });
  var cookie = s.sort(function (a, b) {
    return a - b;
  });
  var i = 0,
    j = 0,
    res = 0;
  while (child[j] && cookie[i]) {
    if (child[j] <= cookie[i]) {
      res++;
      i++;
      j++;
    } else {
      i++;
    }
  }
  return res;
};
