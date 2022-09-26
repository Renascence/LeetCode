var reconstructQueue = function (people) {
  if (people.length == 0 || people.length == 1) return people;
  people.sort(function (a, b) {
    return b[0] - a[0] || (a[0] == b[0] && a[1] - b[1]);
  });
  var maxH = people[0][0];
  var res = [];
  for (var i in people) {
    if (people[i][0] == maxH) {
      res[i] = people[i];
    }
  }
  for (var j = res.length; j < people.length; j++) {
    res.splice(people[j][1], 0, people[j]);
  }
  return res;
};
