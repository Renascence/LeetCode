/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let hash = []
  let len = 0
  candies.forEach((item) => {
    if (!hash[item]) {
      hash[item] = 1;
      len++
    }
  })
  const res = candies.length / len >= 2 ? len : candies.length / 2
  return res
};

