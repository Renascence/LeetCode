/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (var i = 0; i < 9; i++) {
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var j = 0; j < 9; j++) {
      if (board[i][j] == '.') continue;
      if (board[i][j] > 0 && board[i][j] <= 9) {
        arr[board[i][j] - 1]++;
        if (arr[board[i][j] - 1] > 1) return false;
      }
    }
  }
  for (var i = 0; i < 9; i++) {
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var j = 0; j < 9; j++) {
      if (board[j][i] == '.') continue;
      if (board[j][i] > 0 && board[j][i] <= 9) {
        arr[board[j][i] - 1]++;
        if (arr[board[j][i] - 1] > 1) return false;
      }
    }
  }
  for (var i = 0; i < 9; i++) {
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var j = 0; j < 9; j++) {
      var num =
        board[parseInt(i / 3) * 3 + parseInt(j / 3)][(i % 3) * 3 + (j % 3)];
      if (num == '.') continue;
      if (num > 0 && num <= 9) {
        arr[num - 1]++;
        if (arr[num - 1] > 1) return false;
      }
    }
  }
  return true;
};
