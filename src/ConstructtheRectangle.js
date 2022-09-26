/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  var w = area;
  var res = [area, 1];
  while (w >= area / w) {
    if (area % w == 0) res = [w, area / w];
    w--;
  }
  return res;
};
