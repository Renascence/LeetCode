var islandPerimeter = function (grid) {
  var interfacing = 0;
  var nums = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      interfacing += cal(i, j);
      if (grid[i][j] == 1) nums++;
    }
  }
  return nums * 4 - interfacing;
  function cal(i, j) {
    var len = 0;
    if (grid[i][j] == 1) {
      if (i > 0) {
        if (grid[i - 1][j] == 1) len++;
      }
      if (i < grid.length - 1) {
        if (grid[i + 1][j] == 1) len++;
      }
      if (j > 0) {
        if (grid[i][j - 1] == 1) len++;
      }
      if (j < grid[0].length - 1) {
        if (grid[i][j + 1] == 1) len++;
      }
    }
    return len;
  }
};
