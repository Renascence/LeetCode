/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  var res = 0;
  var length = points.length;
  if (length == 0) return 0;
  for (var i = 0; i < length; i++) {
    var dist = {};
    for (var j = 0; j < length; j++) {
      var len =
        (points[j][0] - points[i][0]) * (points[j][0] - points[i][0]) +
        (points[j][1] - points[i][1]) * (points[j][1] - points[i][1]);
      if (dist[len]) dist[len]++;
      else dist[len] = 1;
    }
    for (var k in dist) {
      res += parseInt(dist[k]) * parseInt(dist[k] - 1);
    }
  }
  return res;
};
