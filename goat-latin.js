/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  return S.split(' ').map((i, index) => {
    if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].indexOf(i[0]) == -1) {
      i = i.slice(1) + i[0]
    }
    i = i + 'ma'
    let arr = []
    arr.length = index + 1;
    arr.fill('a')
    i = i + arr.join('')
    return i
  }).join(' ')
};