/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length == 0) return 0;
  if (timeSeries.length == 1) return duration;
  var res = 0;
  for (var i = 0; i < timeSeries.length - 1; i++) {
    if (timeSeries[i + 1] - timeSeries[i] > duration) {
      res += duration;
    } else {
      res = res + timeSeries[i + 1] - timeSeries[i];
    }
  }
  return res + duration;
};
