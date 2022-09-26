var findMinArrowShots = function (points) {
  if (points.length == 0) return 0;
  points.sort(function (a, b) {
    return a[0] == b[0] ? a[1] - b[1] : a[0] - b[0];
  });
  var res = 1;
  var end = points[0][1];
  for (var i in points) {
    if (end >= points[i][0]) {
      end = Math.min(end, points[i][1]);
    } else {
      res++;
      end = points[i][1];
    }
  }
  return res;
};
