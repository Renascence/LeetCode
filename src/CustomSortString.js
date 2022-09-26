/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
  const len = S.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    map[S[i]] = i;
  }
  return T.split('')
    .sort((a, b) => {
      if (map[b] === undefined) {
        map[b] = 0;
      }
      if (map[a] === undefined) {
        map[a] = 0;
      }
      return map[a] - map[b];
    })
    .join('');
};
