/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  function map(nums, sum, lv, hash) {
    const key = `${lv}->${sum}`
    if (hash.hasOwnProperty(key)) {
      return hash[key]
    }
    if (lv == nums.length) {
      return sum === S ? 1 : 0
    }
    let add = map(nums, sum + nums[lv], lv + 1, hash)
    let minus = map(nums, sum - nums[lv], lv + 1, hash)
    hash[key] = add + minus
    return add+minus
  }
  return map(nums, 0, 0, {})
};
