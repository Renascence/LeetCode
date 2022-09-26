/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const chars = tiles.split('');
  let arr = [];
  arr.length = 26;
  arr.fill(0);
  function backTrack(arr) {
    let sum = 0;
    for (let i = 0; i < 26; i++) {
      if (arr[i] !== 0) {
        sum++;
        arr[i]--;
        sum += backTrack(arr);
        arr[i]++;
      }
    }
    return sum;
  }
  for (let i = 0; i < chars.length; i++) {
    arr[chars[i].charCodeAt() - 65]++;
  }
  return backTrack(arr);
};
