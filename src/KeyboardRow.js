/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  var map = {
    'q': 0,
    'w': 0,
    'e': 0,
    'r': 0,
    't': 0,
    'y': 0,
    'u': 0,
    'i': 0,
    'o': 0,
    'p': 0,
    'a': 1,
    's': 1,
    'd': 1,
    'f': 1,
    'g': 1,
    'h': 1,
    'j': 1,
    'k': 1,
    'l': 1,
    'z': 2,
    'x': 2,
    'c': 2,
    'v': 2,
    'b': 2,
    'n': 2,
    'm': 2,
    'Q': 0,
    'W': 0,
    'E': 0,
    'R': 0,
    'T': 0,
    'Y': 0,
    'U': 0,
    'I': 0,
    'O': 0,
    'P': 0,
    'A': 1,
    'S': 1,
    'D': 1,
    'F': 1,
    'G': 1,
    'H': 1,
    'J': 1,
    'K': 1,
    'L': 1,
    'Z': 2,
    'X': 2,
    'C': 2,
    'V': 2,
    'B': 2,
    'N': 2,
    'M': 2,
  }
  var res = []
  for(var i in words) {
    if(check(words[i])) {
      res.push(words[i])
    }
  }
  return res

  function check(str) {
    var res = true
    if (str.length == 1) return res
    else {
      for (var i = 0; i < str.length - 1; i++) {
        if(map[str[i]] != map[str[i+1]]) return false
      }
      return res
    }
  }
};