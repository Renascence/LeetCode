/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  const res = [];
  let current = pref[0];
  pref.forEach((v, index) => {
    if (index !== 0) {
      res.push(current ^ v);
      current = current ^ current ^ v;
    } else {
      res.push(v);
    }
  });
  return res;
};
