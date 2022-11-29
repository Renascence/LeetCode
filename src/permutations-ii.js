/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const dfs = (arr, cur) => {
    if (arr.length === 1) {
      res.push([...cur, arr[0]]);
    }
    for (let i = 0; i < arr.length; i++) {
      const left = arr.slice(0, i);
      const right = arr.slice(i + 1);
      if (!left.includes(arr[i])) {
        dfs([...left, ...right], [...cur, arr[i]]);
      }
    }
  };
  dfs(nums, []);
  return res;
};
