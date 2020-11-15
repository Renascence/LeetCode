/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => a - b)
  const times = piles.length / 3
  let res = 0
  for (let i = times; i < piles.length; i = i + 2) {
    res = piles[i] + res
  }
  return res
};