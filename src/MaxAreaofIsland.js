/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const walkedLands = [];
  const res = [0];
  function getLands(i, j) {
    const id = `${i}/${j}`;
    if (walkedLands.indexOf(id) !== -1 || !grid[i] || !grid[i][j]) {
      return 0;
    }
    if (grid[i][j]) {
      walkedLands.push(id);
      return (
        1 +
        getLands(i, j - 1) +
        getLands(i - 1, j) +
        getLands(i + 1, j) +
        getLands(i, j + 1)
      );
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] && walkedLands.indexOf(`${i}/${j}`) === -1) {
        res.push(getLands(i, j));
      }
    }
  }
  return Math.max(...res);
};
