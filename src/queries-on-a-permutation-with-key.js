/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  const arr = [];
  const res = [];
  for (let i = 1; i <= m; i++) {
    arr.push(i);
  }
  queries.forEach((num) => {
    let find = false;
    for (let i = 0; i < m; i++) {
      if (arr[i] === num) {
        res.push(i);
        find = true;
      }

      if (find) {
        for (let j = i; j >= 1; j--) {
          arr[j] = arr[j - 1];
        }
        arr[0] = num;
        break;
      }
    }
  });
  return res;
};
