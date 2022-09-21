var maximumWealth = function (accounts) {
  return Math.max(
    ...accounts.map((arr) => arr.reduce((pre, val) => pre + val, 0))
  );
};
