/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  var secretArr = secret.split('')
  var guessArr = guess.split('')
  var bull = []
  var secretCow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  var guessCow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  var cowRes = 0
  for (var i = 0; i < secretArr.length; i++) {
    if (secretArr[i] == guessArr[i]) {
      bull.push(i)
    }
  }
  for (i = bull.length - 1; i >= 0; i--) {
    secretArr.splice(bull[i], 1)
    guessArr.splice(bull[i], 1)
  }
  for (i = 0; i < secretArr.length; i++) {
    secretCow[secretArr[i]]++
    guessCow[guessArr[i]]++
  }

  for (i = 0; i < 10; i++) {
    cowRes += Math.min(secretCow[i], guessCow[i])
  }
  return bull.length + 'A' + cowRes + 'B'
};