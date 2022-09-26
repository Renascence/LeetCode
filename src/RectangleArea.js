/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  var area1 = Math.abs((D - B) * (A - C));
  var area2 = Math.abs((H - F) * (G - E));
  if (A >= G || B >= H || C <= E || D <= F) {
    return area1 + area2;
  }
  var top = Math.min(D, H),
    bottom = Math.max(B, F),
    left = Math.max(A, E),
    right = Math.min(C, G);

  return area1 + area2 - (top - bottom) * (right - left);
};
