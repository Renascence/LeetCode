/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  function findR() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] === 'R') {
          return [i, j];
        }
      }
    }
  }
  const [i, j] = findR();
  let res = 0;
  for (let x = i; x >= 0; x--) {
    if (board[x][j] === 'B') {
      break;
    } else if (board[x][j] === 'p') {
      res++;
      break;
    }
  }
  for (let x = i; x < 8; x++) {
    if (board[x][j] === 'B') {
      break;
    } else if (board[x][j] === 'p') {
      res++;
      break;
    }
  }
  for (let y = j; y >= 0; y--) {
    if (board[i][y] === 'B') {
      break;
    } else if (board[i][y] === 'p') {
      res++;
      break;
    }
  }
  for (let y = j; y < 8; y++) {
    if (board[i][y] === 'B') {
      break;
    } else if (board[i][y] === 'p') {
      res++;
      break;
    }
  }
  return res;
};
