/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const wordsMap = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const morses = words.map(word => {
    let str = '';
    for(let i =0; i< word.length; i++) {
      str += wordsMap[word[i].charCodeAt() - 97]; 
    }
    return str
  })
  const temp = {};
  let res = 0;
  morses.forEach(item => {
    if(!temp[item]) {
      temp[item] = true;
      res ++ 
    }
  })
  return res
};