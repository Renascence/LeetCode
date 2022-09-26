/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const moveObj = {
    L: 0,
    R: 0,
    U: 0,
    D: 0,
  };
  moves.split('').forEach((move) => {
    moveObj[move]++;
  });
  return moveObj.L === moveObj.R && moveObj.U === moveObj.D;
};
