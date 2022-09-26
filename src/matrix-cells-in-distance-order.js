/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  const maxLen = Math.max(R - 1 - r0, r0) + Math.max(C - 1 - c0, c0);
  const res = [[r0, c0]];
  for (let i = 1; i <= maxLen; i++) {
    for (let j = 1; j < i; j++) {
      if (isValidate(r0 - j, c0 - i + j)) {
        res.push([r0 - j, c0 - i + j]);
      }
      if (isValidate(r0 - j, c0 + i - j)) {
        res.push([r0 - j, c0 + i - j]);
      }
      if (isValidate(r0 + j, c0 + i - j)) {
        res.push([r0 + j, c0 + i - j]);
      }
      if (isValidate(r0 + j, c0 - i + j)) {
        res.push([r0 + j, c0 - i + j]);
      }
    }
    if (isValidate(r0 - i, c0)) {
      res.push([r0 - i, c0]);
    }
    if (isValidate(r0 + i, c0)) {
      res.push([r0 + i, c0]);
    }
    if (isValidate(r0, c0 - i)) {
      res.push([r0, c0 - i]);
    }
    if (isValidate(r0, c0 + i)) {
      res.push([r0, c0 + i]);
    }
  }

  function isValidate(r, c) {
    let flag = true;
    if (r < 0 || c < 0 || r >= R || c >= C) {
      flag = false;
    }
    return flag;
  }
  return res;
};
