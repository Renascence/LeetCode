const getSum = (arr, val) => {
  let minSum = 0;
  let maxSum = 0;
  arr.forEach((i) => {
    if (i < val) {
      minSum++;
    }
    if (i > val) {
      maxSum++;
    }
  });
  return {
    minSum,
    maxSum,
  };
};

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  const len = rating.length;
  let res = 0;
  for (let i = 1; i < len - 1; i++) {
    const left = getSum(rating.slice(0, i), rating[i]);
    const right = getSum(rating.slice(i + 1), rating[i]);
    res = res + left.minSum * right.maxSum + left.maxSum * right.minSum;
  }
  return res;
};
