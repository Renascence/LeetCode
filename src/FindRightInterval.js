var findRightInterval = function (intervals) {
  var filter = [];
  var filter1 = [];
  for (var i = 0; i < intervals.length; i++) {
    filter.push(intervals[i].start);
  }
  for (var i = 0; i < intervals.length; i++) {
    filter1.push(intervals[i].start);
  }
  filter = filter.sort(function (a, b) {
    return a - b;
  });
  var res = [];
  for (i = 0; i < intervals.length; i++) {
    if (intervals[i].end > filter[filter.length - 1]) {
      res[i] = -1;
    } else if (intervals[i].end == filter[filter.length - 1]) {
      res[i] = filter1.indexOf(filter[filter.length - 1]);
    } else {
      for (var j = 1; j < filter.length; j++) {
        if (intervals[i].end < filter[j] && intervals[i].end >= filter[j - 1]) {
          res[i] = filter1.indexOf(filter[j - 1]);
        }
      }
    }
  }
  return res;
};
