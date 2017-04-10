/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.split(' ')
  let reverseWords = []
  Object.keys(words).forEach((keys) => {
    reverseWords[keys] = words[keys].split('').reverse().join('')
  })
  return reverseWords.join(' ')
};