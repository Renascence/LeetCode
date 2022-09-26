var countBattleships = function (board) {
  function shipHead(i, j) {
    if (board[i][j] == 'X') {
      if (i == 0 && j == 0) return board[0][0] == 'X';
      if (i == 0) {
        return board[i][j - 1] == '.';
      }
      if (j == 0) {
        return board[i - 1][j] == '.';
      }
      return board[i][j - 1] == '.' && board[i - 1][j] == '.';
    }
    return false;
  }

  var res = 0;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (shipHead(i, j)) res++;
    }
  }
  return res;
};
