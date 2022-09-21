// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function (operations) {
  let X = 0;
  operations.forEach((str) => eval(str));
  return X;
};
