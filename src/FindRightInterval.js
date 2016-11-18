var findRightInterval = function (intervals) {
  var filter = []
  for (var i = 0; i < intervals.length; i++) {
    filter.push(intervals[i].start)
  }
  filter = filter.sort()
  var res = []
  for (i = 0; i < intervals.length; i++) {
    if(intervals[i].end < filter[0]) res[i] = -1
    else {
      for (var j = 0; j < filter.length; j++){
        if(filter[j] > intervals[i].end) res.push(j-1)
        break;
      }
    }
    //   console.log(filter, intervals[i].end, BinarySearch(filter, intervals[i].end))
    // res.push(BinarySearch(filter, intervals[i].end))
  }
  return res
};