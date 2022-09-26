/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  houses.sort(function (a, b) {
    return a - b;
  });
  heaters.sort(function (a, b) {
    return a - b;
  });
  function minDist(house) {
    if (heaters.length == 1) return Math.abs(heaters[0] - house);
    for (var i = 0; i < heaters.length - 1; i++) {
      if (heaters[i] <= house && heaters[i + 1] >= house) {
        return Math.min(house - heaters[i], heaters[i + 1] - house);
      }
    }
    if (house < heaters[0]) return heaters[0] - house;
    if (house > heaters[heaters.length - 1])
      return house - heaters[heaters.length - 1];
  }
  var res = 0;
  for (var j in houses) {
    res = Math.max(minDist(houses[j]), res);
  }
  return res;
};
