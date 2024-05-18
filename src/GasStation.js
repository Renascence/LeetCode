/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const sumGas = gas.reduce((a, b) => a + b, 0);
  const sumCost = cost.reduce((a, b) => a + b, 0);
  if (sumGas < sumCost) {
    return -1;
  }
  const len = cost.length;
  let remain = 0;
  let res = 0;
  for (let i = 0; i < len; i++) {
    remain = remain + gas[i] - cost[i];
    if (remain < 0) {
      remain = 0;
      res = i + 1;
    }
  }
  return res;
};
